import React, { FC, TouchEvent, MouseEvent, useState } from 'react';
import classNames from 'classnames';
import { IconLoading } from '../Icon';
import { MOVEOFFSET } from '../utils';

let touchX = 0;
let touchXPos = 0;
let touchY = 0;
let touchYPos = 0;

export type ButtonVariant = 'contained' | 'outlined';
export type ButtonColor = 'blue' | 'orange' | 'green';
export type ButtonSize = 'md' | 'sm';

export interface ButtonProps {
    className?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;
    style?: React.CSSProperties;
    onClick?: (e: MouseEvent) => void;
    children?: React.ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
    const [isActive, setIsActive] = useState(false);

    const {
        className,
        variant,
        color,
        size,
        disabled,
        loading,
        block,
        children,
        style,
    } = props;

    const prefixCls = 'jing-button';

    const classes = classNames(prefixCls, className, {
        [`${prefixCls}--${variant}`]: !!variant,
        [`${prefixCls}--${color}`]: !!color,
        [`${prefixCls}--${size}`]: !!size,
        [`${prefixCls}--disabled`]: !!disabled,
        [`${prefixCls}--loading`]: !!loading,
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
        const { onClick } = props;
        if (typeof onClick === 'function') {
            onClick(e);
        }
    }

    const contentRender = loading ? (
        <div className={`${prefixCls}__content`}>
            <IconLoading />
            <span className={`${prefixCls}__content-span`}>{children}</span>
        </div>
    ) : (
        <> {children}</>
    );

    return (
        <button
            className={classes}
            disabled={disabled}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onClick={handleClick}
            style={style}
        >
            {contentRender}
        </button>
    );
};

Button.defaultProps = {
    variant: 'contained',
    color: 'blue',
    size: 'md',
    block: false,
};

export default React.memo(Button);