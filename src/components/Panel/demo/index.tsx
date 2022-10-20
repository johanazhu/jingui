import React from 'react';
import { Panel } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="基本用法" background="">
            <Panel
                title="标题"
                more={
                    <a href="#" onClick={() => alert('click more')}>
                        更多
                    </a>
                }
            >
                <div className="box" style={{ padding: '1rem' }}>
                    内容
                </div>
            </Panel>
        </DemoBlock>
    </>
);
