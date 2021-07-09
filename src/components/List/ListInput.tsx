import React, { useState, useEffect, useCallback, useRef } from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import util from '../_util';
import { Toast } from '../index';
import { IconCircleDelete, IconEyeCloseTwo, IconEyeOpenTwo } from 'icons';

const typeKind = tuple(
    'price',
    'number',
    'mobile',
    'password',
    'verifycode',
    'text',
    'captcha',
);

const typeAutoComplete = tuple('on', 'off');

export interface ListInputProps {
    value: string;
    type: string;
    icon?: string;
    title?: string;
    isEyeOn?: boolean;
    maxLength?: number;
    autoComplete?: string;
    disabled?: boolean;
    onHandleFocus?: (e: HTMLInputEvent) => void;
    onHandleBlur?: () => void;
    onMessageSend?: () => void;
    onChange?: (value: string, e?: HTMLInputEvent) => void;
    minVal?: number;
    maxVal?: number;
    autoMessageSend?: boolean;
    onHandleRule?: () => void;
    readOnly?: string;
    reset?: boolean; // 重置为原来的模样
}

interface HTMLInputEvent extends React.ChangeEvent {
    target: HTMLInputElement & EventTarget;
}

// function eyeClicked(isEyeOn: any, setIsEyeOn: any) {
//   if (isEyeOn === true) {
//     setIsEyeOn(false);
//   } else {
//     setIsEyeOn(true);
//   }
// }

// function inputOnFocus(setIsFocus: any) {
//   setIsFocus(true);
// }

function useInputValue(initialValue: string) {
    let [value, setValue] = useState(initialValue);

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

const ListInput = (props: ListInputProps) => {
    const {
        value,
        type,
        icon,
        title,
        maxLength,
        autoComplete,
        disabled,
        minVal,
        maxVal,
        autoMessageSend,
        onMessageSend,
        onHandleFocus,
        onHandleBlur,
        onChange,
        onHandleRule,
        readOnly,
        reset,
    } = props;

    let timer: any;
    let countDown: any;

    const captchaUrl = 'http://wx.jingqb.com/certiification.jpg';
    // const captchaUrl = 'http://192.168.66.223:3000/certiification.jpg';

    const inputRef = useRef<HTMLInputElement>(null);
    const eyeRef = useRef<HTMLDivElement>(null);

    // const [inputVal, setInputVal] = React.useState(value)
    const [isFocus, setIsFocus] = React.useState(false);
    const [isShowClear, setIsShowClear] = React.useState(false);
    const [isEyeOn, setIsEyeOn] = React.useState(props.isEyeOn || false);
    const [isSent, setIsSent] = React.useState(false);
    const [btnText, setBtnText] = React.useState('获取验证码');
    const [sleepTime, setSleepTime] = React.useState(60);
    const [canMonitor, setCanMonitor] = React.useState(autoMessageSend);
    const [captcha, setCaptcha] = React.useState('');

    const oInput = useInputValue(value);

    useEffect(() => {
        oInput.updateValue(value);
    }, [value]);

    // useEffect(() => {
    //     if (oInput.value !== '' && isFocus) {
    //         setIsShowClear(true);
    //     } else {
    //         setIsShowClear(false);
    //     }
    // }, [value]);

    useEffect(() => {
        if (canMonitor) {
            countDown = setInterval(() => {
                if (sleepTime < 1) {
                    setIsSent(false);
                    clearInterval(countDown);
                    setBtnText('获取验证码');
                } else {
                    setIsSent(true);
                    setSleepTime(sleepTime - 1);
                    setBtnText(() => `重新获取(${sleepTime})`);
                }
            }, 1000);

            return () => clearInterval(countDown);
        }
    }, [isSent, sleepTime]);

    useEffect(() => {
        if (reset) {
            setIsSent(false);
            setSleepTime(0);
            clearInterval(countDown);
            setBtnText('获取验证码');
        }
    }, [reset]);

    const classes = classNames('ListInput', {
        [`ListInput__type_verifycode`]: type === 'verifycode',
        [`ListInput__type_captcha`]: type === 'captcha',
    });

    const verifycodeClasses = classNames('ListInput__link-text', {
        [`am-color-black1`]: isSent === true,
        [`am-color-blue`]: isSent === false,
    });

    const iconClasses = classNames('ListInput__content', {
        [`ListInput__content_state_hasicon`]: icon !== undefined,
    });

    let inputType = 'text';
    let placeholder = '';
    let eyeJSX;
    let rightJSX;
    let clearJSX;

    if (type === 'mobile') {
        inputType = 'tel';
        placeholder = title ? title : '请输入11位手机号码';
    } else if (type === 'password') {
        inputType = isEyeOn === true ? 'text' : 'password';
        placeholder = title ? title : '请输入登录密码';
        eyeJSX = (
            <div
                className="ListInput__content-eye"
                ref={eyeRef}
                onClick={() => {
                    clearTimeout(timer);
                    if (inputRef.current) {
                        inputRef.current.focus();
                    }
                    if (isEyeOn === true) {
                        setIsEyeOn(false);
                    } else {
                        setIsEyeOn(true);
                    }
                }}
            >
                {isEyeOn ? (
                    <IconEyeOpenTwo size="small" />
                ) : (
                    <IconEyeCloseTwo size="small" />
                )}
            </div>
        );
    } else if (type === 'verifycode') {
        inputType = 'number';
        placeholder = title ? title : '请输入短信验证码';

        rightJSX = (
            <span className="ListInput__link">
                <a
                    className={verifycodeClasses}
                    onClick={() => {
                        if (typeof onHandleRule === 'function') {
                            if (Boolean(onHandleRule()) === true) {
                                if (typeof onMessageSend === 'function') {
                                    onMessageSend();
                                    setCanMonitor(true);
                                    setIsSent(true);
                                    setSleepTime(60);
                                }
                            }
                            return;
                        } else {
                            if (typeof onMessageSend === 'function') {
                                onMessageSend();
                                setCanMonitor(true);
                                setIsSent(true);
                                setSleepTime(60);
                            }
                        }
                    }}
                >
                    {btnText}
                </a>
            </span>
        );
    } else if (type === 'captcha') {
        placeholder = title ? title : '请输入验证码';
        const captchaImgUrl = captchaUrl + captcha;
        rightJSX = (
            <span className="ListInput__link">
                <a
                    className="ListInput__link-text"
                    onClick={() => {
                        setCaptcha('?t=' + Math.random());
                    }}
                >
                    <img src={captchaImgUrl} alt="" />
                </a>
            </span>
        );
    } else if (type === 'number') {
        placeholder = title ? title : '请输入数字';
    } else if (type === 'price') {
        placeholder = title ? title : '请输入金额';
    } else {
        placeholder = title ? title : '请输入';
    }

    function bindValue(
        e: HTMLInputEvent,
        type: string,
        minVal: any,
        maxVal: any,
    ) {
        let val = '';
        // 格式化value
        if (type === 'price') {
            if (minVal) {
                if (Number(e.target.value) < minVal) {
                    val = util.formatAmount(minVal.toString());
                } else {
                    val = util.formatAmount(e.target.value);
                }
            }
            if (maxVal) {
                if (Number(e.target.value) > maxVal) {
                    val = util.formatAmount(maxVal.toString());
                } else {
                    val = util.formatAmount(e.target.value);
                }
            }
        } else if (type === 'number') {
            val = util.formatNumber(e.target.value);
        } else if (type === 'mobile') {
            // val = util.formatTel2(e.target.value);
            // console.log('val', val)
            val = e.target.value;
        } else {
            val = e.target.value;
        }
        oInput.onChange(val);
        onChange && onChange(val, e);
    }

    clearJSX = (
        <div
            className="ListInput__content-clear"
            onClick={() => {
                clearTimeout(timer);
                if (inputRef.current) {
                    inputRef.current.focus();
                }
                oInput.clearValue();
                onChange && onChange('');
            }}
        >
            <IconCircleDelete size="small" />
        </div>
    );
    if (type === 'verifycode') {
        return (
            <div className={classes}>
                {icon !== undefined ? (
                    <span className="ListInput__icon">
                        {/* <Icon kind={icon} color="blue" /> */}
                    </span>
                ) : null}
                <div className={iconClasses}>
                    {isFocus && eyeJSX}
                    {isShowClear && clearJSX}
                    <input
                        pattern="\d*"
                        maxLength={maxLength}
                        autoComplete={autoComplete}
                        disabled={disabled}
                        value={oInput.value}
                        // readOnly={readOnly}
                        ref={inputRef}
                        onBlur={() => {
                            timer = setTimeout(() => {
                                setIsFocus(false);
                                setIsShowClear(false);
                            }, 100);
                            if (typeof onHandleBlur === 'function') {
                                onHandleBlur();
                            }
                        }}
                        onFocus={(e) => {
                            setIsFocus(true);
                            setIsShowClear(true);
                            if (typeof onHandleFocus === 'function') {
                                onHandleFocus(e);
                            }
                        }}
                        onChange={(e) => {
                            bindValue(e, type, minVal, maxVal);
                        }}
                        className="ListInput__content-input"
                        type={inputType}
                        placeholder={placeholder}
                    />
                </div>
                {rightJSX}
            </div>
        );
    } else {
        return (
            <div className={classes}>
                {icon !== undefined ? (
                    <span className="ListInput__icon">
                        {/* <Icon kind={icon} color="blue" /> */}
                    </span>
                ) : null}
                <div className={iconClasses}>
                    {isFocus && eyeJSX}
                    {isShowClear && clearJSX}
                    <input
                        maxLength={maxLength}
                        autoComplete={autoComplete}
                        disabled={disabled}
                        value={oInput.value}
                        ref={inputRef}
                        onBlur={() => {
                            timer = setTimeout(() => {
                                setIsFocus(false);
                                setIsShowClear(false);
                            }, 100);
                            if (typeof onHandleBlur === 'function') {
                                onHandleBlur();
                            }
                        }}
                        onFocus={(e) => {
                            setIsFocus(true);
                            setIsShowClear(true);
                            if (typeof onHandleFocus === 'function') {
                                onHandleFocus(e);
                            }
                        }}
                        onChange={(e) => {
                            bindValue(e, type, minVal, maxVal);
                        }}
                        onPaste={(e) => {
                            if (type === 'mobile') {
                                const value = e.clipboardData.getData('Text');
                                const val = util.formatTel2(value);
                                oInput.onChange(val);
                                onChange && onChange(val);
                            }
                        }}
                        className="ListInput__content-input"
                        type={inputType}
                        placeholder={placeholder}
                    />
                </div>
                {rightJSX}
            </div>
        );
    }
};

ListInput.defaultProps = {
    value: '',
};

ListInput.propTypes = {
    value: PropTypes.string,
    type: PropTypes.oneOf(typeKind),
    title: PropTypes.string,
    isEyeOn: PropTypes.bool,
    maxLength: PropTypes.number,
    autoComplete: PropTypes.oneOf(typeAutoComplete),
    disabled: PropTypes.bool,
    onMessageSend: PropTypes.func,
    minVal: PropTypes.number,
    maxVal: PropTypes.number,
    onHandleFocus: PropTypes.func,
    onHandleBlur: PropTypes.func,
    onChange: PropTypes.func,
};

export default React.memo(ListInput);
