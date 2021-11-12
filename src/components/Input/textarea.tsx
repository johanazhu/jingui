import React, { useState, useEffect, useCallback, useRef } from 'react';
import classnames from 'classnames';
import { TextareaProps } from './PropType';

const prefixCls = 'jing-textarea';

function useInputValue(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const onChange = useCallback((e) => {
        setValue(e.currentTarget.value);
    }, []);

    const updateValue = function (value: any) {
        setValue(value);
    };

    return { value, onChange, updateValue };
}

function Textarea(props: TextareaProps) {
    const {
        placeholder,
        error,
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
    const [isError, setIsError] = useState(error);

    useEffect(() => {
        oInput.updateValue(value);
    }, [value]);

    useEffect(() => {
        setIsBan(disabled);
    }, [disabled]);

    useEffect(() => {
        setIsError(error);
    }, [isError]);

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
            className={classnames(prefixCls, className, {
                [`${prefixCls}--error`]: isError,
            })}
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

Textarea.defaultProps = {
    className: '',
};

export default Textarea;
