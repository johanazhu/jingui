import React from 'react';
import { Button, Panel } from 'jing-ui';

export default () => (
    <div className="jing-page jing-page-button">
        <Panel title="类型">
            <Button type="primary">主色按钮</Button>
            <Button type="second-primary">次色按钮</Button>
            <Button>默认按钮</Button>
        </Panel>
        <Panel title="朴素按钮">
            <Button plain type="primary">
                朴素按钮
            </Button>
            <Button plain type="second-primary">
                朴素按钮
            </Button>
        </Panel>
        <Panel title="禁用状态">
            <Button disabled type="primary">
                禁用状态
            </Button>
            <Button disabled type="second-primary">
                禁用状态
            </Button>
        </Panel>
        <Panel title="加载状态">
            <Button loading type="primary" />
            <Button loading type="second-primary">
                加载状态
            </Button>
        </Panel>
        <Panel title="按钮形状">
            <Button round type="primary">
                圆形按钮
            </Button>
        </Panel>
        <Panel title="按钮尺寸">
            <Button type="primary" size="large">
                大号按钮
            </Button>
            <Button type="primary" size="normal">
                中按钮
            </Button>
            <Button type="primary" size="small">
                小按钮
            </Button>
            <Button type="primary" size="mini" round>
                迷你按钮
            </Button>
        </Panel>
        <Panel title="块级元素">
            <Button type="primary" block>
                块级元素
            </Button>
        </Panel>
        <Panel title="自定义颜色">
            <Button color="#7232dd">单色按钮</Button>
            <Button color="#7232dd" plain>
                单色按钮
            </Button>
            <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
                渐变色按钮
            </Button>
        </Panel>
        <Panel title="点击事件">
            <Button type="primary" block onClick={() => alert('Hello')}>
                click
            </Button>
        </Panel>
    </div>
);
