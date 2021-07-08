import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { InputProps } from './input';
import Clear from './clear';
import Group from './group';


export interface VerifyProps extends InputProps {
    onHandleSendMessage: () => void;
}

const Verify = (props: VerifyProps) => {

    const { onHandleSendMessage } = props;

    const [text, setText] = useState('获取验证码');
    const [sleepTime, setSleepTime] = useState(60);
    const [isActive, setIsActive] = useState(false);


    const timer = 60;

    useEffect(() => {
        // console.log('isActive', isActive)
        // console.log('sleepTime', sleepTime)
        if (isActive) {
            let countDown = setInterval(() => {
                if (sleepTime < 1) {
                    clearInterval(countDown);
                    setIsActive(false)
                    setText('获取验证码');
                } else {
                    setSleepTime(sleepTime - 1);
                    setText(() => `重新获取(${sleepTime})`);
                }
            }, 1000)
            return () => clearInterval(countDown)
        }
    }, [isActive, sleepTime])

    const verifyRender = () => {
        return (
            <div
                className={classnames("jqb-input__verify", {
                    'jqb-input__verify_active': isActive
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
        <Group className="jqb-input__group-verify">
            <Clear
                {...props}
            />
            {verifyRender()}
        </Group>
    );
};
export default React.memo(Verify);