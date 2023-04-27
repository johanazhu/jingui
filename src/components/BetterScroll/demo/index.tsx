import React, { useState, useRef } from 'react';
import { Modal, Scroll, hooks } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';
import './index.scss';

export default () => {
    const scrollRef = useRef<any>(null);
    const [items, setItems] = useState(new Array(30).fill(1));
    const [isShowPullUpLoading, setIsShowPullUpLoading] = useState(true);

    // 模拟请求接口
    const fetchData = async () => {
        await setTimeout(() => {
            setItems([...items, ...new Array(30).fill(1)]);
        }, 3000);
    };

    // 上拉加载
    const handlePullUp = async () => {
        await fetchData();
    };

    return (
        <>
            <DemoBlock title="基本用法" padding="" className="demo-jing-scroll">
                <Scroll
                    ref={scrollRef}
                    top={60}
                    bottom={60}
                    pullUpLoading={isShowPullUpLoading}
                    pullUpCb={handlePullUp}
                >
                    <ul style={{ textAlign: 'center' }}>
                        {items.map((item, index) => (
                            <li className="item" key={index}>
                                {index}
                            </li>
                        ))}
                    </ul>
                </Scroll>
            </DemoBlock>
        </>
    );
};
