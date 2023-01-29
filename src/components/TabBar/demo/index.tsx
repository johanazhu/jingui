import React, { useState } from 'react';
import {
    TabBar,
    IconHome,
    IconFinancial,
    IconUser,
    IconMall,
    IconMallBlck,
    IconFind,
    IconFindBlack,
    IconMy,
    IconMyBlack
} from '@jojobo/jing-ui';

import { DemoBlock } from 'demo';

export default () => {
    const [activeKey, setActiveKey] = useState('home');
    const [activeKey1, setActiveKey1] = useState('mall');
    const [activeKey2, setActiveKey2] = useState('home');

    return (
        <>
            <DemoBlock title="基本用法" padding="" className="demo-jing-tabbar">
                <TabBar
                    activeKey={activeKey}
                    onChange={(key: any) => {
                        setActiveKey(key);
                    }}
                >
                    <TabBar.Item
                        itemKey="home"
                        title="主页"
                        icon={<IconHome />}
                    />
                    <TabBar.Item
                        itemKey="financial"
                        title="理财"
                        icon={<IconFinancial />}
                    />
                    <TabBar.Item
                        itemKey="user"
                        title="我的"
                        icon={<IconUser />}
                    />
                </TabBar>
            </DemoBlock>
            <DemoBlock title="基本用法2" padding="" className="demo-jing-tabbar">
                <TabBar
                    activeKey={activeKey1}
                    onChange={(key: any) => {
                        setActiveKey1(key);
                    }}
                >
                    <TabBar.Item
                        itemKey="mall"
                        title="鲸选保险"
                        icon={<IconMall />}
                        greyIcon={<IconMallBlck />}
                    />
                    <TabBar.Item
                        itemKey="find"
                        title="发现"
                        icon={<IconFind />}
                        greyIcon={<IconFindBlack />}
                    />
                    <TabBar.Item
                        itemKey="my"
                        title="我的"
                        icon={<IconMy />}
                        greyIcon={<IconMyBlack />}
                    />
                </TabBar>
            </DemoBlock>
            <DemoBlock
                title="监听切换标签前的回调函数"
                padding=""
                className="demo-jing-tabbar"
            >
                <TabBar
                    activeKey={activeKey2}
                    beforeChange={(value: any) => {
                        if (value === 'user') {
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
                    onChange={(key: any) => {
                        setActiveKey2(key);
                    }}
                >
                    <TabBar.Item
                        itemKey="home"
                        title="主页"
                        icon={<IconHome />}
                    />
                    <TabBar.Item
                        itemKey="financial"
                        title="理财"
                        icon={<IconFinancial />}
                    />
                    <TabBar.Item
                        itemKey="user"
                        title="我的"
                        icon={<IconUser />}
                    />
                </TabBar>
            </DemoBlock>
        </>
    );
};
