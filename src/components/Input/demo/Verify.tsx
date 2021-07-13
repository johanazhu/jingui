import React, { useState } from 'react';
import { Input, Panel } from 'jing-ui';

export default () => {
    const [value, setValue] = useState('');

    return (
        <div className="jing-page jing-page-input">
            <Panel title="带发送验证码的输入框">
                <Input.Verify
                    value={value}
                    placeholder="带发送验证码的输入框"
                    onHandleSendMessage={() => {
                        console.log('调接口');
                    }}
                />
            </Panel>
        </div>
    );
};
