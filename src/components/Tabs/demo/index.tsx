import React, { useState } from 'react';
import { Tabs } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [value, setValue] = useState(0);

    return (
        <>
            <DemoBlock
                title="基础用法"
                padding="0px"
                className="demo-jing-tabs"
            >
                <Tabs
                    value={value}
                    onChange={(index) => {
                        index && setValue(index);
                    }}
                >
                    <Tabs.Panel title="标签1">内容 1</Tabs.Panel>
                    <Tabs.Panel title="标签2">内容 2</Tabs.Panel>
                    <Tabs.Panel title="标签3">内容 3</Tabs.Panel>
                </Tabs>
            </DemoBlock>
            <DemoBlock
                title="标签栏滚动"
                padding="0px"
                className="demo-jing-tabs"
            >
                <Tabs value={value}>
                    <Tabs.Panel title="标签1">内容 1</Tabs.Panel>
                    <Tabs.Panel title="标签2">内容 2</Tabs.Panel>
                    <Tabs.Panel title="标签3">内容 3</Tabs.Panel>
                    <Tabs.Panel title="标签4">内容 4</Tabs.Panel>
                    <Tabs.Panel title="标签5">内容 5</Tabs.Panel>
                    <Tabs.Panel title="标签6">内容 6</Tabs.Panel>
                    <Tabs.Panel title="标签7">内容 7</Tabs.Panel>
                    <Tabs.Panel title="标签8">内容 8</Tabs.Panel>
                </Tabs>
            </DemoBlock>
            <DemoBlock
                title="禁用标签"
                padding="0px"
                className="demo-jing-tabs"
            >
                <Tabs
                    value={value}
                    onChange={(index) => {
                        index && setValue(index);
                    }}
                >
                    <Tabs.Panel title="标签1">内容 1</Tabs.Panel>
                    <Tabs.Panel title="标签2" disabled>
                        内容 2
                    </Tabs.Panel>
                    <Tabs.Panel title="标签3">内容 3</Tabs.Panel>
                </Tabs>
            </DemoBlock>
            <DemoBlock
                title="粘性布局"
                padding="0px"
                className="demo-jing-tabs"
            >
                <Tabs value={value} sticky>
                    <Tabs.Panel title="标签1">内容 1</Tabs.Panel>
                    <Tabs.Panel title="标签2">内容 2</Tabs.Panel>
                    <Tabs.Panel title="标签3">内容 3</Tabs.Panel>
                    <Tabs.Panel title="标签4">内容 4</Tabs.Panel>
                </Tabs>
            </DemoBlock>
            <DemoBlock
                title="点击事件"
                padding="0px"
                className="demo-jing-tabs"
            >
                <Tabs
                    value={value}
                    onChange={(index) => {
                        index && setValue(index);
                        alert(index);
                    }}
                >
                    <Tabs.Panel title="标签1">内容 1</Tabs.Panel>
                    <Tabs.Panel title="标签2">内容 2</Tabs.Panel>
                    <Tabs.Panel title="标签3">内容 3</Tabs.Panel>
                </Tabs>
            </DemoBlock>
            {/* 切换动画 */}
            <DemoBlock
                title="滑动切换"
                padding="0px"
                className="demo-jing-tabs"
            >
                <Tabs value={value} swipeable>
                    <Tabs.Panel title="标签1">内容 1</Tabs.Panel>
                    <Tabs.Panel title="标签2">内容 2</Tabs.Panel>
                    <Tabs.Panel title="标签3">内容 3</Tabs.Panel>
                    <Tabs.Panel title="标签4">内容 4</Tabs.Panel>
                </Tabs>
            </DemoBlock>
        </>
    );
};
