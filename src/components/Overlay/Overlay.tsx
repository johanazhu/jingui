import React, { FC, useRef, useEffect, memo, CSSProperties } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { isDef, preventDefault, noop } from '@/utils';
import { OverlayProps } from './PropType';

const prefixCls = 'jing-Overlay';

const Overlay: FC<OverlayProps> = (props) => {
    const { className, zIndex, lockScroll, duration, type, visible, style, customStyle, onClick } = props;

    const nodeRef = useRef(null);

    const classes = classnames(className, prefixCls, {
        [`${prefixCls}--${type}`]: !!type,
    });

    const preventTouchMove = (event: TouchEvent) => {
        preventDefault(event, true);
    };

    const renderOverlay = () => {
        const _style: CSSProperties = {
            zIndex: zIndex !== undefined ? +zIndex : undefined,
            ...style,
            ...customStyle
        }

        const classes = classnames(prefixCls, className)

        if (isDef(duration)) {
            _style.animationDuration = `${duration}ms`;
        }

        return (
            <div
                ref={nodeRef}
                style={_style}
                className={classes}
                onClick={onClick}
                onTouchMove={lockScroll ? preventTouchMove : noop}
            >
                {props.children}
            </div>
        )

    }


    // return visible ? (
    //     <div className={classes} style={style} onClick={onClick} />
    // ) : null;

    return (
        <CSSTransition
            nodeRef={nodeRef}
            mountOnEnter
            unmountOnExit
            in={visible}
            timeout={duration}
            classNames={`${prefixCls}-fade`}
        >
            {renderOverlay()}
        </CSSTransition>
    )
};

Overlay.defaultProps = {
    type: 'normal',
    visible: false,
};

export default memo(Overlay);
