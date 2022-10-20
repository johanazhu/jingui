import React from 'react';
import { Result, Button } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="基本用法">
            <Result status="success" title="我是标题" place="left">
                我是描述，左对齐，可以很多字，会自动换行，这里是结果描述，可以很多字，会自动换行，这里是结果描述，可以很多字，会自动换行，这里是结果描述，可以很多字，会自动换行
            </Result>
        </DemoBlock>
        <DemoBlock title="对齐方式">
            <Result status="success" title="我是标题" place="left">
                默认左对齐
            </Result>
            <Result status="success" title="我是标题" place="center">
                居中对齐
            </Result>
            <Result status="success" title="我是标题" place="right">
                居右对齐
            </Result>
        </DemoBlock>
        <DemoBlock title="结果类型-暂无数据">
            <Result status="empty" />
        </DemoBlock>
        <DemoBlock title="结果类型-成功">
            <Result status="success" />
        </DemoBlock>
        <DemoBlock title="结果类型-失败">
            <Result status="fail" />
        </DemoBlock>
        <DemoBlock title="结果类型-取消">
            <Result status="cancel" />
        </DemoBlock>
        <DemoBlock title="结果类型-网络出错">
            <Result status="network" />
        </DemoBlock>
        <DemoBlock title="结果类型-对的结果">
            <Result status="right" />
        </DemoBlock>
        <DemoBlock title="结果类型-等待的结果">
            <Result status="waiting" />
        </DemoBlock>
        <DemoBlock title="结果类型-倒计时的结果">
            <Result status="countdown" />
        </DemoBlock>
        <DemoBlock title="404">
            <Result status="404" title="访问失败" place="center">
                404天下无敌
            </Result>
        </DemoBlock>
        <DemoBlock title="500">
            <Result status="500" title="访问失败" place="center">
                500是你的福气
            </Result>
        </DemoBlock>
    </>
);
