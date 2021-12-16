import React, { useState, useRef } from 'react';
import { Popup, Cell } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [showPopup4, setShowPopup4] = useState(false);
    const [showPopup5, setShowPopup5] = useState(false);
    const popupRef = useRef();

    return (
        <>
            <DemoBlock title="基本用法" padding="" className="demo-jing-popup">
                <Cell
                    title="展出弹出层"
                    isLink
                    onClick={() => setShowPopup(true)}
                />
                <Popup visible={showPopup} onClose={() => setShowPopup(false)}>
                    <div style={{ padding: '30px 50px' }}>内容</div>
                </Popup>
            </DemoBlock>
            <DemoBlock title="弹出位置" padding="" className="demo-jing-popup">
                <Cell
                    title="顶部弹出"
                    isLink
                    onClick={() => setShowPopup1(true)}
                />
                <Cell
                    title="底部弹出"
                    isLink
                    onClick={() => setShowPopup2(true)}
                />
                <Cell
                    title="左侧弹出"
                    isLink
                    onClick={() => setShowPopup3(true)}
                />
                <Cell
                    title="右侧弹出"
                    isLink
                    onClick={() => setShowPopup4(true)}
                />
                <Popup
                    visible={showPopup1}
                    position="top"
                    style={{ height: '30%' }}
                    onClose={() => setShowPopup1(false)}
                />
                <Popup
                    visible={showPopup2}
                    position="bottom"
                    style={{ height: '30%' }}
                    onClose={() => setShowPopup2(false)}
                />
                <Popup
                    visible={showPopup3}
                    position="left"
                    style={{ width: '30%', height: '100%' }}
                    onClose={() => setShowPopup3(false)}
                />
                <Popup
                    visible={showPopup4}
                    position="right"
                    style={{ width: '30%', height: '100%' }}
                    onClose={() => setShowPopup4(false)}
                />
            </DemoBlock>
            <DemoBlock
                title="指定挂载节点"
                padding=""
                className="demo-jing-popup"
            >
                <Cell
                    title="指定挂载节点"
                    isLink
                    onClick={() => setShowPopup5(true)}
                />
                <div ref={(ref) => popupRef}>去F12中看 dom 结构</div>
                <Popup
                    visible={showPopup5}
                    mountContainer={popupRef.current}
                    onClose={() => setShowPopup5(false)}
                >
                    <div style={{ padding: '30px 50px' }}>内容</div>
                </Popup>
            </DemoBlock>
        </>
    );
};
