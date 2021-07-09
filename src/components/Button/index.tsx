import React, { FC, TouchEvent, MouseEvent, useState } from 'react';
import classNames from 'classnames';
import { MOVEOFFSET, tuple } from '../utils';
// import { Loading } from 'components';

let touchX = 0;
let touchXPos = 0;
let touchY = 0;
let touchYPos = 0;

export type ButtonColor = 'blue' | 'orange' | 'green';
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';
export type ButtonState = 'loading' | 'disable' | 'active';

export interface ButtonProps {
    className?: string;
    color?: ButtonColor;
    size?: ButtonSize;
    state?: ButtonState;
    block?: boolean;
    style?: React.CSSProperties;
    onClick?: (e: MouseEvent) => void;
    children?: React.ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
    const [isActive, setIsActive] = useState(false);

    const { className, color, size, state, block, children, style } = props;

    const prefixCls = 'jing-button';

    const classes = classNames(prefixCls, className, {
        [`${prefixCls}--${color}`]: !!color,
        [`${prefixCls}--${size}`]: !!size,
        [`${prefixCls}--${state}`]: !!state,
        [`${prefixCls}--block`]: !!block,
        [`${prefixCls}--active`]: isActive,
    });

    function handleTouchStart(e: TouchEvent) {
        touchX = e.changedTouches[0].pageX;
        touchY = e.changedTouches[0].pageY;
        setIsActive(true);
    }

    function handleMouseDown(e: MouseEvent) {
        touchX = e.pageX;
        touchY = e.pageY;
        setIsActive(true);
    }

    function handleTouchMove(e: TouchEvent) {
        touchXPos = e.changedTouches[0].pageX;
        touchYPos = e.changedTouches[0].pageY;
        if (
            Math.abs(touchXPos - touchX) > MOVEOFFSET ||
            Math.abs(touchYPos - touchY) > MOVEOFFSET
        ) {
            setIsActive(false);
        }
    }

    function handleMouseMove(e: MouseEvent) {
        touchXPos = e.pageX;
        touchYPos = e.pageY;
        if (
            Math.abs(touchXPos - touchX) > MOVEOFFSET ||
            Math.abs(touchYPos - touchY) > MOVEOFFSET
        ) {
            setIsActive(false);
        }
    }

    function handleTouchEnd() {
        setIsActive(false);
    }

    function handleMouseUp() {
        setIsActive(false);
    }

    function handleClick(e: MouseEvent) {
        const { onClick, state } = props;
        if (typeof onClick === 'function' && state === 'active') {
            onClick(e);
        }
    }

    const butonDidabled = state === 'disable';
    return (
        <button
            className={classes}
            disabled={butonDidabled}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onClick={handleClick}
            style={style}
        >
            {/* {state === 'loading' && <Loading className="loading" />} */}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: 'blue',
    size: 'md',
    block: false,
};

export default React.memo(Button);
