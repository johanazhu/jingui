import React from 'react';
import { Loading } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="加载类型" padding="" className="demo-jing-loading">
            <Loading />
            <Loading type="spinner" />
        </DemoBlock>
        <DemoBlock title="自定义颜色" padding="" className="demo-jing-loading">
            <Loading color="#4664D2" />
            <Loading type="spinner" color="#4664D2" />
            <Loading type="spinner" color="#FF6414" />
        </DemoBlock>
        <DemoBlock title="自定义大小" padding="" className="demo-jing-loading">
            <Loading size="24" />
            <Loading type="spinner" size="24" />
        </DemoBlock>
        <DemoBlock title="加载文案" padding="" className="demo-jing-loading">
            <Loading size="24">加载中..</Loading>
        </DemoBlock>
        <DemoBlock title="垂直排列" padding="" className="demo-jing-loading">
            <Loading size="24" vertical>
                加载中..
            </Loading>
        </DemoBlock>
        <DemoBlock
            title="自定义文案颜色"
            padding=""
            className="demo-jing-loading"
        >
            <Loading size="24" color="#4664D2" textColor="#4664D2" vertical>
                加载中..
            </Loading>
            <Loading size="24" vertical textColor="#FF6414">
                加载中..
            </Loading>
        </DemoBlock>
    </>
);
