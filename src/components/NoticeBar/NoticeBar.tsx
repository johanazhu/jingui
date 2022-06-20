import React, {
    FC,
    useState,
    useEffect,
    useImperativeHandle,
    useRef,
    forwardRef,
} from 'react';
import classnames from 'classnames';
import { getRect } from '../hooks/useRect';
import { doubleRaf, isDef, raf } from '@/utils';
import { IconClose, IconArrow, IconNotice } from '../Icon';
import { NoticeBarProps } from './PropType';

const prefixCls = 'jing-notice-bar';

const NoticeBar: FC<NoticeBarProps> = (props) => {
    const { text, center, duration, scrollable, mode, onClick, onClose } =
        props;

    const [isShow, setIsShow] = useState(true);
    const [state, setState] = useState({
        offset: 0,
        duration: 0,
    });

    let wrapRef = useRef<HTMLDivElement>(null);
    let contentRef = useRef<HTMLDivElement>(null);

    const wrapWidth = useRef(0);
    const contentWidth = useRef(0);
    const startTimer = useRef<any>(null);

    const reset = () => {
        // const ms = isDef(duration)
        wrapWidth.current = 0;
        contentWidth.current = 0;

        setState({
            offset: 0,
            duration: 0,
        });

        clearTimeout(startTimer.current);
        startTimer.current = setTimeout(() => {
            if (
                !wrapRef.current ||
                !contentRef.current ||
                scrollable === false
            ) {
                return;
            }

            const wrapRefWidth = getRect(wrapRef.current).width;
            const contentRefWidth = getRect(contentRef.current).width;

            if (scrollable || contentRefWidth > wrapRefWidth) {
                doubleRaf(() => {
                    wrapWidth.current = wrapRefWidth;
                    contentWidth.current = contentRefWidth;

                    setState({
                        offset: -contentWidth.current,
                        duration:
                            duration || (contentRefWidth / wrapRefWidth) * 15,
                    });
                });
            }
        }, duration);
    };

    useEffect(() => {
        reset();
    }, [text, scrollable]);

    const onHandleClose = (e: any) => {
        e.stopPropagation();
        setIsShow(false);
        onClose && onClose();
    };

    const renderLeftIcon = () => {
        return (
            <div className={`${prefixCls}__left`}>
                <IconNotice color="orange" size="sm" />
            </div>
        );
    };

    const onTransitionEnd = () => {
        setState({
            offset: wrapWidth.current,
            duration: 0,
        });

        raf(() => {
            doubleRaf(() => {
                setState({
                    offset: -contentWidth.current,
                    duration:
                        duration ||
                        (contentWidth.current / wrapWidth.current) * 15,
                });
            });
        });
    };

    const renderMarquee = () => {
        const contentClass = classnames(`${prefixCls}__content`, {
            'jing-ellipsis': scrollable === false,
        });

        const _style = {
            transform: state.offset ? `translateX(${state.offset}px)` : '',
            transitionDuration: `${state.duration}s`,
        };

        return (
            <div
                className={`${prefixCls}__wrap`}
                style={{ justifyContent: center ? 'center' : 'flex-start' }}
                ref={wrapRef}
            >
                <div
                    className={contentClass}
                    ref={contentRef}
                    style={_style}
                    onTransitionEnd={onTransitionEnd}
                >
                    {text}
                </div>
            </div>
        );
    };

    const renderRightIcon = () => {
        if (mode === 'closeable') {
            return (
                <div className={`${prefixCls}__close`} onClick={onHandleClose}>
                    <IconClose color="orange" size="sm" />
                </div>
            );
        } else if (mode === 'link') {
            return (
                <div className={`${prefixCls}__link`}>
                    <IconArrow color="orange" size="sm" />
                </div>
            );
        } else {
            return <div className={`${prefixCls}__normal`}></div>;
        }
    };

    return (
        <>
            {isShow ? (
                <div className={prefixCls} onClick={onClick}>
                    {renderLeftIcon()}
                    {renderMarquee()}
                    {renderRightIcon()}
                </div>
            ) : null}
        </>
    );
};

NoticeBar.defaultProps = {
    mode: 'normal',
};

export default React.memo(NoticeBar);
