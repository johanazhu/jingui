import React, { useState } from 'react';
import {
    TabBar,
    IconTabbarHome,
    IconTabbarFinancial,
    IconTabbarUser,
} from 'jing-ui';

import { DemoBlock } from 'demo';

export default () => {
    const [activeKey, setActiveKey] = useState('home');
    const [activeKey1, setActiveKey1] = useState('home');

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
                        icon={<IconTabbarHome />}
                    />
                    <TabBar.Item
                        itemKey="financial"
                        title="理财"
                        icon={<IconTabbarFinancial />}
                    />
                    <TabBar.Item
                        itemKey="user"
                        title="我的"
                        icon={<IconTabbarUser />}
                    />
                </TabBar>
            </DemoBlock>
            <DemoBlock
                title="监听切换标签前的回调函数"
                padding=""
                className="demo-jing-tabbar"
            >
                <TabBar
                    activeKey={activeKey1}
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
                        setActiveKey1(key);
                    }}
                >
                    <TabBar.Item
                        itemKey="home"
                        title="主页"
                        icon={<IconTabbarHome />}
                    />
                    <TabBar.Item
                        itemKey="financial"
                        title="理财"
                        icon={<IconTabbarFinancial />}
                    />
                    <TabBar.Item
                        itemKey="user"
                        title="我的"
                        icon={<IconTabbarUser />}
                    />
                </TabBar>
            </DemoBlock>
        </>
    );
};
