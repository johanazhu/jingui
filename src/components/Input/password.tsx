import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { InputProps } from './input';
import Icon from '../Icon';
import { IconEyeClose, IconEyeOpen } from 'icons';
import Clear from './clear';

const Password = (props: InputProps) => {
    const { onFocus, onBlur } = props;

    let timer;

    useEffect(() => {
        return () => {
            timer = null;
        }
    }, [])

    const [visible, setIsVisible] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const IconKind = visible ? 'eye-on' : 'eye-off';
    const passwordRender = () => {
        return (
            <>
                {
                    isFocus && (
                        <div
                            className="eye-btn"
                            onClick={() => {
                                // isShowClear = true;
                                // clearTimeout(timer);
                                // if (inputRef.current) {
                                //     inputRef.current.focus();
                                // }
                                if (visible) {
                                    setIsVisible(false);
                                } else {
                                    setIsVisible(true);
                                }
                            }}
                        >
                            {visible ? <IconEyeOpen size="small" /> : <IconEyeClose size="small" />}
                        </div>
                    )
                }
            </>
        );
    };

    return (
        <Clear
            {...props}
            groupClassName="jqb-input__group-password"
            type={visible ? 'text' : 'password'}
            onFocus={e => {
                setIsFocus(true)
                onFocus && onFocus(e);
            }}
            onBlur={e => {
                // timer = setTimeout(() => {
                //     setIsFocus(false)
                // }, 100)
                onBlur && onBlur(e);
            }}
            render={passwordRender()}
        />
    );
};
export default React.memo(Password);