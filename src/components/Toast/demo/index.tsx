import React, { useState } from 'react';
import { Cell, Toast } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    return (
        <>
            <DemoBlock title="基本用法" padding="" className="demo-jing-popup">
                <Cell
                    title="文字提示"
                    isLink
                    onClick={() => {
                        // Toast('上不在高，有仙则灵')
                    }}
                />
                <Toast />
                <Cell
                    title="加载   提示"
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
