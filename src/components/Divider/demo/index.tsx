import * as React from 'react';
import { Divider } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="基本用法">
            <Divider contentPosition="center" />
        </DemoBlock>
        <DemoBlock title="展示文本">
            <Divider contentPosition="center">文本</Divider>
        </DemoBlock>
        <DemoBlock title="内容位置">
            <Divider contentPosition="right">文本</Divider>
            <Divider contentPosition="center">文本</Divider>
        </DemoBlock>
        <DemoBlock title="虚线">
            <Divider contentPosition="center" dashed>
                文本
            </Divider>
        </DemoBlock>
    </>
);
