import React from 'react';
import { Button, Panel } from 'jing-ui';

export default () => (
    <div className="jing-page jing-page-button">
        <Panel title="形态">
            <Button variant="contained">实心</Button>
            <Button variant="outlined">描边</Button>
            <Button variant="text">描边</Button>
        </Panel>
        <Panel title="颜色">
            <Button>蓝色</Button>
            <Button color="orange">橙色</Button>
            <Button color="green">绿色</Button>
        </Panel>
        <Panel title="尺寸大小">
            <Button>普通按钮</Button>
            <Button size="sm">小按钮</Button>
        </Panel>
        <Panel title="是否为块级元素">
            <Button block>按钮</Button>
        </Panel>
    </div>
);
