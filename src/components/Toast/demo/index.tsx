import React from 'react';
import { Cell, Toast } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const onDynicUpdate = () => {
        let remain = 4;
        let timer: any;
        const update = Toast.info({
            message: `还剩 ${remain + 1} 秒`,
            duration: 5000,
            onClose: () => {
                clearInterval(timer);
            },
        });
        timer = setInterval(() => {
            update.config({ message: `还剩 ${remain--} 秒` });
        }, 1000);
    };
    return (
        <>
            <DemoBlock title="基本用法" padding="" className="demo-jing-popup">
                <Cell
                    title="文字提示"
                    isLink
                    onClick={() => {
                        Toast('上不在高，有仙则灵');
                    }}
                />
                <Cell
                    title="文字提示包裹过长"
                    isLink
                    onClick={() => {
                        Toast.info({
                            message:
                                '落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声断衡阳之浦。',
                            duration: 5000,
                        });
                    }}
                />
                <Cell
                    title="加载提示"
                    isLink
                    onClick={() => {
                        Toast.loading({
                            message: '加载中...',
                            forbidClick: true,
                        });
                    }}
                />
                <Cell
                    title="成功提示"
                    isLink
                    onClick={() => {
                        // Toast.success('成功文案');
                        Toast.success({
                            message: '成功文案',
                            duration: 100000,
                        });
                    }}
                />
                <Cell
                    title="失败提示"
                    isLink
                    onClick={() => {
                        Toast.fail('失败文案');
                    }}
                />
            </DemoBlock>
            <DemoBlock
                title="动态更新提示"
                padding=""
                className="demo-jing-popup"
            >
                <Cell title="动态更新提示" isLink onClick={onDynicUpdate} />
            </DemoBlock>
            <DemoBlock
                title="清除"
                padding=""
                className="demo-jing-popup"
            >
                <Cell title="先出来" isLink onClick={() => {
                    Toast('上不在高，有仙则灵');
                }} />
                <Cell title="清除" isLink onClick={() => {
                    Toast.clear()
                }} />
            </DemoBlock>
        </>
    );
};
