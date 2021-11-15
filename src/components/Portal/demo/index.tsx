import React, { useState } from 'react';
import { Portal, Button } from 'jing-ui';
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
                <Button type="primary" onClick={() => setIsShow(true)}>主色按钮</Button>
                {isShow && (
                    <Portal>
                        <div>我在父组件之外的地方出现</div>
                    </Portal>
                )}
            </DemoBlock>
        </>
    );
};
