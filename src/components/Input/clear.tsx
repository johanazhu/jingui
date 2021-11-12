import React, { useState, useEffect, useCallback, useRef } from 'react';
import classnames from 'classnames';
import { IconCircleDelete } from '../Icon';

import Group from './group';
import Input from './base';
import { ClearProps } from './PropType';

const prefixCls = 'jing-input';

function useInputValue(initialValue: string | undefined) {
    const [value, setValue] = useState(initialValue);

    let onChange = useCallback((val) => {
        setValue(val);
    }, []);

    let updateValue = function (value: string) {
        setValue(value);
    };

    let clearValue = function () {
        setValue('');
    };

    return { value, onChange, updateValue, clearValue };
}

const Clear = (props: ClearProps) => {
    const {
        className,
        groupClassName,
        style,
        groupStyle,
        placeholder,
        type,
        maxLength,
        minLength,
        disabled,
        value,
        onChange,
        onFocus,
        onBlur,
        onClear,
        render,
        backRender,
    } = props;

    let timer;

    const oInput = useInputValue(value);
    const [isFocus, setIsFocus] = useState(false);
    const [isShowClear, setIsShowClear] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    // console.log('value', value)
    // useEffect(() => {
    //     console.log('value', value)
    //     value && oInput.updateValue(value);
    // }, [value]);

    useEffect(() => {
        if (oInput.value !== '' && isFocus) {
            setIsShowClear(true);
        } else {
            // setIsShowClear(false);
        }
    }, [oInput.value]);

    useEffect(() => {
        return () => {
            timer = null;
        };
    }, []);

    function onHandleFocus(e: any) {
        setIsFocus(true);
        onFocus && onFocus(e);
        if (oInput.value !== '') {
            setIsShowClear(true);
        }
    }

    return (
        <Group className={classnames(groupClassName)} style={groupStyle}>
            <Input
                ref={inputRef}
                className={classnames(className)}
                style={style}
                placeholder={placeholder}
                type={type}
                maxLength={maxLength}
                minLength={minLength}
                disabled={disabled}
                value={oInput.value}
                onChange={(res: any, e: any) => {
                    oInput.onChange(res);
                    onChange && onChange(res, e);
                }}
                onFocus={onHandleFocus}
                onBlur={(e: any) => {
                    // 小于300毫秒即可，但是要大于100毫秒，不然鼠标点击是反应不过来的
                    timer = setTimeout(() => {
                        setIsShowClear(false);
                    }, 200);
                    onBlur && onBlur(e);
                }}
            />
            {render}
            {isShowClear && (
                <div
                    className={`${prefixCls}--clear`}
                    onClick={() => {
                        inputRef.current?.focus();
                        oInput.clearValue();
                        onChange && onChange('');
                    }}
                >
                    <IconCircleDelete />
                </div>
            )}
            {backRender}
        </Group>
    );
};

Clear.defaultProps = {
    disabled: false,
    error: false,
};

export default Clear;
