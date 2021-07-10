import React from 'react';
import { Button, Panel } from 'jing-ui';

export default () => (
    <div className="jing-page jing-page-button">
        <Panel title="形态">
            <Button variant="contained">contained</Button>
            <Button variant="outlined">outlined</Button>
        </Panel>
        <Panel title="颜色">
            <Button>blue</Button>
            <Button color="orange">orange</Button>
            <Button color="green">green</Button>
        </Panel>
        <Panel title="尺寸大小">
            <Button size="md">md</Button>
            <Button size="sm">sm</Button>
        </Panel>
        <Panel title="状态">
            <Button loading>loading</Button>
            <Button loading color="orange">
                loading
            </Button>
            <Button loading disabled>
                disabled
            </Button>
        </Panel>
        <Panel title="是否为块级元素">
            <Button block>block</Button>
        </Panel>
        <Panel title="点击事件">
            <Button block onClick={() => alert('Hello')}>
                click
            </Button>
        </Panel>
    </div>
);
