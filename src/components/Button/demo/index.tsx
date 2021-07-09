import React from 'react';
import { Button, Panel } from 'jing-ui';

export default () => (
    <div className="jing-page jing-page-button">
        <Panel title="颜色">
            <Button>蓝色</Button>
            <Button color="orange">橙色</Button>
        </Panel>
        <Panel title="尺寸大小">
            <Button size="lg">大按钮</Button>
            <Button size="md">普通按钮</Button>
            <Button size="sm">小按钮</Button>
            <Button size="xs">更小按钮</Button>
        </Panel>
        <Panel title="是否为块级元素">
            <Button block>按钮</Button>
        </Panel>
    </div>
);