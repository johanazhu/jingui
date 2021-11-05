import React, {
    useState,
    useEffect,
    useRef,
    TouchEvent,
    forwardRef,
    memo,
    useMemo,
} from 'react';
import classnames from 'classnames';
import {
    IconKeyboardDelete,
    IconKeyboardDeleteLine,
    IconKeyboardShift,
    IconKeyboardShiftLine,
} from '../Icon';
import {
    lowerLetterDictionary,
    upperLetterDictionary,
    KEYBOARDMOVEOFFSET,
} from '../utils';

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

const LetterKey = forwardRef((props: KeyProps, ref: any) => {
    const {
        className,
        text,
        value,
        type,
        keyActive,
        onTouchStartCb,
        changeDoneActive,
        onPress,
    } = props;

    const [isActive, setIsActive] = useState(keyActive);
    const [isDeleteActive, setIsDeleteActive] = useState(false);
    const [isShiftActive, setIsShiftActive] = useState(false);
    const [isLetterActive, setIsLetterActive] = useState(false);

    const letterKey = useRef<HTMLDivElement>(null);
    const longPressTimerRef = useRef<any>(null);
    const valueRef = useRef<any>(value);

    useEffect(() => {
        setIsActive(keyActive);
    }, [keyActive]);

    useEffect(() => {
        // console.log('value', value)
        valueRef.current = value;
    }, [value]);

    const keyClasses = classnames(className, {
        [`${className}-letter__active`]:
            isActive === text &&
            (lowerLetterDictionary.indexOf(type) > -1 ||
                upperLetterDictionary.indexOf(type) > -1),
        [`${className}-letter__symbol__active`]:
            isLetterActive && (type === 'symbol' || type === 'space'),
        [`${className}-letter__del__active`]: isDeleteActive && type === 'del',
        [`${className}-letter__done__active`]:
            changeDoneActive && type === 'done',
        [`${className}-letter__shift__active`]:
            isShiftActive && type === 'shift',
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
        valDelete();
        setIsDeleteActive(true);
        longPressTimerRef.current = setTimeout(() => {
            longPressTimerRef.current = setInterval(() => {
                setIsDeleteActive(true);
                valDelete();
            }, 150);
        }, 750);
    }

    function onLongPressOut() {
        setIsDeleteActive(false);
        clearInterval(longPressTimerRef.current);
        longPressTimerRef.current = null;
    }

    function handleTouchStart(e: TouchEvent) {
        // console.log('e.target.innerText', e.target.innerText)
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        if (
            type === 'del' ||
            type === 'symbol' ||
            type === 'done' ||
            type === 'space'
        ) {
            setIsLetterActive(true);
        }
        if (type === 'del') {
            // onTouchStartCb && onTouchStartCb('del');
            onLongPressIn();
        } else if (type === 'shift') {
            // @ts-ignore
            onTouchStartCb && onTouchStartCb('shift');
        } else if (
            lowerLetterDictionary.indexOf(type) > -1 ||
            upperLetterDictionary.indexOf(type) > -1
        ) {
            // @ts-ignore
            onTouchStartCb && onTouchStartCb(e.target.innerText);
        }
    }

    function handleTouchMove(e: TouchEvent) {
        const touch = e.touches[0];
        offsetX = Math.abs(touch.clientX - startX);
        offsetY = Math.abs(touch.clientY - startY);
        if (offsetX > KEYBOARDMOVEOFFSET || offsetY > KEYBOARDMOVEOFFSET) {
            if (!isShiftActive) {
                setIsShiftActive(true);
            } else {
                setIsShiftActive(false);
            }
        }
    }

    function handleTouchEnd(e: TouchEvent) {
        if (typeof onPress === 'function') {
            if (type === 'del') {
                onLongPressOut();
            } else {
                onPress(text, type);
            }
            if (!isShiftActive) {
                setIsShiftActive(true);
            } else {
                setIsShiftActive(false);
            }
            if (type === 'space') {
                setIsLetterActive(false);
            }
        }
    }

    function renderText(
        type: string,
        isShiftActive: boolean,
        isDeleteActive: boolean,
    ) {
        if (type === 'del') {
            return (
                <>
                    <IconKeyboardDelete
                        style={{ display: isDeleteActive ? 'block' : 'none' }}
                        color="black"
                        onClick={(e: any) => {
                            e.stopPropagation();
                        }}
                    />
                    <IconKeyboardDeleteLine
                        style={{ display: isDeleteActive ? 'none' : 'block' }}
                        color="black"
                        onClick={(e: any) => {
                            e.stopPropagation();
                        }}
                    />
                </>
            );
        }

        if (type === 'shift')
            return isShiftActive ? (
                <IconKeyboardShift
                    size="lg"
                    color="black"
                    onClick={(e: any) => {
                        e.stopPropagation();
                    }}
                />
            ) : (
                <IconKeyboardShiftLine
                    size="lg"
                    color="black"
                    onClick={(e: any) => {
                        e.stopPropagation();
                    }}
                />
            );
        if (type === 'symbol') return '123.*!&';
        if (type === 'space') return '空格';
        if (type === 'done') return '完成';
        return text;
    }

    const renderMemoText = useMemo(
        () => renderText(type, isShiftActive, isDeleteActive),
        [type, isShiftActive, isDeleteActive],
    );

    return (
        <div
            ref={letterKey}
            className={keyClasses}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <span className={classnames(`${className}-span`)}>
                {renderMemoText}
            </span>
        </div>
    );
});

export default React.memo(LetterKey);
