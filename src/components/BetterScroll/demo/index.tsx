import React, { useState, useRef } from 'react';
import { Modal, Scroll, hooks } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';
import './index.scss';

export default () => {
    const [state, setState] = hooks.useSetState({
        v1: false,
        v2: false,
        v3: false,
        // v4: false,
        // v5: false,
        // v6: false,
        // v7: false,
    });

    const scrollRef = useRef<any>(null);
    const [items, setItems] = useState([]);

    const onPullingUp = () => {};

    const onPullingDown = () => {};

    return (
        <>
            <DemoBlock title="基本用法" padding="" className="demo-jing-scroll">
                <Scroll>
                    <ul>
                        {new Array(20).fill(1).map((item, index) => (
                            <li className="item">{index}</li>
                        ))}
                    </ul>
                </Scroll>
                {/* <Scroll
                    ref={scrollRef}
                    onPullingUp={onPullingUp}
                    onPullingDown={onPullingDown}
                    pullUpLoading={isShowPullUpLoading}
                    pullUpCb={handlePullUp}
                    pullingUpStatus={isStatusForPullingUp}
                >
                    <ul>
                        {items.map((item, index) => (
                            <li className="item">{index}</li>
                        ))}
                    </ul>
                </Scroll> */}
            </DemoBlock>
            <DemoBlock title="基本用法" padding="" className="demo-jing-scroll">
                <Scroll>
                    <ul>
                        {new Array(20).fill(1).map((item, index) => (
                            <li className="item">{index}</li>
                        ))}
                    </ul>
                </Scroll>
                {/* <Scroll
                    ref={scrollRef}
                    onPullingUp={onPullingUp}
                    onPullingDown={onPullingDown}
                    pullUpLoading={isShowPullUpLoading}
                    pullUpCb={handlePullUp}
                    pullingUpStatus={isStatusForPullingUp}
                >
                    <ul>
                        {items.map((item, index) => (
                            <li className="item">{index}</li>
                        ))}
                    </ul>
                </Scroll> */}
            </DemoBlock>
        </>
    );
};
