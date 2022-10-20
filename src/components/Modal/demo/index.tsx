import React, { useState } from 'react';
import { Modal, KeyBoard, Cell, Toast, hooks } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [state, setState] = hooks.useSetState({
        v1: false,
        v2: false,
        v3: false,
        // v4: false,
        // v5: false,
        // v6: false,
        // v7: false,
    });

    return (
        <>
            <DemoBlock title="基本用法" padding="" className="demo-jing-modal">
                <Cell
                    title="弹窗提示"
                    isLink
                    onClick={() => {
                        setState({ v1: true });
                    }}
                />
                <Cell
                    title="弹窗提示（无标题）"
                    isLink
                    onClick={() => setState({ v2: true })}
                />
                <Cell
                    title="确认弹框"
                    isLink
                    onClick={() => setState({ v3: true })}
                />

                <Modal
                    visible={state.v1}
                    title="标题"
                    message="代码是写出来给人看的，附带能在机器上运行"
                    showCancelButton
                    onConfirm={() => setState({ v1: false })}
                    onCancel={() => setState({ v1: false })}
                />
                <Modal
                    visible={state.v2}
                    message="代码是写出来给人看的，附带能在机器上运行"
                    onConfirm={() => setState({ v2: false })}
                />
                <Modal
                    visible={state.v3}
                    title="标题"
                    message="代码是写出来给人看的，附带能在机器上运行"
                    showCancelButton
                    onConfirm={() => setState({ v3: false })}
                    onCancel={() => setState({ v3: false })}
                />
            </DemoBlock>
            <DemoBlock
                title="Promise调用"
                padding=""
                className="demo-jing-modal"
            >
                <Cell
                    title="Promise调用Modal.alert "
                    isLink
                    onClick={async () => {
                        await Modal.alert({
                            title: '标题',
                            message: '代码是写出来给人看的，附带能在机器上运行',
                        });
                        console.log('confirm');
                    }}
                />
                <Cell
                    title="Promise调用Modal.confirm"
                    isLink
                    onClick={async () => {
                        try {
                            await Modal.confirm({
                                title: '标题',
                                message:
                                    '代码是写出来给人看的，附带能在机器上运行',
                            });
                            console.log('confirm');
                        } catch (error) {
                            console.log('cancel');
                        }
                    }}
                />
            </DemoBlock>
            <DemoBlock
                title="自定义内容"
                padding=""
                className="demo-jing-modal"
            >
                <Cell
                    title="自定义内容"
                    isLink
                    onClick={() => {
                        Modal.alert({
                            title: '标题',
                            closeable: true,
                            message: (
                                <div
                                    style={{
                                        textAlign: 'center',
                                        margin: '16px',
                                    }}
                                >
                                    自定义内容：代码是写出来给人看的，附带能在机器上运行
                                </div>
                            ),
                        });
                    }}
                />
            </DemoBlock>
            <DemoBlock
                title="关闭弹出框"
                padding=""
                className="demo-jing-modal"
            >
                <Cell
                    title="完全关闭后的回调"
                    isLink
                    onClick={() => {
                        Modal.alert({
                            title: '标题',
                            closeable: true,
                            message: '代码是写出来给人看的，附带能在机器上运行',
                            onClosed: () => console.log('onClosed'),
                        });
                    }}
                />
                <Cell
                    title="异步关闭"
                    isLink
                    onClick={() => {
                        Modal.show({
                            title: '标题',
                            closeable: true,
                            message: '弹窗内容',
                            showCancelButton: true,
                            onCancel: () => {
                                return new Promise((res) => {
                                    setTimeout(() => {
                                        res(true);
                                        Toast.success({
                                            message: '取消按钮一步',
                                        });
                                    }, 3000);
                                });
                            },
                            onConfirm: () => {
                                return new Promise((res) => {
                                    setTimeout(() => {
                                        res(true);
                                        Toast.success({
                                            message: '确认按钮异步',
                                        });
                                    }, 3000);
                                });
                            },
                        });
                    }}
                />
            </DemoBlock>
        </>
    );
};
