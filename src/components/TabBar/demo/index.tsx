import React, { useState } from 'react';
import {
    TabBar,
    Space,
    IconMall,
    IconMallBlack,
    IconFind,
    IconFindBlack,
    IconMy,
    IconMyBlack
} from '@jojobo/jing-ui';

import { DemoBlock } from 'demo';

export default () => {
    const [activeKey1, setActiveKey1] = useState('mall');
    const [activeKey2, setActiveKey2] = useState('mall');

    return (
        <>
            <DemoBlock text="基本用法" padding="" className="demo-jing-tabbar">
                <TabBar
                    activeKey={activeKey1}
                    onChange={(key: string, pagePath: string) => {
                        console.log('key', key, pagePath)
                        setActiveKey1(key);
                    }}
                >
                    <TabBar.Item
                        itemKey="mall"
                        pagePath="/mall"
                        text="首页"
                        icon={<IconMallBlack />}
                        selectedIcon={<IconMall />}
                    />
                    <TabBar.Item
                        itemKey="find"
                        pagePath="/find"
                        text="发现"
                        icon={<IconFindBlack />}
                        selectedIcon={<IconFind />}
                    />
                    <TabBar.Item
                        itemKey="my"
                        pagePath="/my"
                        text="我的"
                        icon={<IconMyBlack />}
                        selectedIcon={<IconMy />}
                    />
                </TabBar>
            </DemoBlock>
            <Space scale={2} />
            <DemoBlock
                text="监听切换标签前的回调函数"
                padding=""
                className="demo-jing-tabbar"
            >
                <TabBar
                    activeKey={activeKey2}
                    beforeChange={(value: any) => {
                        if (value === 'mall') {
                            console.log('点击我的不能打印');
                            return false;
                        } else {
                            return new Promise((resolve) => {
                                setTimeout(() => {
                                    console.log('1秒后打印');
                                    resolve(true);
                                }, 1000);
                            });
                        }
                    }}
                    onChange={(key: string, pagePath: string) => {
                        console.log('key2', key, pagePath)
                        setActiveKey2(key);
                    }}
                >
                    <TabBar.Item
                        itemKey="mall"
                        pagePath="/mall"
                        text="首页"
                        icon={<IconMallBlack />}
                        selectedIcon={<IconMall />}
                    />
                    <TabBar.Item
                        itemKey="find"
                        pagePath="/find"
                        text="发现"
                        icon={<IconFindBlack />}
                        selectedIcon={<IconFind />}
                    />
                    <TabBar.Item
                        itemKey="my"
                        pagePath="/my"
                        text="我的"
                        icon={<IconMyBlack />}
                        selectedIcon={<IconMy />}
                    />
                </TabBar>
            </DemoBlock>
        </>
    );
};
