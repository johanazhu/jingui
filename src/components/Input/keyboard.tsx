import React, {
    FC,
    useState,
    useEffect,
    memo,
    useCallback,
    useRef,
} from 'react';
import classnames from 'classnames';
import Group from './group';
import { IconCircleDelete, IconEyeCloseTwo, IconEyeOpenTwo } from '../Icon';
import { KeyboardInputProps } from './PropType';
import { stopPropagation } from '@/utils';

const prefixCls = 'jing-input';

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

const KeyboardInput: FC<KeyboardInputProps> = (props) => {
    const {
        groupClassName,
        groupStyle,
        value,
        placeholder,
        active,
        maxLength,
        onClearValue,
        onHandleFocus,
    } = props;

    const [isShowClear, setIsShowClear] = useState(false);
    const [isFocus, setIsFocus] = useState(active);
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
        setIsFocus(active);
    }, [active]);

    function onFocusClick() {
        setIsFocus(true);
        onHandleFocus && onHandleFocus();
    }

    function onEyeClick(e: any) {
        // e.preventDefault()
        stopPropagation(e);

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
        stopPropagation(e);
        oInput.clearValue();
        oInput.clearCacheValue();
        setIsShowClear(false);
        onClearValue && onClearValue();
    }

    return (
        <Group className={classnames(`${prefixCls}__group-keyboard`, groupClassName)}
            style={groupStyle}>
            <div
                className={classnames(`${prefixCls}__keyboard`, {
                    [`${prefixCls}__keyboard-active`]: isFocus,
                    [`${prefixCls}__keyboard-small`]: !visible,
                })}
                onClick={onFocusClick}
            >
                {oInput.value}
            </div>
            <sub>{placeHolderValue}</sub>
            {isShowClear && (
                <div className={`${prefixCls}--clear`} onClick={onClearClick}>
                    <IconCircleDelete />
                </div>
            )}
            {isFocus && (
                <div className={`${prefixCls}--focus`} onClick={onEyeClick}>
                    {visible ? (
                        <IconEyeOpenTwo
                            className={`${prefixCls}--focus-open`}
                        />
                    ) : (
                        <IconEyeCloseTwo
                            className={`${prefixCls}--focus-close`}
                        />
                    )}
                </div>
            )}
        </Group>
    );
};

export default memo(KeyboardInput);
