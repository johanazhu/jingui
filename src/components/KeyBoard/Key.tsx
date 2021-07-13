import React, {
    useState,
    useEffect,
    TouchEvent,
    forwardRef,
    useRef,
} from 'react';

import classnames from 'classnames';

import { IconKeyboardDeleteLine } from '../Icon';

export interface KeyProps {
    className?: string;
    text: string;
    type: string;
    value: string;
    keyBoardHeight?: number;
    onPress: (text: string, type: string) => void;
    keyActive: string;
    isNew?: boolean;
    onTouchStartCb?: (text: any) => void;
}

let startX = 0;
let startY = 0;

const Key = forwardRef((props: KeyProps, ref: any) => {
    const {
        text,
        type,
        value,
        className,
        onPress,
        keyActive,
        isNew,
        onTouchStartCb,
    } = props;

    const [isActive, setIsActive] = useState(keyActive);

    const longPressTimerRef = useRef<any>(null);
    const valueRef = useRef<any>(value);

    useEffect(() => {
        setIsActive(keyActive);
    }, [keyActive]);

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    function valDelete() {
        if (valueRef.current.length > 0) {
            onPress(
                valueRef.current.substring(0, valueRef.current.length - 1),
                type,
            );
        }
    }

    function onLongPressIn() {
        valDelete();
        longPressTimerRef.current = setTimeout(() => {
            longPressTimerRef.current = setInterval(() => {
                valDelete();
            }, 150);
        }, 750);
    }

    function onLongPressOut() {
        clearInterval(longPressTimerRef.current);
        longPressTimerRef.current = null;
    }

    function handleTouchStart(e: TouchEvent) {
        startX = e.changedTouches[0].pageX;
        startY = e.changedTouches[0].pageY;
        if (type === 'del') {
            onTouchStartCb && onTouchStartCb('del');
            onLongPressIn();
        } else {
            // @ts-ignore
            onTouchStartCb && onTouchStartCb(e.target.innerText);
        }
    }

    function handleTouchEnd() {
        if (type === 'del') {
            onLongPressOut();
        } else {
            onPress(text, type);
        }
    }

    const keyClasses = classnames(`${className}`, {
        [`${className}-emty`]: type === 'emty',
        [`${className}-active`]:
            (type !== 'emty' && isActive === text) || isActive === type,
    });

    function renderText() {
        if (isNew && type === 'del')
            return isActive === 'del' ? (
                <IconKeyboardDeleteLine size="lg" color="white" />
            ) : (
                <IconKeyboardDeleteLine size="lg" color="black" />
            );
        if (type === 'del')
            return isActive === 'del' ? (
                <IconKeyboardDeleteLine size="lg" color="white" />
            ) : (
                <IconKeyboardDeleteLine size="lg" color="black" />
            );
        return text;
    }

    return (
        <div
            className={keyClasses}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <span
                className={classnames(`${className}-span`, {
                    [`${className}-span-isNew`]: isNew,
                })}
            >
                {renderText()}
            </span>
        </div>
    );
});

export default React.memo(Key);
