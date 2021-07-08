import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { IconCircleDelete, IconEyeClose, IconEyeOpen } from 'icons';

import Group from './group';
import Input from './base';
import { InputProps } from './input';

export interface ClearProps extends InputProps {
    render?: any;
    groupClassName?: string;
    groupStyle?: React.CSSProperties;
}

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
        }
    }, [])


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
                onChange={(res, e) => {
                    oInput.onChange(res);
                    onChange && onChange(res, e);
                }}
                onFocus={onHandleFocus}
                onBlur={e => {
                    // changeStatus(false);
                    timer = setTimeout(() => {
                        setIsShowClear(false);
                    }, 100)
                    onBlur && onBlur(e);
                }}
            />
            {render}
            {
                isShowClear && (
                    <div
                        className="clear-btn"
                        onClick={() => {
                            inputRef.current?.focus();
                            oInput.clearValue();
                            onChange && onChange('');
                        }}
                    >
                        <IconCircleDelete size="small" />
                    </div>
                )
            }
        </Group>
    );
};

Clear.defaultProps = {
    className: '',
    groupClassName: '',
    disabled: false,
    error: false,
    style: null,
    groupStyle: null,
    onChange: function () { },
    onFocus: function () { },
    onBlur: function () { },
    onEnter: function () { },
    onClear: function () { },
};

Clear.propTypes = {
    className: PropTypes.string,
    groupClassName: PropTypes.string,
    style: PropTypes.object,
    groupStyle: PropTypes.object,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    type: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    onClear: PropTypes.func,
    render: PropTypes.any,
};

export default React.memo(Clear);