import React from 'react';
import { Stepline } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';
import './index.scss';

export default () => (
    <>
        <DemoBlock title="基础用法">
            <Stepline percent="90%" color="#3264c8">
                <Stepline.Item footer="步骤名称1">1</Stepline.Item>
                <Stepline.Item footer="步骤名称2">2</Stepline.Item>
                <Stepline.Item footer="步骤名称3">3</Stepline.Item>
            </Stepline>
        </DemoBlock>
        <DemoBlock className="demo-jing-stepline" title="省略号模式">
            <Stepline percent="61%" type="ellipsis">
                <Stepline.Item footer="步骤名称1">1</Stepline.Item>
                <Stepline.Item footer="步骤名称2">2</Stepline.Item>
                <Stepline.Item footer="步骤名称3">3</Stepline.Item>
            </Stepline>
            <Stepline percent="90%" type="ellipsis">
                <Stepline.Item footer="步骤名称1">1</Stepline.Item>
                <Stepline.Item footer="步骤名称2">2</Stepline.Item>
                <Stepline.Item footer="步骤名称3">3</Stepline.Item>
                <Stepline.Item footer="步骤名称4">3</Stepline.Item>
            </Stepline>
        </DemoBlock>
    </>
);
