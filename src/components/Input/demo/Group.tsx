import React, { useState } from 'react';
import { Input, Panel } from 'jing-ui';

export default () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [value, setValue] = useState('');

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
            <Panel title="KeyBoard输入框">
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
            </Panel>
        </div>
    );
};
