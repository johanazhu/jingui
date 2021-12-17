import React, { useState } from 'react';
import { Cell, Toast } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <DemoBlock title="基本用法" padding="" className="demo-jing-popup">
                <Cell
                    title="文字提示"
                    isLink
                    onClick={() => {
                        setVisible(true);
                        // Toast('上不在高，有仙则灵')
                    }}
                />
                <Toast visible={visible} message="上不在高，有仙则灵" />
                <Cell
                    title="加载提示"
                    isLink
                    onClick={() => {
                        // Toast.loading({
                        //     message: '加载中...',
                        //     forbidClick: true,
                        // });
                    }}
                />
            </DemoBlock>
        </>
    );
};
{
    /* Toast('提示内容');
            Toast.info({message: '提示内容' }); */
}
