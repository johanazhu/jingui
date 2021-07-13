import React, { useState } from 'react';
import { Input, Panel } from 'jing-ui';

export default () => {
    const [value, setValue] = useState('');
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="jing-page jing-page-input">
            <Panel title="KeyBoard输入框">
                <Input
                    placeholder="请输入"
                    value={value}
                    onChange={(value: any) => {
                        setValue(value);
                    }}
                />
            </Panel>
            <Panel title="KeyBoard输入框">
                <Input.KeyBoard
                    value={value}
                    placeholder="你想干啥"
                    isActive={isActive}
                    onHandleFocus={() => {
                        console.log('keyboard聚焦时');
                        setIsActive(true);
                    }}
                    onClearValue={() => {
                        console.log('点击清除图标时');
                        setValue('');
                    }}
                    maxLength={20}
                />
            </Panel>
        </div>
    );
};
