import React, { useState } from 'react';
import { ConfigProvider, Space } from 'jing-ui';

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
            <ConfigProvider primaryColor={primaryColor} theme={theme}>
                <div>1111</div>
            </ConfigProvider>
        </div>
    );
};
