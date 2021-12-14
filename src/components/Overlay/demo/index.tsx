import React, { useState } from 'react';
import { Overlay, Cell, Button } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);

    const toggle = () => setVisible(!visible);
    const toggle1 = () => setVisible1(!visible1);
    const toggle2 = () => setVisible2(!visible2);

    return (
        <>
            <DemoBlock
                title="基本用法"
                padding=""
                className="demo-jing-overlay"
            >
                <Button type="primary" onClick={toggle}>
                    显示遮罩层
                </Button>
                <Overlay visible={visible} onClick={toggle} />
            </DemoBlock>
            <DemoBlock
                title="嵌入内容"
                padding=""
                className="demo-jing-overlay"
            >
                <Button type="primary" onClick={toggle1}>
                    嵌入内容
                </Button>
                <Overlay visible={visible1} onClick={toggle1}>
                    <div className="wrapper">
                        <div className="block"></div>
                    </div>
                </Overlay>
            </DemoBlock>
            <DemoBlock
                title="透明背景"
                padding=""
                className="demo-jing-overlay"
            >
                <Button type="primary" onClick={toggle2}>
                    嵌入内容
                </Button>
                <Overlay
                    type="transparent"
                    visible={visible2}
                    onClick={toggle2}
                />
            </DemoBlock>
        </>
    );
};
