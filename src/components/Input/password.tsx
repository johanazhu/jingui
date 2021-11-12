import React, { useState, useEffect, FC } from 'react';
import { InputProps } from './PropType';
import { IconEyeCloseTwo, IconEyeOpenTwo } from '../Icon';
import Clear from './clear';

const prefixCls = 'jing-input';

const Password: FC<InputProps> = (props) => {
    const { onFocus, onBlur } = props;

    let timer;

    useEffect(() => {
        return () => {
            timer = null;
        };
    }, []);

    const [visible, setIsVisible] = useState(false);
    const [isFocus, setIsFocus] = useState(false);

    const passwordRender = () => {
        return (
            <>
                {isFocus && (
                    <div
                        className={`${prefixCls}--focus`}
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
            groupClassName={`${prefixCls}__group-password`}
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
