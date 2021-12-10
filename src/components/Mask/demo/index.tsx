import React, { useState } from 'react';
import { Mask, Cell, Button } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [visible, setVisible] = useState(false);

    const toggle = () => setVisible(!visible);

    return (
        <>
            <DemoBlock title="基本用法" padding="">
                <Cell
                    title="打开关闭遮罩"
                    value={
                        <Button size="mini" onClick={toggle}>
                            开启
                        </Button>
                    }
                />
                <Mask visible={visible} onClick={toggle} />
            </DemoBlock>
        </>
    );
};
