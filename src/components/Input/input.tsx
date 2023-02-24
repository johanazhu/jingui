import React, {
    useState,
    useEffect,
    useCallback,
    forwardRef,
    memo,
    useMemo,
    useRef,
    useImperativeHandle
} from 'react';
import classnames from 'classnames';
import { InputProps, InputInstance } from './PropType';
import { isDef, formatNumber, resetScroll } from '@/utils';
import { IconCircleDelete } from '../Icon';

const prefixCls = 'jing-input';

function useInputValue(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const onChange = useCallback((e: any) => {
        setValue(e.currentTarget.value);
    }, []);

    const updateValue = function (v: any) {
        setValue(v);
    };

    return { value, onChange, updateValue };
}

const Input = forwardRef<InputInstance, InputProps>((props, ref) => {
    const {
        type,
        style,
        value,
        align,
        className,
        minLength,
        maxLength,
        placeholder,
        disabled,
        readOnly,
        clearable,
        clearIcon,
        prefix,
        suffix,
        autoFocus,
        onFocus,
        onBlur,
        onChange,
        onOverlimit,
        onClear,
        onClick,
    } = props;

    const oInput = useInputValue(value || '');

    const [isBan, setIsBan] = useState(disabled);
    const [inputFocus, setInputFocus] = useState(false)
    const inputRef = useRef<HTMLInputElement>()
    // const [value, setValue] = useState(value)


    useEffect(() => {
        oInput.updateValue(value);
    }, [value]);

    useEffect(() => {
        setIsBan(disabled);
    }, [disabled]);

    const focus = () => {
        if (inputRef?.current) {
            inputRef.current.focus()
        }
    }

    const blur = () => {
        if (inputRef?.current) {
            inputRef.current.blur()
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
            return inputRef.current
        },
    }))


    const showClear = useMemo(() => {
        if (clearable && !readOnly) {
            return value !== ''
        }
        return false
    }, [value, inputFocus])

    const handleChange = (e: any) => {
        const inputValue = e?.currentTarget?.value
        let finalValue = inputValue

        if (isDef(maxLength) && finalValue.length > +maxLength) {
            finalValue = finalValue.slice(0, maxLength)
            onOverlimit?.()
        }

        if (type === 'number' || type === 'digit') {
            const isNumber = type === 'number'
            finalValue = formatNumber(finalValue, isNumber, isNumber)
        }
        // console.log('finalValue', finalValue)
        // oInput.onChange(e);
        oInput.updateValue(finalValue)
        onChange?.(finalValue, e);
    }

    const handleClear = (e: MouseEvent) => {
        // setValue('')
        oInput.updateValue('')
        onClear?.(e)
    }

    const handleFocus = (e: any) => {
        setInputFocus(true)
        onFocus?.(e)

        // readOnly not work in legacy mobile safari
        if (readOnly) {
            blur()
        }
    }

    const handleBulr = (e: any) => {
        setInputFocus(false)
        onBlur?.(e)
        resetScroll()
    }


    const renderInput = () => {
        let inputType = type
        let inputMode

        // type="number" is weired in iOS, and can't prevent dot in Android
        // so use inputmode to set keyboard in mordern browers
        if (type === 'number') {
            inputType = 'text'
            inputMode = 'decimal'
        }

        if (type === 'digit') {
            inputType = 'tel'
            inputMode = 'numeric'
        }

        return (
            <input
                // @ts-ignore
                ref={inputRef}
                type={inputType}
                // 写死，ios 端小写
                autoComplete="off"
                // @ts-ignore
                inputMode={inputMode}
                value={oInput.value}
                className={`${prefixCls}__control`}
                disabled={isBan}
                placeholder={placeholder || ''}
                maxLength={maxLength}
                minLength={minLength}
                autoFocus={autoFocus}
                onBlur={handleBulr}
                onFocus={handleFocus}
                onChange={handleChange}
                onClick={onClick}
            />
        )
    }


    const renderPrefix = () => {
        const showDesc = isDef(prefix)
        if (showDesc) {
            return (
                <div className={`${prefixCls}__prefix`}>{prefix}</div>
            )

        }
        return null
    }

    const renderClear = () => {
        if (showClear) {
            return React.cloneElement(clearIcon as React.ReactElement, {
                className: `${prefixCls}__clear`,
                onClick: handleClear,
            })
        }
        return null
    }

    const renderSuffix = () => {
        const showDesc = isDef(suffix)
        if (showDesc) {
            return (
                <div className={`${prefixCls}__suffix`}>{suffix}</div>
            )

        }
        return null
    }

    return (
        <div
            className={classnames(prefixCls, className, {
                [`${prefixCls}--${align}`]: !!align
            })} style={style}>
            {renderPrefix()}
            {renderInput()}
            {renderClear()}
            {renderSuffix()}
        </div>
    );
});

Input.defaultProps = {
    disabled: false,
    readOnly: false,
    clearable: false,
    clearIcon: <IconCircleDelete />,
};

export default memo(Input);
