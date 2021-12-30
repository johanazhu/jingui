import React, {
    FC,
    useRef,
    useState,
    useEffect,
    forwardRef,
    memo,
    useMemo,
    CSSProperties,
    MouseEvent,
    ReactNode,
    ReactElement,
} from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { isDef, noop } from '@/utils';
import IndexAnchor from './IndexAnchor';
import { useRefs } from '../hooks/use-refs';
import { getRect } from '../hooks/use-rect';
import useTouch from '../hooks/use-touch';
import useScrollParent, { getScrollParent } from '../hooks/use-scroll-parent';
import {
    getScrollTop,
    getRootScrollTop,
    setRootScrollTop,
} from '@/utils/dom/scroll';
import { IndexBarInstance, IndexBarProps, IndexBarType } from './PropType';
import { INDEX_ANCHORE_KEY } from './IndexAnchor';

const prefixCls = 'jing-index-bar';

const IndexBar: IndexBarType = (props) => {
    const {
        className,
        style,
        zIndex = 1,
        indexList = genAlphabet(),
        sticky,
        stickyOffsetTop = 0,
        highlightColor,
        children,
        onChange,
        onSelect,
    } = props;

    const classes = classnames(prefixCls, className, {});

    const [activeAnchor, setActiveAnchor] = useState<string | number>('');

    const root = useRef<HTMLDivElement>(null);
    const sidebar = useRef<HTMLDivElement>(null);
    const touchActiveIndex = useRef<number>(null);

    const touch = useTouch();
    const scrollParent = useScrollParent(root) as Element;
    const [refs, setRefs] = useRefs();

    const sidebarStyle = useMemo(() => {
        if (isDef(zIndex)) {
            return {
                zIndex: +zIndex + 1,
            };
        }
        return {};
    }, [zIndex]);

    const highlightStyle = useMemo(() => {
        if (highlightColor) {
            return {
                color: highlightColor,
            };
        }
        return {};
    }, [highlightColor]);

    useEffect(() => {
        if (onChange && typeof onChange === 'function') {
            onChange(activeAnchor);
        }
    }, [activeAnchor]);

    const getScrollerRect = () => {
        if (scrollParent.getBoundingClientRect()) {
            return getRect(scrollParent);
        }
        return {
            top: 0,
            left: 0,
        };
    };

    const getActiveAnchor = (scrollTop: number, rects: any) => {
        for (let i = rects.length - 1; i >= 0; i -= 1) {
            const prevHeight = i > 0 ? rects[i - 1].height : 0;
            const reachTop = props.sticky ? prevHeight + stickyOffsetTop : 0;

            if (scrollTop + reachTop >= rects[i].top) {
                return i;
            }
        }

        return -1;
    };

    const onScroll = () => {
        if (!root.current || !scrollParent) {
            return;
        }
        const scrollTop = getScrollTop(scrollParent);
        const scrollParentRect = getScrollerRect();

        const rects = Object.values(refs).map((anchor: any) => {
            return anchor.getRect(scrollParent, scrollParentRect);
        });

        const active = getActiveAnchor(scrollTop, rects);

        setActiveAnchor(indexList[active]);

        if (sticky) {
            Object.values(refs).forEach((item: any, index) => {
                const { updateState } = item;
                if (index === active || index === active - 1) {
                    const rect = item.root.current.getBoundingClientRect();
                    updateState({ left: rect.left, width: rect.width });
                } else {
                    updateState({ left: null, width: null });
                }
                if (index === active) {
                    updateState({
                        active: true,
                        top:
                            Math.max(
                                stickyOffsetTop,
                                rects[index].top - scrollTop,
                            ) + scrollParentRect.top,
                    });
                } else if (index === active - 1) {
                    const activeItemTop = rects[active].top - scrollTop;
                    updateState({
                        active: activeItemTop > 0,
                        top:
                            activeItemTop +
                            scrollParentRect.top -
                            rects[index].height,
                    });
                } else {
                    updateState({ active: false });
                }
            });
        }
    };

    useEffect(() => {
        setTimeout(onScroll, 0);
    }, []);

    const scrollTo = (index: number | string) => {
        if (!index) {
            return;
        }

        if (refs[index]) {
            refs[index].root.current.scrollIntoView();

            if (sticky && stickyOffsetTop) {
                setRootScrollTop(getRootScrollTop() - stickyOffsetTop);
            }

            if (onSelect && typeof onSelect === 'function') {
                onSelect(activeAnchor);
            }
        }
    };

    const scrollToElement = (element: any) => {
        const { index } = element.dataset;
        scrollTo(index);
    };

    const onClickSidebar = (event: MouseEvent) => {
        scrollToElement(event.target);
    };

    const onTouchStart = (event: TouchEvent | React.TouchEvent) => {
        touch.start(event as TouchEvent);
    };

    const renderIndexes = () =>
        indexList.map((index: any) => {
            const active = index === activeAnchor;
            return (
                <span
                    key={index}
                    className={`${prefixCls}__index`}
                    style={active ? highlightStyle : {}}
                    data-index={index}
                >
                    {index}
                </span>
            );
        });

    const renderSidebar = () => {
        return (
            <div
                className={`${prefixCls}__sidebar`}
                style={sidebarStyle}
                onClick={onClickSidebar}
                onTouchStart={onTouchStart}
            >
                {renderIndexes()}
            </div>
        );
    };

    const handleMapChildren = ($children: ReactNode) => {
        return React.Children.toArray($children)
            .filter(Boolean)
            .map((child: ReactElement) => {
                if (
                    child.type?.['__REACT_JING_COMPONENT'] === INDEX_ANCHORE_KEY
                ) {
                    return React.cloneElement(child, {
                        ref: setRefs(child.props.index),
                    });
                }
                if (child.props?.children) {
                    const deepMap = handleMapChildren(child.props.children);
                    return deepMap.length ? deepMap : child;
                }
                return child;
            });
    };

    const renderContent = React.Children.map(children, (element, index) => {
        if (!React.isValidElement(element)) return null;

        return <IndexAnchor index={'1'} />;
    });

    return (
        <div className={classes} style={style}>
            {renderSidebar()}
            {renderContent}
        </div>
    );
};

function genAlphabet() {
    const indexList = [];
    const charCodeOfA = 'A'.charCodeAt(0);

    for (let i = 0; i < 26; i += 1) {
        indexList.push(String.fromCharCode(charCodeOfA + i));
    }

    return indexList;
}

IndexBar.defaultProps = {
    zIndex: 1,
    sticky: true,
    highlightColor: '3264c8',
    stickyOffsetTop: 0,
    indexList: genAlphabet(),
};

IndexBar.Anchor = IndexAnchor;

export default IndexBar;
