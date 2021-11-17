import React from 'react';
import { Tabs, Tab } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="基础用法">
            {/* <van-tabs v-model="active">
                <van-tab title="标签 1">内容 1</van-tab>
                <van-tab title="标签 2">内容 2</van-tab>
                <van-tab title="标签 3">内容 3</van-tab>
                <van-tab title="标签 4">内容 4</van-tab>
            </van-tabs> */}
            {/* <Tab
                ref={tabRef}
                data={tagGroupProductList}
                sticky={true}
                selected={selectedTab}
                onChange={onHandleChangeTab}
                onClick={onClickToBtn}
            >
                <Tab.Item title="标签 1">内容 1</Tab.Item>
                <Tab.Item title="标签 2">内容 2</Tab.Item>
                <Tab.Item title="标签 3">内容 3</Tab.Item>
                <Tab.Item title="标签 4">内容 4</Tab.Item>
            </Tab> */}
        </DemoBlock>
    </>
);
