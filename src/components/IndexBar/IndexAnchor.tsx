import React, {
    FC,
    useState,
    useEffect,
    forwardRef,
    useContext,
    useRef,
    useCallback,
    useMemo,
    useImperativeHandle,
} from 'react';
import classnames from 'classnames';
import { COMPONENT_TYPE_KEY, IndexAnchorProps } from './PropType';
import IndexBarContext from './IndexBarContext';
import { getRect as getElementRect } from '../hooks/useRect';
import { useSetState, useHeight } from '../hooks';
import { getScrollTop, getRootScrollTop } from '@/utils/dom/scroll';

export const INDEX_ANCHORE_KEY = Symbol('index-anchor');

const prefixCls = 'jing-index-anchor';

const IndexAnchor: FC<IndexAnchorProps> = forwardRef((props, ref) => {
    const { className, style, index, children, onClick } = props;

    const root = useRef();
    const height = useHeight(root);

    const context = useContext(IndexBarContext);

    const [state, updateState] = useSetState({
        top: 0,
        left: 0,
        rect: { top: 0, height: 0 },
        width: 0,
        active: false,
    });

    const [rect, setRect] = useState({ top: 0, height: 0 });

    const isSticky = useCallback(
        () => state.active && context.sticky,
        [state.active, context.sticky],
    );

    const anchorStyle = useMemo(() => {
        const { zIndex, highlightColor } = context;

        if (isSticky()) {
            return {
                zIndex: `${zIndex}`,
                left: state.left ? `${state.left}px` : null,
                width: state.width ? `${state.width}px` : null,
                transform: state.top
                    ? `translate3d(0, ${state.top}px, 0)`
                    : null,
                color: highlightColor,
            };
        }
        return null;
    }, [isSticky(), state.width, state.left, state.top]);

    const getRect = (scrollParent: Element | Window, scrollParentRect: any) => {
        // @ts-ignore
        const rootRect = getElementRect(root?.current);
        const newState = { ...state } as typeof state;
        newState.rect.height = rootRect.height;
        if (scrollParent === window || scrollParent === document.body) {
            newState.rect.top = rootRect.top + getRootScrollTop();
        } else {
            newState.rect.top =
                rootRect.top +
                getScrollTop(scrollParent) -
                scrollParentRect.top;
        }
        updateState(newState);
        return newState.rect;
    };

    useEffect(() => {
        setRect({ top: rect.top, height });
    }, [height]);

    useImperativeHandle(ref, () => ({
        getRect,
        state,
        updateState,
        root,
    }));

    const sticky = isSticky();

    return (
        <div
            className={className}
            // @ts-ignore
            ref={root}
            style={{
                ...style,
                height: sticky ? `${state.rect.height}px` : undefined,
            }}
        >
            <div
                className={classnames(prefixCls, {
                    [`${prefixCls}--sticky`]: sticky,
                    'jing-hairline--bottom': sticky,
                })}
                onClick={onClick}
            >
                {children || index}
            </div>
        </div>
    );
});

// @ts-ignore
IndexAnchor[COMPONENT_TYPE_KEY] = INDEX_ANCHORE_KEY;

export default IndexAnchor;
