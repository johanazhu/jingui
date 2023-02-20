import React, { useState, useEffect, useCallback, useRef } from 'react';
import classnames from 'classnames';
import { TextAreaProps } from './PropType';

const prefixCls = 'jing-textarea';

function useInputValue(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const onChange = useCallback((e: any) => {
        setValue(e.currentTarget.value);
    }, []);

    const updateValue = function (value: any) {
        setValue(value);
    };

    return { value, onChange, updateValue };
}

function Textarea(props: TextAreaProps) {
    const {
        placeholder,
        value = '',
        className,
        style,
        onChange,
        onFocus,
        onBlur,
        disabled,
        maxLength,
        minLength,
        rows,
    } = props;

    const textareaRef = useRef(null);

    const oInput = useInputValue(value);
    const [isBan, setIsBan] = useState(disabled);

    useEffect(() => {
        oInput.updateValue(value);
    }, [value]);

    useEffect(() => {
        setIsBan(disabled);
    }, [disabled]);


    useEffect(() => {
        if (rows && textareaRef.current) {
            // @ts-ignore
            textareaRef.current.style.height = `${
                // @ts-ignore
                textareaRef.current.scrollHeight * rows
                }px`;
        }
    }, [rows]);

    return (
        <textarea
            ref={textareaRef}
            value={oInput.value}
            style={style}
            className={classnames(prefixCls, className)}
            rows={rows}
            disabled={isBan}
            placeholder={placeholder}
            maxLength={maxLength}
            minLength={minLength}
            onChange={(e) => {
                oInput.onChange(e);
                onChange && onChange(e.target.value);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}

export default Textarea;
