import React, { useState } from 'react';
import { Cell } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);

    const toggle = () => setVisible(!visible);

    return (
        <>
            <DemoBlock title="基本用法" padding="">
                {/* <IndexBar>
                        <IndexBar.Anchor index="A"/>
                        <Cell title="文本" />
                        <Cell title="文本" />
                        <Cell title="文本" />
                        <IndexBar.Anchor index="B"/>
                        <Cell title="文本" />
                        <Cell title="文本" />
                        <Cell title="文本" />
                </IndexBar> */}
            </DemoBlock>
        </>
    );
};
