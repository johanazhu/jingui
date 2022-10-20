import React from 'react';
import { Space } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="基本用法">
            <Space style={{ backgroundColor: 'red' }} />
        </DemoBlock>
        <DemoBlock title="空行尺寸">
            <Space scale={1} style={{ backgroundColor: 'blue' }} />
            <Space scale={2} style={{ backgroundColor: 'red' }} />
            <Space scale={3} style={{ backgroundColor: 'yellow' }} />
            <Space scale={4} style={{ backgroundColor: 'green' }} />
        </DemoBlock>
    </>
);
