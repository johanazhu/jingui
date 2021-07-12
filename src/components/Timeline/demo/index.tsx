import React from 'react';
import { Timeline, Panel } from 'jing-ui';

export default () => {
    return (
        <div className="jing-page jing-page-timeline">
            <Panel title="基本操作">
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
            </Panel>
            <Panel title="基本操作2">
                <Timeline percent="15%" color="#4666D8" hundred={true}>
                    <Timeline.Item header="投资成功" footer="2021-07-12" />
                    <Timeline.Item header="起息日期" footer="2021-07-13" />
                    <Timeline.Item header="预计到期" footer="2022-07-12" />
                    <Timeline.Item
                        header="预计到账"
                        footer="1~5个工作日"
                        dashed
                    />
                </Timeline>
            </Panel>
        </div>
    );
};
