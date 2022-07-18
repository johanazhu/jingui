import React, { useState } from 'react';
import { Modal, KeyBoard, Cell, Toast, hooks } from 'jing-ui';
import { DemoBlock } from 'demo';
import './index.scss';

export default () => {
    // const [state, setState] = hooks.useSetState({
    //     visible: false,
    //     value: '',
    // });
    const [visible, setVisible] = useState(false);
    return (
        <>
            <DemoBlock title="基本用法" padding="" className="demo-jing-modal">
                <Cell
                    title="组件调用"
                    isLink
                    onClick={() => setVisible(true)}
                />
                <Modal
                    visible={visible}
                    title="标题"
                    showCancelButton
                    onConfirm={() => {
                        Toast.info('点击确认按钮');
                        setVisible(false);
                    }}
                    onCancel={() => setVisible(false)}
                />
            </DemoBlock>
            {/* <DemoBlock
                title="自定义长度"
                padding=""
                className="demo-jing-password-input"
            >
                <PasswordInput length={4} onSubmit={onSubmit} />
            </DemoBlock> */}
        </>
    );
};
