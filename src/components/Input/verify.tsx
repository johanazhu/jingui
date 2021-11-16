import React, { useState, useEffect, FC, memo } from 'react';
import classnames from 'classnames';
import Clear from './clear';
import { VerifyProps } from './PropType';

const prefixCls = 'jing-input';

const Verify: FC<VerifyProps> = (props) => {
    const { onHandleSendMessage, ...rest } = props;

    const [text, setText] = useState('获取验证码');
    const [sleepTime, setSleepTime] = useState(60);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isActive) {
            let countDown = setInterval(() => {
                if (sleepTime < 1) {
                    clearInterval(countDown);
                    setIsActive(false);
                    setText('获取验证码');
                } else {
                    setSleepTime(sleepTime - 1);
                    setText(() => `重新获取(${sleepTime})`);
                }
            }, 1000);
            return () => clearInterval(countDown);
        }
    }, [isActive, sleepTime]);

    const verifyRender = () => {
        return (
            <div
                className={classnames(`${prefixCls}__verify`, {
                    [`${prefixCls}__verify-active`]: isActive,
                })}
                onClick={() => {
                    onHandleSendMessage();
                    setIsActive(true);
                    setSleepTime(60);
                }}
            >
                {text}
            </div>
        );
    };

    return (
        <Clear
            {...rest}
            groupClassName={`${prefixCls}__group-verify`}
            backRender={verifyRender()}
        />
    );
};

export default memo(Verify);
