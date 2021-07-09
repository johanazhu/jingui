import React, { useState, useEffect, useCallback, useRef } from 'react';
import classnames from 'classnames';
import Group from './group';

import { IconCircleDelete, IconEyeCloseTwo, IconEyeOpenTwo } from 'icons';

export interface KeyboardProps {
    value: string;
    placeholder?: string;
    isActive?: boolean;
    maxLength?: number;
    onChange?: (val: string) => void;
    onClearValue?: () => void;
    onHandleFocus?: () => void;
}

function useInputValue(initialValue: string) {
    const [value, setValue] = useState(initialValue);
    const [cacheValue, setCacheValue] = useState(initialValue);

    const updateValue = function (v: any) {
        setValue(v);
    };

    const updateCacheValue = function (v: any) {
        setCacheValue(v);
    };

    let clearValue = function () {
        setValue('');
    };

    let clearCacheValue = function () {
        setCacheValue('');
    };

    return {
        value,
        cacheValue,
        updateValue,
        updateCacheValue,
        clearValue,
        clearCacheValue,
    };
}

function changeValue(value: string) {
    let tempVal = '';
    for (let i = 0, length = value.length; i < length; i++) {
        tempVal += '●';
    }
    return tempVal;
}

const KeyboardInput = (props: KeyboardProps) => {
    const {
        value,
        placeholder,
        isActive,
        maxLength,
        onClearValue,
        onHandleFocus,
    } = props;

    const [isShowClear, setIsShowClear] = useState(false);
    const [isFocus, setIsFocus] = useState(isActive);
    const [visible, setIsVisible] = useState(false);
    const [placeHolderValue, setPlaceHolderValue] = useState(placeholder);

    const oInput = useInputValue(value);

    useEffect(() => {
        if (visible) {
            if (maxLength) {
                if (value.length >= maxLength) {
                    oInput.updateValue(value.substring(0, maxLength));
                } else {
                    oInput.updateValue(value);
                }
            } else {
                oInput.updateValue(value);
            }
        } else {
            if (maxLength) {
                if (value.length >= maxLength) {
                    oInput.updateCacheValue(value.substring(0, maxLength));
                    oInput.updateValue(
                        changeValue(value.substring(0, maxLength)),
                    );
                } else {
                    oInput.updateCacheValue(value);
                    oInput.updateValue(changeValue(value));
                }
            } else {
                oInput.updateCacheValue(value);
                oInput.updateValue(changeValue(value));
            }
        }
    }, [value]);

    useEffect(() => {
        if (isFocus) {
            setIsShowClear(true);
        } else {
            setIsShowClear(false);
        }
        if (oInput.value !== '') {
            setPlaceHolderValue('');
        } else {
            setPlaceHolderValue(placeholder);
        }
    }, [oInput.value, isFocus]);

    useEffect(() => {
        setIsFocus(isActive);
    }, [isActive]);

    function onFocusClick() {
        setIsFocus(true);
        onHandleFocus && onHandleFocus();
    }

    function onEyeClick(e: any) {
        // e.preventDefault()
        e.stopPropagation();

        if (visible) {
            oInput.updateCacheValue(oInput.value);
            oInput.updateValue(changeValue(oInput.value));
            setIsVisible(false);
        } else {
            oInput.updateValue(oInput.cacheValue);
            setIsVisible(true);
        }
    }

    function onClearClick(e: any) {
        // e.preventDefault();
        e.stopPropagation();
        oInput.clearValue();
        oInput.clearCacheValue();
        setIsShowClear(false);
        onClearValue && onClearValue();
    }

    return (
        <Group className="jqb-input__group-keyboard">
            <div
                className={classnames('jqb-input__keyboard', {
                    'jqb-input__keyboard_active': isFocus,
                    'jqb-input__keyboard_small': !visible,
                })}
                onClick={onFocusClick}
            >
                {oInput.value}
            </div>
            <sub>{placeHolderValue}</sub>
            {isFocus && (
                <div className="eye-btn" onClick={onEyeClick}>
                    {visible ? (
                        <IconEyeOpenTwo size="small" className="eyeOpen" />
                    ) : (
                        <IconEyeCloseTwo size="small" className="eyeClose" />
                    )}
                </div>
            )}
            {isShowClear && (
                <div className="clear-btn" onClick={onClearClick}>
                    <IconCircleDelete size="small" />
                </div>
            )}
        </Group>
    );
};

export default React.memo(KeyboardInput);
