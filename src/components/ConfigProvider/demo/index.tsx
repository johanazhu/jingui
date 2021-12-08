import React, { useState } from 'react';
import { ConfigProvider, Cell, Button, ButtonGroup } from 'jing-ui';
import { DemoBlock } from 'demo';

const colors = [
    '#4664D2',
    '#26a4a4',
    '#1890ff',
    '#f5222d',
    '#fa541b',
    '#13c2c2',
];

export default () => {
    const [theme, setTheme] = useState(localStorage.theme || 'light');
    const [primaryColor, setPrimaryColor] = useState(
        localStorage.primaryColor || colors[0],
    );

    return (
        <>
            <DemoBlock
                title="基本用法"
                padding="0"
                className="demo-jing-config-provider"
            >
                <Cell
                    title="切换品牌色"
                    value={
                        <ul className="colors">
                            {colors.map((item) => (
                                <li
                                    style={{ backgroundColor: item }}
                                    onClick={() => {
                                        setPrimaryColor(item);
                                    }}
                                ></li>
                            ))}
                        </ul>
                    }
                />
                <Cell
                    title="切换主题"
                    value={<Button size="mini">开启</Button>}
                />
                <Cell
                    title="警告框"
                    value={<Button size="mini">开启</Button>}
                />
                <Cell
                    title="确认框"
                    value={<Button size="mini">开启</Button>}
                />
                <ConfigProvider primaryColor={primaryColor} theme={theme}>
                    <div>
                        <Button type="primary" block>
                            主色按钮
                        </Button>
                    </div>
                </ConfigProvider>
            </DemoBlock>
        </>
    );
};
