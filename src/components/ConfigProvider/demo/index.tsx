import React, { useState } from 'react';
import { ConfigProvider, Space, Button } from 'jing-ui';
import { DemoBlock } from 'demo';

const colors = [
    '#4664D2',
    '#00bc70',
    '#1890ff',
    '#f5222d',
    '#fa541b',
    '#13c2c2',
    '#2f54ec',
    '#712fd1',
];

export default () => {
    const [theme, setTheme] = useState(localStorage.theme || 'light');
    const [primaryColor, setPrimaryColor] = useState(
        localStorage.primaryColor || colors[0],
    );

    console.log('primaryColor', primaryColor);

    return (
        <>
            <DemoBlock title="基本用法">
                <Button block onClick={() => setPrimaryColor('#712fd1')}>
                    修改主题色成712fd1
                </Button>
                <Button block onClick={() => setPrimaryColor('#1890ff')}>
                    修改主题色成1890ff
                </Button>
                <ConfigProvider primaryColor={primaryColor} theme={theme}>
                    <div>
                        <Button type="primary" block>
                            主色按钮
                        </Button>
                        <Button type="second-primary" block>
                            次色按钮
                        </Button>
                    </div>
                </ConfigProvider>
            </DemoBlock>
        </>
    );
};
