export const normalColumns = [
    '杭州',
    '宁波',
    '温州',
    '绍兴',
    '湖州',
    '嘉兴',
    '金华',
];

export const disabledColumns = [
    { text: '杭州', disabled: true },
    { text: '宁波' },
    { text: '温州' },
];

export const multipleColumns = [
    // 第一列
    {
        values: ['周一', '周二', '周三', '周四', '周五'],
        defaultIndex: 2,
    },
    // 第二列
    {
        values: ['上午', '下午', '晚上'],
        defaultIndex: 1,
    },
];

export const cascadeColumns = [
    {
        text: '浙江',
        children: [
            {
                text: '杭州',
                children: [{ text: '西湖区' }, { text: '余杭区' }],
            },
            {
                text: '温州',
                children: [{ text: '鹿城区' }, { text: '瓯海区' }],
            },
        ],
    },
    {
        text: '福建',
        children: [
            {
                text: '福州',
                children: [{ text: '鼓楼区' }, { text: '台江区' }],
            },
            {
                text: '厦门',
                children: [{ text: '思明区' }, { text: '海沧区' }],
            },
        ],
    },
];
