import React from 'react';
import { Panel } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="基本用法" padding="0" background="0">
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
            <Panel title="用户投保案例" />
            <Panel
                title="保险哪些事儿"
                more={
                    <a href="#" onClick={() => alert('click more')}>
                        更多
                    </a>
                }
            />
        </DemoBlock>
    </>
    // <div>
        // <Panel
        //     title="标题"
        //     more={
        //         <a href="#" onClick={() => alert('click more')}>
        //             更多
        //         </a>
        //     }
        // >
        //     <div className="box" style={{ padding: '1rem' }}>
        //         内容
        //     </div>
        // </Panel>
    //     <Panel title="用户投保案例" />
        // <Panel
        //     title="保险哪些事儿"
        //     more={
        //         <a href="#" onClick={() => alert('click more')}>
        //             更多
        //         </a>
        //     }
        // />
    // </div>
);