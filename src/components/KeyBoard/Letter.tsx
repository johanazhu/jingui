import React, { useState, useEffect, useRef, TouchEvent } from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import LetterKey from './LetterKey';

import {
    upperLetterDictionary,
    lowerLetterDictionary,
    shuffle,
    letterKey,
} from '../utils';

// isRandom 默认不随机排序
export interface LetterProps {
    className?: string;
    isRandom?: boolean;
    value: string;
    updatePosition?: boolean;
    onHandleDelete?: (text: string) => void;
    onHandleValue?: (text: any) => void;
    onHandleDone?: () => void;
    onHandleSymbol?: () => void;
}

let keys: { text: any; type: any }[] = [];

const Letter = (props: LetterProps) => {
    const {
        className,
        isRandom,
        value,
        updatePosition,
        onHandleValue,
        onHandleDelete,
        onHandleDone,
        onHandleSymbol,
    } = props;

    const [letterKeys, setLetterKeys] = useState<any>(null);
    const [keyIsActive, setKeyIsActive] = useState('');
    const [valueHeight, setValueHeight] = useState(0);
    const [doneActive, setDoneActive] = useState(false);

    const letterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isRandom) {
            const randomLetterKey = shuffle(letterKey);
            randomLetterKey.map((item: any) => {
                if (keys.length < 31) {
                    keys.push({ text: item, type: item });
                }
            });
            setLetterKeys(keys);
        } else {
            letterKey.map((item) => {
                if (keys.length < 31) {
                    keys.push({ text: item, type: item });
                }
            });
            setLetterKeys(keys);
        }
        return () => {
            setLetterKeys(null);
        };
    }, []);

    function getElementPosition() {
        if (letterRef.current) {
            const node = letterRef.current.children;
            let hTotal = Math.round(document.body.clientWidth / 1.46);
            const hTitle = Math.round(hTotal * 0.15);
            // @ts-ignore
            node.forEach((element) => {
                if (letterRef.current) {
                    const letterRefTop =
                        letterRef.current.getBoundingClientRect().top;
                    const left = Math.round(element.offsetLeft);
                    const right = Math.round(left + element.offsetWidth);
                    let top;
                    let bottom;
                    if (letterRefTop > document.body.clientHeight) {
                        top = Math.round(
                            letterRefTop - hTotal + element.offsetTop - hTitle,
                        );
                        bottom = Math.round(top + element.offsetHeight);
                    } else {
                        if (Number(letterRef.current?.offsetTop) === hTitle) {
                            top = Math.round(
                                document.body.clientHeight -
                                hTotal +
                                element.offsetTop,
                            );
                            bottom = Math.round(top + element.offsetHeight);
                        } else {
                            top = Math.round(element.offsetTop);
                            bottom = Math.round(top + element.offsetHeight);
                        }
                    }
                    element.data = { left, right, top, bottom };
                }
            });
        }
    }

    useEffect(() => {
        getElementPosition();
    }, [updatePosition]);

    useEffect(() => {
        if (value) {
            setDoneActive(true);
        } else {
            setDoneActive(false);
        }
    }, [value]);

    useEffect(() => {
        if (letterRef.current) {
            let hTotal = Math.round(document.body.clientWidth / 1.46);
            const hTitle = Math.round(hTotal * 0.15);
            const hBase = Math.round((hTotal - hTitle) / 4);
            setValueHeight(hBase * 4);
        }
    }, [letterRef]);

    useEffect(() => {
        getElementPosition();
    }, [letterKeys]);

    function handleTouchMove(e: TouchEvent) {
        const touch = e.touches[0];
        const currentPageX = touch.pageX;
        const currentPageY = touch.pageY;
        if (letterRef.current) {
            const node = letterRef.current.children;
            // @ts-ignore
            node.forEach((element) => {
                if (
                    currentPageX > element.data.left &&
                    currentPageX < element.data.right &&
                    currentPageY > element.data.top &&
                    currentPageY < element.data.bottom
                ) {
                    if (element.innerText === '') {
                        setKeyIsActive('del');
                    } else {
                        setKeyIsActive(element.innerText);
                    }
                }
            });
        }
    }

    function handleTouchEnd() {
        setKeyIsActive('');
    }

    function onPress(value: any, type: string) {
        if (type === 'del') {
            if (value.length === 0) {
                onHandleDelete && onHandleDelete('');
            } else {
                onHandleDelete && onHandleDelete(value);
            }
        } else if (type === 'shift') {
            const result = letterKeys.map((item: any) => {
                if (upperLetterDictionary.indexOf(item.text) > -1) {
                    return {
                        text: item.text.toLowerCase(),
                        type: item.type.toLowerCase(),
                    };
                } else if (lowerLetterDictionary.indexOf(item.text) > -1) {
                    return {
                        text: item.text.toUpperCase(),
                        type: item.type.toUpperCase(),
                    };
                } else {
                    return { text: item.text, type: item.type };
                }
            });
            setLetterKeys(result);
        } else if (type === 'done') {
            onHandleDone && onHandleDone();
        } else if (type === 'space') {
            onHandleValue && onHandleValue(value);
        } else if (type === 'symbol') {
            onHandleSymbol && onHandleSymbol();
        } else {
            onHandleValue && onHandleValue(keyIsActive);
        }
    }

    return (
        <div
            className={classnames('jing-keyBoardLetter', className)}
            ref={letterRef}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ height: valueHeight }}
        >
            {letterKeys &&
                letterKeys.map((item: any, id: any) => (
                    <LetterKey
                        className="jing-keyBoardLetter__box"
                        key={item.text + id}
                        text={item.text}
                        type={item.type}
                        keyActive={keyIsActive}
                        value={value}
                        keyBoardHeight={valueHeight}
                        onTouchStartCb={(text: any) => {
                            setKeyIsActive(text);
                        }}
                        changeDoneActive={doneActive}
                        onPress={onPress}
                    />
                ))}
        </div>
    );
};

Letter.defaultProps = {
    isRandom: false,
};

Letter.propTypes = {
    isRandom: PropTypes.bool,
};

export default React.memo(Letter);
