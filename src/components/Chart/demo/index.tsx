import React from 'react';
import { FChart, Panel } from 'jing-ui';

export default () => (
    <div className="jing-page jing-page-buttongroup">
        <Panel title="自定义布局">
            <FChart
                id="jqb-f2chart"
                width={700}
                height={300}
                option={[{
                    time: 'Jan.',
                    tem: 1000
                }, {
                    time: 'Feb.',
                    tem: 2200
                }, {
                    time: 'Mar.',
                    tem: 2000
                }, {
                    time: 'Apr.',
                    tem: 2600
                }, {
                    time: 'May.',
                    tem: 2000
                }, {
                    time: 'Jun.',
                    tem: 2600
                }, {
                    time: 'Jul.',
                    tem: 2800
                }, {
                    time: 'Aug.',
                    tem: 2000
                }]}
                onClick={(data: any) => {
                    console.log('test', data[0])
                }}
            />
        </Panel>
    </div>
);
