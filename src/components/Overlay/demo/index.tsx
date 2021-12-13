import React, { useState } from 'react';
import { Overflow, Cell, Button } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);

    const toggle = () => setVisible(!visible);
    const toggle1 = () => setVisible1(!visible1);

    return (
        <>
            <DemoBlock title="基本用法" padding="">
                <Button onClick={toggle}>
                    显示遮罩层
                </Button>
                <Overflow visible={visible} onClick={toggle} />
            </DemoBlock>
            <DemoBlock title="嵌入内容" padding="">
                <Button onClick={toggle1}>
                    嵌入内容
                </Button>
                <Overflow visible={visible1} onClick={toggle1}>
                    <div className="wapper">
                        <div className="block"></div>
                    </div>
                </Overflow>
            </DemoBlock>
        </>
    );
};
