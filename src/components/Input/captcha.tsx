import * as React from 'react';
import classnames from 'classnames';
import Clear from './clear';
import { InputProps } from './PropType';

const prefixCls = 'jing-input';

export interface VerifyProps extends InputProps {
    captcha: any;
    onHandleChangeCaptcha: () => void;
}

const Captcha = (props: VerifyProps) => {
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

export default React.memo(Captcha);
