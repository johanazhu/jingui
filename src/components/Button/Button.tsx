import React, { FC, TouchEvent, MouseEvent, useState } from 'react';
import classNames from 'classnames';
import { MOVEOFFSET, tuple } from '../utils';
// import { Loading } from 'components';

let touchX = 0;
let touchXPos = 0;
let touchY = 0;
let touchYPos = 0;

const buttonColor = tuple('blue', 'orange', 'green', 'red', 'yellow', 'purple');
const buttonType = tuple('small', 'block');
const buttonState = tuple('loading', 'disable', 'active');

interface ButtonProps {
    color?: string;
    type?: string;
    state?: string;
    primary?: boolean;
    className?: string;
    size?: string;
    style?: React.CSSProperties;
    onClick?: (e: MouseEvent) => void;
}

const Button: FC<ButtonProps> = (props) => {
    const [isActive, setIsActive] = useState(false);

    const { color, style, type, state, primary, className, children, size } =
        props;

    const classes = classNames('jing-button', className, {
        [`jing-button__color-${color}`]: type !== 'block' && color,
        [`jing-button__type-${type}`]: type,
        [`jing-button__state-${state}`]: state,
        [`jing-button__sise-${size}`]: size,
        ['jing-button__type-primary']: primary,
        ['jing-button__state-active']: isActive,
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
    color: 'purple',
    state: 'active',
};

export default React.memo(Button);
