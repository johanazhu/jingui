import React, { useState, useRef } from 'react';
import { Popup, Cell, Input, FakerKeyboard, Toast } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [showPopup, setShowPopup] = useState(false);
    const [layoutName, setLayoutName] = useState('default');
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [value1, setValue1] = useState('');
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

    return (
        <>
            <DemoBlock title="基本用法" padding="" className="demo-jing-popup">
                <Cell
                    title="展出默认键盘"
                    isLink
                    onTouchStart={(event: any) => {
                        event.stopPropagation();
                        setShowPopup2(false);
                        setShowPopup1(true);
                    }}
                />
                <Cell
                    title="展出默认键盘2"
                    isLink
                    onTouchStart={(event: any) => {
                        event.stopPropagation();
                        setShowPopup1(false);
                        setShowPopup2(true);
                    }}
                />
                <Input.Group>
                    <Input.KeyBoard
                        value={value1}
                        placeholder="点击输入"
                        active={isActive}
                        onHandleFocus={() => {
                            setIsActive(true);
                            setShowPopup3(!showPopup3);
                        }}
                        onClearValue={() => {
                            setValue1('');
                        }}
                        maxLength={20}
                    />
                </Input.Group>
                <FakerKeyboard
                    visible={showPopup1}
                    layoutName={layoutName}
                    onHandleBlur={() => {
                        setShowPopup1(false);
                    }}
                    onHandleClose={() => {
                        console.log('关闭');
                    }}
                    onHandlePress={(text: React.ReactNode, type: string) => {
                        console.log('点的是什么', text, 'type', type);
                        if (typeof text === 'string') {
                            Toast(text);
                        }
                    }}
                    onHandleDelete={() => {
                        Toast('删除');
                    }}
                />
                <FakerKeyboard
                    visible={showPopup2}
                    layoutName="shift"
                    onHandleBlur={() => {
                        setShowPopup2(false);
                    }}
                    onHandleClose={() => {
                        console.log('关闭');
                    }}
                    onHandlePress={(text: React.ReactNode, type: string) => {
                        console.log('点的是什么', text, type);
                        if (typeof text === 'string') {
                            Toast(text);
                        }
                    }}
                    onHandleDelete={() => {
                        Toast('删除');
                    }}
                />
                <FakerKeyboard
                    value={value1}
                    visible={showPopup3}
                    maxLength={10}
                    layoutName={layoutName}
                    onHandleBlur={() => {
                        setShowPopup3(false);
                    }}
                    onHandleClose={() => setShowPopup(false)}
                    onHandleValue={(value: string) => {
                        setValue1(value);
                    }}
                    onHandleSpaceCb={() => {
                        Toast('空格不可用');
                    }}
                    onHandleDoneCb={() => {
                        Toast('点击完成');
                    }}
                />
            </DemoBlock>
            {/* <DemoBlock title="键盘类型" padding="" className="demo-jing-popup">
                <Cell
                    title="字母键盘"
                    isLink
                    onClick={() => setShowPopup1(true)}
                />
                <Cell
                    title="数字键盘"
                    isLink
                    onClick={() => setShowPopup2(true)}
                />
                <Cell
                    title="价格键盘"
                    isLink
                    onClick={() => setShowPopup2(true)}
                />
                <Cell
                    title="证件键盘"
                    isLink
                    onClick={() => setShowPopup2(true)}
                />
            </DemoBlock>
            <DemoBlock title="自定义键盘" padding="" className="demo-jing-popup">
                <Cell
                    title="看我的厉害"
                    isLink
                    onClick={() => setShowPopup1(true)}
                />
            </DemoBlock> */}
        </>
    );
};
