import React, { useState } from 'react';
import { Tabs, Tab } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [value, setValue] = useState(0);

    return (
        <DemoBlock title="基础用法">
            <Tabs value={value} onChange={setValue}>
                <Tab value="标签1">内容 1</Tab>
                <Tab value="标签1">内容 1</Tab>
                <Tab value="标签1">内容 1</Tab>
            </Tabs>
        </DemoBlock>
    );
};
