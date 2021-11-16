import React, { useState, useEffect, useRef, TouchEvent } from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import Key from './Key';
import { sample } from '@/utils';
import { BoardBaseProps } from './PropType';

function changeRandomKeys(sourceNumber: any, keys: any) {
    const numberKey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    keys = [];
    sample(numberKey, 9).map((item: any) =>
        keys.push({ text: item, type: item }),
    );
    keys = keys.concat(sourceNumber);
    return keys;
}

const BoardBase = (props: BoardBaseProps) => {
    const {
        value,
        random,
        new: isNew,
        sourceNumber,
        keys,
        onHandleValue,
        onHandleDelete,
    } = props;

    const [numberKeys, setNumberKeys] = useState<any>(null);
    const [keyIsActive, setKeyIsActive] = useState('');
    const [valueHeight, setValueHeight] = useState(0);

    const baseRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (random) {
            changeRandomKeys(sourceNumber, keys);
        } else {
            setNumberKeys(keys);
        }
    }, []);

    useEffect(() => {
        if (baseRef.current) {
            let hTotal = Math.round(document.body.clientWidth / 1.46);
            const hTitle = Math.round(hTotal * 0.15);
            const hBase = Math.round((hTotal - hTitle) / 4);
            setValueHeight(hBase * 4);
        }
    }, [baseRef]);

    useEffect(() => {
        if (baseRef.current) {
            const node = baseRef.current.children;
            let hTotal = Math.round(document.body.clientWidth / 1.46);
            const hTitle = Math.round(hTotal * 0.15);
            // @ts-ignore
            node.forEach((element) => {
                if (baseRef.current) {
                    const letterRefTop =
                        baseRef.current.getBoundingClientRect().top;
                    const left = Math.round(element.offsetLeft);
                    const right = Math.round(left + element.offsetWidth);
                    let top;
                    let bottom;
                    if (letterRefTop > document.body.clientHeight) {
                        top = Math.round(
                            letterRefTop - hTotal + element.offsetTop - hTitle,
                        );
                        bottom = Math.round(top + element.offsetHeight);
                    } else if (letterRefTop < document.body.clientHeight) {
                        top = Math.round(element.offsetTop);
                        bottom = Math.round(top + element.offsetHeight);
                    } else {
                        top = Math.round(
                            letterRefTop + element.offsetTop - hTitle,
                        );
                        bottom = Math.round(top + element.offsetHeight);
                    }
                    element.data = { left, right, top, bottom };
                }
            });
        }
    }, [numberKeys]);

    function handleTouchMove(e: TouchEvent) {
        const touch = e.touches[0];
        const currentPageX = touch.pageX;
        const currentPageY = touch.pageY;
        if (baseRef.current) {
            const node = baseRef.current.children;
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
                onHandleDelete('');
            } else {
                onHandleDelete(value);
            }
        } else {
            onHandleValue(keyIsActive);
        }
    }

    return (
        <div
            className="jing-keyBoardBase"
            ref={baseRef}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ height: valueHeight }}
        >
            {keys.map((item: any) => (
                <Key
                    className={classnames('jing-keyBoardBase__box')}
                    key={item.text}
                    text={item.text}
                    type={item.type}
                    keyActive={keyIsActive}
                    value={value}
                    new={isNew}
                    onTouchStartCb={(text: any) => {
                        setKeyIsActive(text);
                    }}
                    onPress={onPress}
                />
            ))}
        </div>
    );
};

BoardBase.defaultProps = {
    isRandom: false,
};

BoardBase.propTypes = {
    isRandom: PropTypes.bool,
    value: PropTypes.string,
};

export default React.memo(BoardBase);
