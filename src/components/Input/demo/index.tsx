import React, { useState, useEffect } from 'react';
import { Input, Panel } from 'jing-ui';

export default () => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [value, setValue] = useState('')

    return (
        <div className="jing-page jing-page-input">

            <Panel title="基本用法">
                <Input
                    placeholder="请输入"
                    value={title}
                    onChange={(value: any) => {
                        setTitle(value);
                        console.log(`onChange: ${value}`);
                    }}
                    onBlur={(value: any) => console.log(`onBlur: ${value}`)}
                />
            </Panel>
            <Panel title="多行文本">
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
            </Panel>
            <Panel title="带密码的输入框">
                <Input.Password value={value} placeholder="带密码的输入框" />
            </Panel>
            <Panel title="带清除的输入框">
                <Input.Clear value={value} placeholder="带清除的输入框" />
            </Panel>
            <Panel title="带发送验证码的输入框">
                <Input.Verify
                    value={value}
                    placeholder="带发送验证码的输入框"
                    onHandleSendMessage={() => {
                        console.log('调接口')
                    }}
                />
            </Panel>
            <Panel title="带验证码的输入框">
                <Input.Captcha
                    value={value}
                    placeholder="带验证码的输入框"
                    captcha={<img src={'http://wx.jingqb.com/certiification.jpg'} />}
                    onHandleChangeCaptcha={() => {
                        console.log('更换验证码')
                    }}
                />
            </Panel>
            <Panel title="KeyBoard输入框">
                <Input.Group>
                    <Input.KeyBoard
                        value={value}
                        placeholder="你想干啥"
                        isActive={true}
                        onHandleFocus={() => {
                            console.log('keyboard聚焦时')
                        }}
                        onClearValue={() => {
                            console.log('点击清除图标时')
                        }}
                        maxLength={20}
                    />
                </Input.Group>
            </Panel>
        </div>
    )
}
