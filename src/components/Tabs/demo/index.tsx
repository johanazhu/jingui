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
                title="省略过长的标题文字"
                padding="0px"
                className="demo-jing-tabs"
            >
                <Tabs value={value} ellipsis>
                    <Tabs.Panel title="标签1标签1标签1标签1标签1">
                        内容 1
                    </Tabs.Panel>
                    <Tabs.Panel title="标签2">内容 2</Tabs.Panel>
                    <Tabs.Panel title="标签3">内容 3</Tabs.Panel>
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
                title="样式风格"
                padding="0px"
                className="demo-jing-tabs"
            >
                <Tabs
                    value={value}
                    type="img"
                    onChange={(index) => {
                        index && setValue(index);
                    }}
                >
                    <Tabs.Panel
                        title="成人保险"
                        img="https://prd-public-oss-jingxb.oss-cn-shanghai-finance-1-pub.aliyuncs.com/product/tag/%E5%95%86%E5%9F%8Eicon-%E6%88%90%E4%BA%BA%E4%BF%9D%E9%99%A9.png"
                    >
                        成人保险
                    </Tabs.Panel>
                    <Tabs.Panel
                        title="老年人保险"
                        img="https://prd-public-oss-jingxb.oss-cn-shanghai-finance-1-pub.aliyuncs.com/product/tag/%E5%95%86%E5%9F%8Eicon-%E8%80%81%E5%B9%B4%E4%BA%BA%E4%BF%9D%E9%99%A9.png"
                    >
                        老年人保险
                    </Tabs.Panel>
                    <Tabs.Panel
                        title="少儿保险"
                        img="https://prd-public-oss-jingxb.oss-cn-shanghai-finance-1-pub.aliyuncs.com/product/tag/%E5%95%86%E5%9F%8Eicon-%E5%84%BF%E7%AB%A5%E4%BF%9D%E9%99%A9.png"
                    >
                        少儿保险
                    </Tabs.Panel>
                    <Tabs.Panel
                        title="财富保险"
                        img="https://prd-public-oss-jingxb.oss-cn-shanghai-finance-1-pub.aliyuncs.com/product/tag/%E5%95%86%E5%9F%8Eicon-%E8%B4%A2%E5%AF%8C%E4%BF%9D%E9%99%A9.png"
                    >
                        财富保险
                    </Tabs.Panel>
                    <Tabs.Panel
                        title="场景保险"
                        img="https://prd-public-oss-jingxb.oss-cn-shanghai-finance-1-pub.aliyuncs.com/product/tag/productTag-场景保险-01632380692238.png"
                    >
                        场景保险
                    </Tabs.Panel>
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
            {/* <DemoBlock
                title="加上图片"
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
                    <Tabs.Panel title="标签1" img="https://prd-public-oss-jingxb.oss-cn-shanghai-finance-1-pub.aliyuncs.com/product/tag/%E5%95%86%E5%9F%8Eicon-%E6%88%90%E4%BA%BA%E4%BF%9D%E9%99%A9.png">内容 1</Tabs.Panel>
                    <Tabs.Panel title="标签2" img="https://prd-public-oss-jingxb.oss-cn-shanghai-finance-1-pub.aliyuncs.com/product/tag/%E5%95%86%E5%9F%8Eicon-%E6%88%90%E4%BA%BA%E4%BF%9D%E9%99%A9.png">内容 2</Tabs.Panel>
                    <Tabs.Panel title="标签3" img="https://prd-public-oss-jingxb.oss-cn-shanghai-finance-1-pub.aliyuncs.com/product/tag/%E5%95%86%E5%9F%8Eicon-%E6%88%90%E4%BA%BA%E4%BF%9D%E9%99%A9.png">内容 3</Tabs.Panel>
                </Tabs>
            </DemoBlock> */}
        </>
    );
};
