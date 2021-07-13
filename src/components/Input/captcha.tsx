import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Clear from './clear';
import Group from './group';
import { InputProps } from './PropType';

export interface VerifyProps extends InputProps {
    captcha: any;
    onHandleChangeCaptcha: () => void;
}

const Captcha = (props: VerifyProps) => {
    const { captcha, onHandleChangeCaptcha } = props;

    const captchaRender = () => {
        return (
            <div
                className={classnames('jing-input__captcha')}
                onClick={() => {
                    onHandleChangeCaptcha();
                }}
            >
                {captcha}
            </div>
        );
    };

    return (
        <Clear
            {...props}
            groupClassName="jing-input__group-captcha"
            backRender={captchaRender()}
        />
    );
};
export default React.memo(Captcha);
