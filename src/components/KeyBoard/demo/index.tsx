import React, { useState, useRef } from 'react';
import { Cell, Input, KeyBoard, Toast, hooks } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';
import { customLetterLayout, customNumberLayout } from './data';
import './index.scss';

export default () => {
    const [layoutName, setLayoutName] = useState('default');
    const [state, setState] = hooks.useSetState({
        v1: false,
        v2: false,
        v3: false,
        v4: false,
        v5: false,
        v6: false,
        v7: false,
    });
    const [state1, setState1] = hooks.useSetState({
        visible: false,
        value: '',
    });

    const [isActive, setIsActive] = useState(false);

    const handleShift = () => {
        console.log('是 shift', layoutName);
        const shiftToggle = layoutName === 'default' ? 'shift' : 'default';
        setLayoutName(shiftToggle);
    };

    const handleSymbol = () => {
        console.log('是 另一种模式');
        const shiftToggle = layoutName === 'default' ? 'symbol' : 'default';
        setLayoutName(shiftToggle);
    };

    const onHandleClose = () => {
        Toast('关闭');
    };

    const onHandlePress = (text: React.ReactNode, type: string) => {
        console.log('点的是什么', text, type);
        if (typeof text === 'string') {
            Toast(text);
        }
    };

    const onHandleDelete = () => {
        Toast('删除');
    };

    return (
        <>
            <DemoBlock
                title="基本用法"
                padding=""
                className="demo-jing-keyboard"
            >
                <Cell
                    title="弹出默认键盘"
                    isLink
                    onClick={() => {
                        setState({ v1: true });
                    }}
                />
                <Cell
                    title="弹出数字键盘"
                    isLink
                    onClick={() => {
                        setState({ v2: true });
                    }}
                />
                <Cell
                    title="弹出数额键盘"
                    isLink
                    onClick={() => {
                        setState({ v3: true });
                    }}
                />
                <Cell
                    title="弹出身份证号键盘"
                    isLink
                    onClick={() => {
                        setState({ v4: true });
                    }}
                />
                <Cell
                    title="弹出带标题的键盘"
                    isLink
                    onClick={() => {
                        setState({ v5: true });
                    }}
                />
                <Cell
                    title="自定义字母键盘布局"
                    isLink
                    onClick={() => {
                        setState({ v6: true });
                    }}
                />
                <Cell
                    title="自定义数字键盘布局"
                    isLink
                    onClick={() => {
                        setState({ v7: true });
                    }}
                />
                <Input.KeyBoard
                    value={state1.value}
                    placeholder="双向绑定"
                    active={isActive}
                    onHandleFocus={() => {
                        setIsActive(true);
                        setState1({ visible: true });
                    }}
                    onClearValue={() => {
                        setState1({ value: '' });
                    }}
                    maxLength={20}
                />
                <KeyBoard
                    visible={state.v1}
                    layoutName={layoutName}
                    onBlur={() => {
                        setState({ v1: false });
                    }}
                    onClose={onHandleClose}
                    onPress={onHandlePress}
                    onDelete={onHandleDelete}
                />
                <KeyBoard
                    visible={state.v2}
                    theme="number"
                    onBlur={() => {
                        setState({ v2: false });
                    }}
                    onClose={onHandleClose}
                    onPress={onHandlePress}
                    onDelete={onHandleDelete}
                />
                <KeyBoard
                    visible={state.v3}
                    theme="price"
                    onBlur={() => {
                        setState({ v3: false });
                    }}
                    onClose={onHandleClose}
                    onPress={onHandlePress}
                    onDelete={onHandleDelete}
                />
                <KeyBoard
                    visible={state.v4}
                    theme="id"
                    onBlur={() => {
                        setState({ v4: false });
                    }}
                    onClose={onHandleClose}
                    onPress={onHandlePress}
                    onDelete={onHandleDelete}
                />
                <KeyBoard
                    visible={state.v5}
                    title="弹出带标题的键盘"
                    onBlur={() => {
                        setState({ v5: false });
                    }}
                    onClose={onHandleClose}
                    onPress={onHandlePress}
                    onDelete={onHandleDelete}
                />
                <KeyBoard
                    visible={state.v6}
                    title="自定义字母键盘布局"
                    theme="custom-letter"
                    layout={customLetterLayout}
                    onBlur={() => {
                        setState({ v6: false });
                    }}
                    onClose={onHandleClose}
                    onPress={onHandlePress}
                    onDelete={onHandleDelete}
                />
                <KeyBoard
                    visible={state.v7}
                    title="自定义数字键盘布局"
                    theme="custom-number"
                    layout={customNumberLayout}
                    onBlur={() => {
                        setState({ v7: false });
                    }}
                    onClose={onHandleClose}
                    onPress={onHandlePress}
                    onDelete={onHandleDelete}
                />
                <KeyBoard
                    value={state1.value}
                    visible={state1.visible}
                    maxLength={10}
                    layoutName={layoutName}
                    onBlur={() => {
                        setState1({ visible: false });
                    }}
                    onInput={(value: string) => {
                        setState1({ value });
                    }}
                    onSpaceCb={() => {
                        Toast('空格不可用');
                    }}
                    onDoneCb={() => {
                        Toast('点击完成');
                    }}
                />
            </DemoBlock>
        </>
    );
};
