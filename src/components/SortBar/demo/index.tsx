import React, { useState, useEffect } from 'react';
import { SortBar } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [activeKey, setActiveKey] = useState('annualized');

    return (
        <>
            <DemoBlock title="基本用法" padding="">
                <SortBar
                    activeKey={activeKey}
                    onChange={(key: string, status: string) => {
                        setActiveKey(key);
                    }}
                    onClick={() => {
                        console.log('点击筛选');
                    }}
                >
                    <SortBar.Item title="年化" itemKey="annualized" />
                    <SortBar.Item title="期限" itemKey="term" />
                    <SortBar.Item title="价格" itemKey="price" />
                </SortBar>
            </DemoBlock>
            <DemoBlock title="类型-禅模式（固定宽度）" padding="">
                <SortBar
                    activeKey={activeKey}
                    onChange={(key: string, status: string) => {
                        setActiveKey(key);
                    }}
                    type="chan"
                    onClick={() => {
                        console.log('点击筛选');
                    }}
                >
                    <SortBar.Item title="结束时间" itemKey="time" />
                    <SortBar.Item title="保费金额" itemKey="price1" />
                </SortBar>
            </DemoBlock>
        </>
    );
};
