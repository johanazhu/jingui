import React from 'react';
import { Result, Panel } from 'jing-ui';

export default () => (
    <div className="jing-page jing-page-result">
        <Panel title="暂无数据">
            <Result status="empty" title="暂无数据" />
        </Panel>
        <Panel title="成功的结果">
            <Result status="success" />
        </Panel>
        <Panel title="失败的结果">
            <Result status="fail" />
        </Panel>
        <Panel title="取消的结果">
            <Result status="cancel" />
        </Panel>
        <Panel title="网络出错">
            <Result status="network" />
        </Panel>
        <Panel title="对的结果">
            <Result status="right" />
        </Panel>
        <Panel title="等待的结果">
            <Result status="waiting" />
        </Panel>
        <Panel title="倒计时的结果">
            <Result status="countdown" />
        </Panel>
        <Panel title="404">
            <Result status="404" title="访问失败" subTitle="404天下无敌" />
        </Panel>
        <Panel title="500">
            <Result status="500" title="访问失败" subTitle="500是你的福气" />
        </Panel>
    </div>
);
