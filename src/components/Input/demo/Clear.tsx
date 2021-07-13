import React, { useState } from 'react';
import { Input, Panel } from 'jing-ui';

export default () => {
    const [value, setValue] = useState('');

    return (
        <div className="jing-page jing-page-input">
            <Panel title="基本用法">
                <Input.Clear value={value} placeholder="带清除的输入框" />
            </Panel>
            <Panel title="render">
                <Input.Clear
                    value={value}
                    placeholder="带清除的输入框"
                    render="111"
                />
            </Panel>
            <Panel title="backRender">
                <Input.Clear
                    value={value}
                    placeholder="带清除的输入框"
                    backRender="111"
                />
            </Panel>
        </div>
    );
};
