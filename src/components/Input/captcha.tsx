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
                className={classnames('jqb-input__captcha')}
                onClick={() => {
                    onHandleChangeCaptcha();
                }}
            >
                {captcha}
            </div>
        );
    };

    return (
        <Group className="jqb-input__group-captcha">
            <Clear {...props} />
            {captchaRender()}
        </Group>
    );
};
export default React.memo(Captcha);
