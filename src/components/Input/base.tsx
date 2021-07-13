import React, {
    useState,
    useEffect,
    useCallback,
    forwardRef,
    useRef,
} from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { InputProps } from './PropType';

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
            className={classnames('jing-input', className, {
                'jing-input__error': isError,
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
    className: '',
    disabled: false,
    error: false,
    onChange: function () {},
    onFocus: function () {},
    onBlur: function () {},
    onClear: function () {},
};

Input.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    type: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
};

export default React.memo(Input);
