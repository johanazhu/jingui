import React from 'react';
import { Timeline, Panel } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    return (
        <>
            <DemoBlock title="基础操作">
                <Timeline percent="15%" color="#4666D8">
                    <Timeline.Item header="投资成功" footer="2021-07-12" />
                    <Timeline.Item header="起息日期" footer="2021-07-13" />
                    <Timeline.Item header="预计到期" footer="2022-07-12" />
                    <Timeline.Item
                        header="预计到账"
                        footer="1~5个工作日"
                        dashed
                    />
                </Timeline>
            </DemoBlock>
            <DemoBlock title="100%爆发流">
                <Timeline percent="100%">
                    <Timeline.Item header="投资成功" footer="2021-07-12" />
                    <Timeline.Item header="起息日期" footer="2021-07-13" />
                    <Timeline.Item header="预计到期" footer="2022-07-12" />
                    <Timeline.Item header="预计到账" footer="1~5个工作日" />
                </Timeline>
            </DemoBlock>
        </>
    );
};
