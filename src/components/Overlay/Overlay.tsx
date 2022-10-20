import React, {
    FC,
    useRef,
    useEffect,
    memo,
    CSSProperties,
    TouchEvent,
} from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { isDef, preventDefault, noop } from '@/utils';
import useLockScroll from '../hooks/use-lock-scroll';
import { OverlayProps } from './PropType';
import './style/index.scss';

const prefixCls = 'jing-overlay';

// defaultProps 已经生效，但 props 需设置 any，暂无解决方案
const Overlay: FC<OverlayProps> = (props: any) => {
    const {
        className,
        zIndex,
        duration,
        type,
        visible,
        style,
        customStyle,
        onClick,
    } = props;

    const [lockScroll, unlockScroll] = useLockScroll(() => props.lockScroll);
    const nodeRef = useRef(null);
    const innerLockRef = useRef(false);

    const preventTouchMove = (event: TouchEvent) => {
        // preventDefault(event, true);
        event.stopPropagation();
    };

    useEffect(() => {
        if (!props.lockScroll) return;
        if (visible) {
            lockScroll();
            innerLockRef.current = true;
        }
        if (!visible && innerLockRef.current) {
            unlockScroll();
            innerLockRef.current = false;
        }
    }, [visible]);

    useEffect(() => {
        return () => {
            if (props.lockScroll) unlockScroll();
        };
    }, []);

    const renderOverlay = () => {
        const _style: CSSProperties = {
            zIndex: zIndex !== undefined ? +zIndex : undefined,
            ...style,
            ...customStyle,
        };

        const classes = classnames(className, prefixCls, {
            [`${prefixCls}--${type}`]: !!type,
        });

        if (isDef(duration)) {
            // @ts-ignore
            _style.animationDuration = `${duration}ms`;
        }

        return (
            <div
                ref={nodeRef}
                style={_style}
                className={classes}
                onClick={onClick}
                onTouchMove={props.lockScroll ? preventTouchMove : noop}
            >
                {props.children}
            </div>
        );
    };

    return (
        <CSSTransition
            nodeRef={nodeRef}
            mountOnEnter
            unmountOnExit
            in={visible}
            timeout={duration}
            classNames="jing-fade"
        >
            {renderOverlay()}
        </CSSTransition>
    );
};

Overlay.defaultProps = {
    type: 'normal',
    visible: false,
    lockScroll: true,
    duration: 300,
};

export default memo(Overlay);
