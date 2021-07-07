import React, { useState, useEffect, useRef, TouchEvent } from 'react';
import classnames from 'classnames';
import { IconKeyboardDelete, IconKeyboardDeleteLine } from '../Icon';
import { upperSymbolDictionary, KEYBOARDMOVEOFFSET } from '../utils';

export interface KeyProps {
    className?: string;
    text: string;
    type: string;
    value: string;
    keyBoardHeight?: number;
    onPress: (text: string, type: string) => void;
    keyActive: string;
    onTouchStartCb?: (text: any) => void;
    changeDoneActive?: boolean;
}

let startX = 0;
let startY = 0;
let offsetX = 0;
let offsetY = 0;

const SymbolKey = React.forwardRef((props: KeyProps, ref: any) => {
    const {
        className,
        value,
        text,
        type,
        keyActive,
        onTouchStartCb,
        changeDoneActive,
        onPress,
    } = props;

    const [isActive, setIsActive] = useState(keyActive);
    const [isSymbolActive, setIsSymbolActive] = useState(false);

    const symbolKey = useRef<HTMLDivElement>(null);
    const longPressTimerRef = useRef<any>(null);
    const valueRef = useRef<any>(value);

    useEffect(() => {
        setIsActive(keyActive);
    }, [keyActive]);

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    const keyClasses = classnames(className, {
        [`${className}-symbol__active`]:
            isActive === text && upperSymbolDictionary.indexOf(type) > -1,
        [`${className}-symbol__symbol__active`]:
            isSymbolActive && (type === 'ABC' || type === 'del'),
        [`${className}-symbol__done__active`]:
            changeDoneActive && type === 'done',
    });

    function valDelete() {
        if (valueRef.current.length > 0) {
            onPress(
                valueRef.current.substring(0, valueRef.current.length - 1),
                type,
            );
        }
    }

    function onLongPressIn() {
        if (type === 'del') {
            valDelete();
            longPressTimerRef.current = setTimeout(() => {
                longPressTimerRef.current = setInterval(() => {
                    valDelete();
                }, 150);
            }, 750);
        }
    }

    function onLongPressOut() {
        if (type === 'del') {
            clearInterval(longPressTimerRef.current);
            longPressTimerRef.current = null;
        }
    }

    function handleTouchStart(e: TouchEvent) {
        upperSymbolDictionary.indexOf(type) > -1 &&
            onTouchStartCb &&
            // @ts-ignore
            onTouchStartCb(e.target.innerText);
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        if (type === 'del' || type === 'symbol' || type === 'ABC') {
            setIsSymbolActive(true);
        }
        onLongPressIn();
    }

    function handleTouchMove(e: TouchEvent) {
        const touch = e.touches[0];
        offsetX = Math.abs(touch.clientX - startX);
        offsetY = Math.abs(touch.clientY - startY);
        if (offsetX > KEYBOARDMOVEOFFSET || offsetY > KEYBOARDMOVEOFFSET) {
            setIsSymbolActive(false);
        }
    }

    function handleTouchEnd(e: TouchEvent) {
        setIsSymbolActive(false);
        if (typeof onPress === 'function') {
            if (type === 'del') {
                onLongPressOut();
            } else {
                onPress(text, type);
            }
        }
    }

    function renderText() {
        if (type === 'del') {
            return (
                <>
                    <IconKeyboardDelete
                        style={{ display: isSymbolActive ? 'block' : 'none' }}
                        color="black"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    />
                    <IconKeyboardDeleteLine
                        style={{ display: isSymbolActive ? 'none' : 'block' }}
                        color="black"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    />
                </>
            );
        }
        if (type === 'symbol') return 'ABC';
        if (type === 'done') return '完成';
        return text;
    }

    return (
        <div
            ref={symbolKey}
            className={keyClasses}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <span className={classnames(`${className}-span`)}>
                {renderText()}
            </span>
        </div>
    );
});

export default React.memo(SymbolKey);
