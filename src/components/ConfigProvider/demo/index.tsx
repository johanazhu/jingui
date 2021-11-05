import React, { useState } from 'react';
import { ConfigProvider, Space, Button } from 'jing-ui';

const colors = [
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

    return (
        <div className="jing-page">
            <Space />
            <Button block onClick={() => setPrimaryColor('#712fd1')}>
                click
            </Button>
            <Button block onClick={() => setPrimaryColor('#1890ff')}>
                click2
            </Button>
            <ConfigProvider primaryColor={primaryColor} theme={theme}>
                <Button block>中文</Button>
            </ConfigProvider>
        </div>
    );
};
