import React, { useEffect, useState } from 'react';
import { Cell, Input, Button, KeyBoard, Toast, hooks } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => {

    const [state, updateState] = hooks.useSetState({
        text: '',
        tel: '',
        digit: '',
        num: '',
        password: '',
    })

    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');

    const [isActive, setIsActive] = useState(false);
    const [state1, setState1] = hooks.useSetState({
        visible: false,
        value: '',
    });


    return (
        <>
            <DemoBlock title="基础用法" padding="">
                <Cell>
                    <Input
                        value={state.text}
                        onChange={(text: any) => updateState({ text })}
                        placeholder='请输入文本'
                    />
                </Cell>
                <Cell>
                    <Input
                        value={state.tel}
                        type='tel'
                        onChange={(tel: any) => updateState({ tel })}
                        placeholder='请输入手机号'
                    />
                </Cell>
                <Cell>
                    <Input
                        value={state.digit}
                        type='digit'
                        onChange={(digit: any) => updateState({ digit })}
                        placeholder='请输入整数'
                    />
                </Cell>
                <Cell>
                    <Input
                        value={state.num}
                        type='number'
                        onChange={(num: any) => updateState({ num })}
                        placeholder='请输入数字'
                    />
                </Cell>

                <Cell>
                    <Input
                        value={state.password}
                        type='password'
                        onChange={(password: any) => updateState({ password })}
                        placeholder='请输入密码'
                    />
                </Cell>
            </DemoBlock>
            <DemoBlock title="清除按钮" padding="">
                <Cell>
                    <Input
                        placeholder="请输入文本"
                        value={value}
                        onChange={setValue}
                        clearable
                        onClear={() => {
                            setValue('')
                        }}
                    />
                </Cell>
            </DemoBlock>
            <DemoBlock title="插入内容" padding="">
                <Cell>
                    <Input
                        prefix="💁"
                        suffix={<Button size="small" type="primary">发送</Button>}
                        value={value1}
                        onChange={setValue1}
                        placeholder="请输入短信验证码"
                    />
                </Cell>
            </DemoBlock>
            <DemoBlock title="结合键盘的Input" padding="">
                <Cell>
                    <Input.KeyBoard
                    // value={state1.value}
                    // placeholder="请输入登录密码"
                    // active={isActive}
                    // onHandleFocus={() => {
                    //     setIsActive(true);
                    //     console.log('keyboard聚焦时');
                    // }}
                    // onClearValue={() => {
                    //     setIsActive(false);
                    //     console.log('点击清除图标时');
                    // }}
                    // maxLength={20}
                    />
                </Cell>
                <KeyBoard
                    value={state1.value}
                    visible={state1.visible}
                    maxLength={10}
                    layoutName="default"
                    onBlur={() => {
                        setState1({ visible: false });
                    }}
                    onInput={(value: string) => {
                        setState1({ value });
                    }}
                    onSpaceCb={() => {
                        Toast('空格不可用');
                    }}
                    onDoneCb={() => {
                        Toast('点击完成');
                    }}
                />
            </DemoBlock>
            {/* <DemoBlock title="带前缀的输入框" padding="">
                <Input.Prefix
                    value={value}
                    placeholder="带前缀的输入框"
                    icon={<IconUser />}
                />
            </DemoBlock>

            <DemoBlock title="KeyBoard输入框" padding="">
                <Input.KeyBoard
                    value={value}
                    placeholder="具体可去键盘组件查看demo"
                    active={isActive}
                    onHandleFocus={() => {
                        setIsActive(true);
                        console.log('keyboard聚焦时');
                    }}
                    onClearValue={() => {
                        setIsActive(false);
                        console.log('点击清除图标时');
                    }}
                    maxLength={20}
                />
            </DemoBlock>
            <DemoBlock title="多行文本" padding="">
                <Input.Textarea
                    rows={3}
                    placeholder="请输入"
                    value={text}
                    onChange={(value: any) => {
                        setText(value);
                        console.log(`onChange: ${value}`);
                    }}
                    onBlur={(value: any) => console.log(`onBlur: ${value}`)}
                />
            </DemoBlock> */}
        </>
    );
};
