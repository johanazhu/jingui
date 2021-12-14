import React, { useState } from 'react';
import { Popup, Button } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [visible, setVisible] = useState(false);

    const toggle = () => setVisible(!visible);

    return (
        <>
            <DemoBlock title="基本用法" padding="" className="demo-jing-popup">
                <Button type="primary" onClick={toggle}>
                    显示遮罩层
                </Button>
                <Popup visible={visible} onClose={toggle}>
                    内容
                </Popup>
            </DemoBlock>
        </>
    );
};

{
    /* <Popup
visible={visible.popTop}
direction="top"
mask={false}
afterClose={() => console.log('关闭')}
>
<div className="popup-box-top">更新成功</div>
</Popup> */
}
