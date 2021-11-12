import React, {
    useState,
    useEffect,
    useCallback,
    forwardRef,
    useRef,
} from 'react';
import classnames from 'classnames';
import { InputProps } from './PropType';

const prefixCls = 'jing-input';

function useInputValue(initialValue: string | undefined) {
    const [value, setValue] = useState(initialValue);

    const onChange = useCallback((e) => {
        setValue(e.currentTarget.value);
    }, []);

    const updateValue = function (v: any) {
        setValue(v);
    };

    return { value, onChange, updateValue };
}

const Input = forwardRef((props: InputProps, ref: any) => {
    const {
        type,
        style,
        value,
        className,
        disabled,
        placeholder,
        error,
        maxLength,
        minLength,
        onFocus,
        onBlur,
        onChange,
    } = props;

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
    }, [error]);

    return (
        <input
            ref={ref}
            type={type}
            style={style}
            value={oInput.value}
            className={classnames(prefixCls, className, {
                [`${prefixCls}--error`]: isError,
            })}
            disabled={isBan}
            placeholder={placeholder}
            maxLength={maxLength}
            minLength={minLength}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(e) => {
                oInput.onChange(e);
                onChange && onChange(e.target.value, e);
            }}
        />
    );
});

Input.defaultProps = {
    disabled: false,
    error: false,
};

export default React.memo(Input);
