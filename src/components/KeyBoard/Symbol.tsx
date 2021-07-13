import React, { useState, useEffect, useRef, TouchEvent } from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import SymbolKey from './SymbolKey';
import { symbolKey } from '../utils';

export interface SymbolProps {
    className?: string;
    value: string;
    updatePosition?: boolean;
    onHandleDelete?: (text: string) => void;
    onHandleValue?: (text: any) => void;
    onHandleDone?: () => void;
    onHandleSymbol?: () => void;
}

const keys: { text: any; type?: string }[] = [];

const Symbol = (props: SymbolProps) => {
    const {
        className,
        value,
        updatePosition,
        onHandleValue,
        onHandleDelete,
        onHandleDone,
        onHandleSymbol,
    } = props;

    const [symbolKeys, setSymbolKeys] = useState<any>(null);
    const [keyIsActive, setKeyIsActive] = useState('');
    const [valueHeight, setValueHeight] = useState(0);
    const [doneActive, setDoneActive] = useState(false);

    const symbolRef = useRef<HTMLDivElement>(null);

    function getElementPosition() {
        if (symbolRef.current) {
            const node = symbolRef.current.children;
            let hTotal = Math.round(document.body.clientWidth / 1.46);
            const hTitle = Math.round(hTotal * 0.15);
            // @ts-ignore
            node.forEach((element) => {
                if (symbolRef.current) {
                    const letterRefTop =
                        symbolRef.current.getBoundingClientRect().top;
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
                        if (Number(symbolRef.current?.offsetTop) === hTitle) {
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
        symbolKey.map((item) => {
            if (keys.length < 35) {
                keys.push({ text: item, type: item });
            }
        });
        setSymbolKeys(keys);
        return () => {
            setSymbolKeys(null);
        };
    }, []);

    useEffect(() => {
        if (value) {
            setDoneActive(true);
        } else {
            setDoneActive(false);
        }
    }, [value]);

    useEffect(() => {
        if (symbolRef.current) {
            let hTotal = Math.round(document.body.clientWidth / 1.46);
            const hTitle = Math.round(hTotal * 0.15);
            const hBase = Math.round((hTotal - hTitle) / 4);
            setValueHeight(hBase * 4);
        }
    }, [symbolRef]);

    useEffect(() => {
        getElementPosition();
    }, [symbolKeys]);

    function handleTouchMove(e: TouchEvent) {
        const touch = e.touches[0];
        const currentPageX = touch.pageX;
        const currentPageY = touch.pageY;
        if (symbolRef.current) {
            const node = symbolRef.current.children;
            // @ts-ignore
            node.forEach((element) => {
                if (
                    currentPageX > element.data.left &&
                    currentPageX < element.data.right &&
                    currentPageY > element.data.top &&
                    currentPageY < element.data.bottom
                ) {
                    setKeyIsActive(element.innerText);
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
        } else if (type === 'done') {
            onHandleDone && onHandleDone();
        } else if (type === 'ABC') {
            onHandleSymbol && onHandleSymbol();
        } else {
            onHandleValue && onHandleValue(keyIsActive);
        }
    }

    return (
        <>
            <div
                className={classnames('jing-keyBoardSymbol', className)}
                ref={symbolRef}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ height: valueHeight }}
            >
                {symbolKeys &&
                    symbolKeys.map((item: any) => (
                        <SymbolKey
                            className="jing-keyBoardSymbol__box"
                            key={item.text}
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
        </>
    );
};

Symbol.defaultProps = {
    isRandom: false,
};

Symbol.propTypes = {
    isRandom: PropTypes.bool,
};

export default React.memo(Symbol);
