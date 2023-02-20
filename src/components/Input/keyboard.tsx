import React, {
    FC,
    useState,
    useEffect,
    memo,
    forwardRef,
    useImperativeHandle,
    useCallback,
    useRef,
} from 'react';
import classnames from 'classnames';
import { IconCircleDelete, IconEyeCloseTwo, IconEyeOpenTwo } from '../Icon';
import { KeyboardInputProps, KeyboardInputInstance } from './PropType';
import { stopPropagation } from '@/utils';

const prefixCls = 'jing-keyboardinput';



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


const KeyboardInput = forwardRef<KeyboardInputInstance, KeyboardInputProps>((props, ref) => {
    const {
        className,
        style,
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

    const keyboardRef = useRef<HTMLDivElement>()

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


    const focus = () => {
        if (keyboardRef?.current) {
            keyboardRef.current.focus()
        }
    }

    const blur = () => {
        if (keyboardRef?.current) {
            keyboardRef.current.blur()
        }
    }

    useImperativeHandle(ref, () => ({
        clear: () => {
            // oInput.onChange('')
        },
        focus,
        blur,
        // @ts-ignore
        get nativeElement() {
            return keyboardRef.current
        },
    }))

    function onFocusClick() {
        console.log('点击1', isFocus)
        setIsFocus(true);
        onHandleFocus?.();
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
        onClearValue?.();
    }

    const renderClear = () => {
        if (isShowClear) {
            return (
                <div className={`${prefixCls}__clear`} onClick={onClearClick}>
                    <IconCircleDelete />
                </div>
            )
        }
        return null
    }

    const renderFocus = () => {
        if (isFocus) {
            return (
                <div className={`${prefixCls}__focus`} onClick={onEyeClick}>
                    {visible ? (
                        <IconEyeOpenTwo
                            className={`${prefixCls}__focus-open`}
                        />
                    ) : (
                        <IconEyeCloseTwo
                            className={`${prefixCls}__focus-close`}
                        />
                    )}
                </div>
            )
        }
        return null
    }

    return (
        <div className={classnames(prefixCls, className)} style={style}>
            <div
                className={classnames(`${prefixCls}__control`, {
                    [`${prefixCls}__control-active`]: isFocus,
                    [`${prefixCls}__control-small`]: !visible,
                })}
                onClick={onFocusClick}
            >
                {oInput.value}
            </div>
            <sub>{placeHolderValue}</sub>
            {renderClear()}
            {renderFocus()}
        </div>
    );
})


export default memo(KeyboardInput);
