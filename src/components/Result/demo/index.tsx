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
        <DemoBlock title="二级标题使用">
            <Result
                status="success"
                title="我是标题"
                subTitle="人把自己置身于忙碌当中，有一种麻木的踏实，但丧失了真实。什么是真实？你看到什么、听到什么、做什么、和谁在一起，有一种从心灵深处满溢出来的不懊悔，也不羞耻的平和与喜悦。"
            >
                <Button.Group style={{ flex: 1 }}>
                    <Button plain style={{ color: `var(--primary-color)` }}>
                        查看活动
                    </Button>
                    <Button type="primary">保单管理</Button>
                </Button.Group>
            </Result>
        </DemoBlock>
        <DemoBlock title="对齐方式">
            <Result status="success" title="我是标题">
                默认居中对齐
            </Result>
            <Result status="success" title="我是标题" place="left">
                居左对齐
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
        <DemoBlock title="显示地址">
            <Result status="address" />
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
