import React from 'react';
import { Button } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';
import './index.scss';

export default () => (
    <>
        <DemoBlock
            title="类型"
            className="demo-jing-button"
            padding="10px 16px 0"
        >
            <Button type="primary">主色按钮</Button>
            <Button type="second-primary">次色按钮</Button>
            <Button>默认按钮</Button>
        </DemoBlock>
        <DemoBlock
            title="朴素按钮"
            className="demo-jing-button"
            padding="10px 16px 0"
        >
            <Button plain type="primary">
                朴素按钮
            </Button>
            <Button plain type="second-primary">
                朴素按钮
            </Button>
        </DemoBlock>
        <DemoBlock
            title="禁用状态"
            className="demo-jing-button"
            padding="10px 16px 0"
        >
            <Button disabled type="primary">
                禁用状态
            </Button>
            <Button disabled type="second-primary">
                禁用状态
            </Button>
        </DemoBlock>
        <DemoBlock
            title="加载状态"
            className="demo-jing-button"
            padding="10px 16px 0"
        >
            <Button loading type="primary" />
            <Button loading type="second-primary">
                加载状态
            </Button>
        </DemoBlock>
        <DemoBlock
            title="按钮形状"
            className="demo-jing-button"
            padding="10px 16px 0"
        >
            <Button round type="primary">
                圆形按钮
            </Button>
        </DemoBlock>
        <DemoBlock
            title="按钮尺寸"
            className="demo-jing-button"
            padding="10px 16px 0"
        >
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
                迷你
            </Button>
        </DemoBlock>
        <DemoBlock
            title="块级元素"
            className="demo-jing-button"
            padding="10px 16px 0"
        >
            <Button type="primary" block>
                块级元素
            </Button>
        </DemoBlock>
        <DemoBlock
            title="自定义颜色"
            className="demo-jing-button"
            padding="10px 16px 0"
        >
            <Button color="#7232dd">单色按钮</Button>
            <Button color="#7232dd" plain>
                单色按钮
            </Button>
            <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
                渐变按钮
            </Button>
        </DemoBlock>
        <DemoBlock
            title="点击事件"
            className="demo-jing-button"
            padding="10px 16px 0"
        >
            <Button type="primary" block onClick={() => alert('我错了')}>
                有本事就来点我啊
            </Button>
        </DemoBlock>

        <DemoBlock title="选项状态">
            <Button.Group>
                <Button type="primary">我是按钮</Button>
            </Button.Group>
            <Button.Group type="fixed-bottom">
                <Button type="primary" disabled>
                    我是按钮
                </Button>
                <Button type="primary">我是按钮</Button>
            </Button.Group>
        </DemoBlock>
        <DemoBlock title="按钮组尺寸" className="demo-jing-button-group">
            <Button.Group size="large">
                <Button type="primary" plain>
                    按钮1
                </Button>
                <Button type="primary" loading>
                    按钮2
                </Button>
            </Button.Group>
            <Button.Group size="normal">
                <Button type="primary" plain>
                    按钮1
                </Button>
                <Button type="primary" plain>
                    按钮2
                </Button>
                <Button type="primary">按钮3</Button>
            </Button.Group>
            <Button.Group size="small">
                <Button type="primary" plain>
                    按钮1
                </Button>
                <Button type="primary" plain>
                    按钮2
                </Button>
                <Button type="primary">按钮3</Button>
                <Button type="primary">按钮4</Button>
            </Button.Group>
            <Button.Group size="mini">
                <Button type="primary" plain>
                    按钮1
                </Button>
                <Button type="primary" plain round>
                    按钮2
                </Button>
                <Button type="second-primary" round>
                    按钮3
                </Button>
                <Button type="second-primary" disabled>
                    按钮4
                </Button>
            </Button.Group>
        </DemoBlock>
    </>
);
