import React, { FC, memo } from 'react';
import classnames from 'classnames';
import Clear from './clear';
import { CaptchaProps } from './PropType';

const prefixCls = 'jing-input';

const Captcha: FC<CaptchaProps> = (props) => {
    const { captcha, onHandleChangeCaptcha } = props;

    const captchaRender = () => {
        return (
            <div
                className={classnames(`${prefixCls}__captcha`)}
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
            groupClassName={`${prefixCls}__group-captcha`}
            backRender={captchaRender()}
        />
    );
};

export default memo(Captcha);
