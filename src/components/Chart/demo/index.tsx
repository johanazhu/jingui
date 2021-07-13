import React from 'react';
import { LineChart, ColumnChart, PieChart, Panel } from 'jing-ui';

const data = [{
    date: '2017-06-05',
    value: 116
}, {
    date: '2017-06-06',
    value: 129
}, {
    date: '2017-06-07',
    value: 135
}, {
    date: '2017-06-08',
    value: 86
}, {
    date: '2017-06-09',
    value: 73
}, {
    date: '2017-06-10',
    value: 85
}, {
    date: '2017-06-11',
    value: 73
}, {
    date: '2017-06-12',
    value: 68
}, {
    date: '2017-06-13',
    value: 92
}, {
    date: '2017-06-14',
    value: 130
}, {
    date: '2017-06-15',
    value: 245
}, {
    date: '2017-06-16',
    value: 139
}, {
    date: '2017-06-17',
    value: 115
}, {
    date: '2017-06-18',
    value: 111
}, {
    date: '2017-06-19',
    value: 309
}, {
    date: '2017-06-20',
    value: 206
}, {
    date: '2017-06-21',
    value: 137
}, {
    date: '2017-06-22',
    value: 128
}, {
    date: '2017-06-23',
    value: 85
}, {
    date: '2017-06-24',
    value: 94
}, {
    date: '2017-06-25',
    value: 71
}, {
    date: '2017-06-26',
    value: 106
}, {
    date: '2017-06-27',
    value: 84
}, {
    date: '2017-06-28',
    value: 93
}, {
    date: '2017-06-29',
    value: 85
}, {
    date: '2017-06-30',
    value: 73
}, {
    date: '2017-07-01',
    value: 83
}, {
    date: '2017-07-02',
    value: 125
}, {
    date: '2017-07-03',
    value: 107
}, {
    date: '2017-07-04',
    value: 82
}, {
    date: '2017-07-05',
    value: 44
}, {
    date: '2017-07-06',
    value: 72
}]


const data3 = [{
    name: '芳华',
    percent: 0.4,
    a: '1'
}, {
    name: '妖猫传',
    percent: 0.2,
    a: '1'
}, {
    name: '机器之血',
    percent: 0.18,
    a: '1'
}, {
    name: '心理罪',
    percent: 0.15,
    a: '1'
}, {
    name: '寻梦环游记',
    percent: 0.05,
    a: '1'
}, {
    name: '其他',
    percent: 0.02,
    a: '1'
}];

export default () => (
    <div className="jing-page jing-page-chart">
        <Panel title="LineChart">
            <LineChart
                width={200}
                height={300}
                data={data}
            />
        </Panel>
        <Panel title="ColumnChart">
            <ColumnChart
                width={300}
                height={300}
                data={[
                    {
                        time: 'Jan.',
                        tem: 1000,
                    },
                    {
                        time: 'Feb.',
                        tem: 2200,
                    },
                    {
                        time: 'Mar.',
                        tem: 2000,
                    },
                    {
                        time: 'Apr.',
                        tem: 2600,
                    },
                    {
                        time: 'May.',
                        tem: 2000,
                    },
                    {
                        time: 'Jun.',
                        tem: 2600,
                    },
                    {
                        time: 'Jul.',
                        tem: 2800,
                    },
                    {
                        time: 'Aug.',
                        tem: 2000,
                    },
                ]}
            />
        </Panel>
        <Panel title="PieChart">
            <PieChart
                width={200}
                height={200}
                data={data3}
            />
        </Panel>
    </div>
);
