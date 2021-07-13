import React, { useState } from 'react';
import { Input, Panel } from 'jing-ui';

export default () => {
    const [value, setValue] = useState('');

    return (
        <div className="jing-page jing-page-input">
            <Panel title="带密码的输入框">
                <Input.Password value={value} placeholder="带密码的输入框" />
            </Panel>
        </div>
    );
};
