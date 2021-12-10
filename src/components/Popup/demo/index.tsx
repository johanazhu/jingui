import React, { useState } from 'react';
import { Button } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [isShow, setIsShow] = useState(false);
    return (
        <>
            <DemoBlock
                title="类型"
                className="demo-jing-button"
                padding="10px 16px 0"
            >
                <Button type="primary" onClick={() => setIsShow(true)}>
                    主色按钮
                </Button>
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
