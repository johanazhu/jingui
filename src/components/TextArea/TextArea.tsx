import React, { useState, useEffect, useCallback, useRef, forwardRef, useImperativeHandle } from 'react';
import classnames from 'classnames';
import { TextAreaProps, TextAreaInstance } from './PropType';
import { isDef, formatNumber, resetScroll } from '@/utils';

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

const TextArea = forwardRef<TextAreaInstance, TextAreaProps>((props, ref) => {

    const {
        placeholder,
        value = '',
        className,
        style,
        onChange,
        onFocus,
        onBlur,
        readOnly,
        disabled,
        maxLength,
        minLength,
        rows,
    } = props;

    const nativeTextAreaRef = useRef<HTMLTextAreaElement>()

    const oInput = useInputValue(value);
    const [isBan, setIsBan] = useState(disabled);

    useEffect(() => {
        oInput.updateValue(value);
    }, [value]);

    useEffect(() => {
        setIsBan(disabled);
    }, [disabled]);


    useEffect(() => {
        if (rows && nativeTextAreaRef.current) {
            // @ts-ignore
            nativeTextAreaRef.current.style.height = `${
                // @ts-ignore
                nativeTextAreaRef.current.scrollHeight * rows
                }px`;
        }
    }, [rows]);


    const focus = () => {
        if (nativeTextAreaRef?.current) {
            nativeTextAreaRef.current.focus()
        }
    }

    const blur = () => {
        if (nativeTextAreaRef?.current) {
            nativeTextAreaRef.current.blur()
        }
    }

    useImperativeHandle(ref, () => ({
        clear: () => {
            oInput.onChange('')
        },
        focus,
        blur,
        // @ts-ignore
        get nativeElement() {
            return nativeTextAreaRef.current
        },
    }))

    const handleFocus = (e: any) => {
        onFocus?.(e)

        // readOnly not work in legacy mobile safari
        if (readOnly) {
            blur()
        }
    }

    const handleBulr = (e: any) => {
        onBlur?.(e)
        resetScroll()
    }


    return (
        <div className={classnames(prefixCls, className)} style={style}>
            <textarea
                ref={nativeTextAreaRef as React.RefObject<HTMLTextAreaElement>}
                className={`${prefixCls}__control`}
                value={oInput.value}
                rows={rows}
                disabled={isBan}
                readOnly={readOnly}
                placeholder={placeholder || ''}
                maxLength={maxLength}
                minLength={minLength}
                onChange={(e) => {
                    oInput.onChange(e);
                    onChange && onChange(e.target.value);
                }}
                onFocus={handleFocus}
                onBlur={handleBulr}
            />
        </div>
    );
})

TextArea.defaultProps = {
    rows: 2,
}

export default TextArea;
