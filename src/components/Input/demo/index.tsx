import React, { useState } from 'react';
import { Input, IconCalculation } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [img, setImg] = useState('http://wx.jingqb.com/certiification.jpg');
    const [value, setValue] = useState('');

    return (
        <>
            <DemoBlock title="基础用法" padding="">
                <Input
                    placeholder="请输入"
                    value={title}
                    onChange={(value: any) => {
                        setTitle(value);
                        console.log(`onChange: ${value}`);
                    }}
                    onBlur={(value: any) => console.log(`onBlur: ${value}`)}
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
            </DemoBlock>
            <DemoBlock title="带前缀的输入框" padding="">
                <Input.Prefix
                    value={value}
                    placeholder="带前缀的输入框"
                    icon={<IconCalculation />}
                />
            </DemoBlock>
            <DemoBlock title="带密码的输入框" padding="">
                <Input.Password value={value} placeholder="带密码的输入框" />
            </DemoBlock>
            <DemoBlock title="带清除的输入框" padding="">
                <Input.Clear value={value} placeholder="带清除的输入框" />
                <Input.Clear
                    value={value}
                    placeholder="带清除的输入框"
                    render="111"
                />
                <Input.Clear
                    value={value}
                    placeholder="带清除的输入框"
                    backRender="111"
                />
            </DemoBlock>
            <DemoBlock title="带发送验证码的输入框" padding="">
                <Input.Verify
                    value={value}
                    placeholder="带发送验证码的输入框"
                    onHandleSendMessage={() => {
                        console.log('调接口');
                    }}
                />
            </DemoBlock>
            <DemoBlock title="带验证码的输入框" padding="">
                <Input.Captcha
                    type="text"
                    maxLength={4}
                    value={value}
                    placeholder="带验证码的输入框"
                    captcha={<img src={img} />}
                    onHandleChangeCaptcha={() => {
                        setImg(img + '?' + new Date().getTime());
                    }}
                />

            </DemoBlock>
            {/* <DemoBlock title="KeyBoard输入框" padding="">
                <Input.Group>
                    <Input.KeyBoard
                        value={value}
                        placeholder="你想干啥"
                        isActive={true}
                        onHandleFocus={() => {
                            console.log('keyboard聚焦时');
                        }}
                        onClearValue={() => {
                            console.log('点击清除图标时');
                        }}
                        maxLength={20}
                    />
                </Input.Group>
            </DemoBlock> */}
        </>
    );
};
