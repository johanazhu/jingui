import * as React from 'react';
import { Divider } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="基本用法">
            <Divider contentPosition="center">文字</Divider>
            <Divider contentPosition="left">文字</Divider>
            <Divider contentPosition="right">文字</Divider>
            <Divider contentPosition="center" dashed>文字</Divider>
        </DemoBlock>
    </>
);
