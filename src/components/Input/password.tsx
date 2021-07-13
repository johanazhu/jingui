import React, { useState, useEffect } from 'react';
import { InputProps } from './PropType';
import { IconEyeCloseTwo, IconEyeOpenTwo } from '../Icon';
import Clear from './clear';

const Password = (props: InputProps) => {
    const { onFocus, onBlur } = props;

    let timer;

    useEffect(() => {
        return () => {
            timer = null;
        };
    }, []);

    const [visible, setIsVisible] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const IconKind = visible ? 'eye-on' : 'eye-off';
    const passwordRender = () => {
        return (
            <>
                {isFocus && (
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
                        {visible ? <IconEyeOpenTwo /> : <IconEyeCloseTwo />}
                    </div>
                )}
            </>
        );
    };

    return (
        <Clear
            {...props}
            groupClassName="jing-input__group-password"
            type={visible ? 'text' : 'password'}
            onFocus={(e) => {
                setIsFocus(true);
                onFocus && onFocus(e);
            }}
            onBlur={(e) => {
                // timer = setTimeout(() => {
                //     setIsFocus(false)
                // }, 100)
                onBlur && onBlur(e);
            }}
            backRender={passwordRender()}
        />
    );
};
export default React.memo(Password);
