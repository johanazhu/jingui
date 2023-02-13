import React from 'react';
import { PasswordInput, KeyBoard, Toast, hooks } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';
import './index.scss';

export default () => {
    const [state, setState] = hooks.useSetState({
        visible: false,
        value: '',
    });
    const onSubmit = (val: string) => {
        console.log('onSubmit val', val);
        Toast(`输入值为：${val}`);
    };

    return (
        <>
            <DemoBlock
                title="基本用法"
                padding=""
                className="demo-jing-password-input"
            >
                <PasswordInput onSubmit={onSubmit} />
            </DemoBlock>
            <DemoBlock
                title="自定义长度"
                padding=""
                className="demo-jing-password-input"
            >
                <PasswordInput length={4} onSubmit={onSubmit} />
            </DemoBlock>
            <DemoBlock
                title="格子间距"
                padding=""
                className="demo-jing-password-input"
            >
                <PasswordInput gutter={10} onSubmit={onSubmit} />
            </DemoBlock>
            <DemoBlock
                title="设置圆角大小"
                padding=""
                className="demo-jing-password-input"
            >
                <PasswordInput gutter={10} radius="4" onSubmit={onSubmit} />
            </DemoBlock>
            <DemoBlock
                title="明文展示"
                padding=""
                className="demo-jing-password-input"
            >
                <PasswordInput value="123" mask={false} onSubmit={onSubmit} />
            </DemoBlock>
            <DemoBlock
                title="只允许数字"
                padding=""
                className="demo-jing-password-input"
            >
                <PasswordInput
                    type="number"
                    value="123"
                    mask={false}
                    onSubmit={onSubmit}
                />
            </DemoBlock>
            <DemoBlock
                title="与键盘联动"
                padding=""
                className="demo-jing-password-input demo-jing-password-input-keyboard"
            >
                <PasswordInput
                    mode="keyboard"
                    value={state.value}
                    autoFocus={state.visible}
                    onFocus={() => setState({ visible: true })}
                    onSubmit={onSubmit}
                />
                <KeyBoard
                    visible={state.visible}
                    theme="number"
                    onBlur={() => {
                        setState({ visible: false });
                    }}
                    onInput={(value: string) => {
                        console.log('value', value);
                        setState({ value: state.value + value });
                    }}
                />
            </DemoBlock>
        </>
    );
};
