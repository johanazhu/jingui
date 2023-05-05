import React, { useState, useRef } from 'react';
import { Popup, Cell } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [showPopup4, setShowPopup4] = useState(false);
    const [showPopup5, setShowPopup5] = useState(false);
    const [showPopup6, setShowPopup6] = useState(false);
    const [showPopup7, setShowPopup7] = useState(false);
    const [showPopup8, setShowPopup8] = useState(false);
    const [showPopup9, setShowPopup9] = useState(false);
    const [showPopup10, setShowPopup10] = useState(false);
    const [showPopup11, setShowPopup11] = useState(false);
    const [showPopup12, setShowPopup12] = useState(false);
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
                    // style={{ height: '30%' }}
                    onClose={() => setShowPopup2(false)}
                >
                    <div style={{ height: '100px', background: '#fff' }}>
                        内容2
                    </div>
                </Popup>
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
                <div
                    ref={(ref) => popupRef}
                    style={{ fontSize: '12px', padding: '16px' }}
                >
                    去F12中看 dom 结构
                </div>
                <Popup
                    visible={showPopup5}
                    mountContainer={popupRef.current}
                    onClose={() => setShowPopup5(false)}
                >
                    <div style={{ padding: '30px 50px' }}>内容</div>
                </Popup>
            </DemoBlock>
            <DemoBlock title="事件处理" padding="" className="demo-jing-popup">
                <Cell
                    title="事件处理"
                    isLink
                    onClick={() => setShowPopup6(true)}
                />
                <Popup
                    visible={showPopup6}
                    mountContainer={popupRef.current}
                    onOpen={() => console.log('打开时')}
                    onOpened={() => console.log('打开完成')}
                    onClose={() => {
                        setShowPopup6(false);
                        console.log('关闭时');
                    }}
                    onClosed={() => console.log('关闭完成')}
                    onClickOverlay={() => console.log('点击遮罩关闭弹出层')}
                    onClick={() => console.log('点击我本人')}
                >
                    <div style={{ padding: '30px 50px' }}>F12看console</div>
                </Popup>
            </DemoBlock>
            <DemoBlock title="允许滑动" padding="" className="demo-jing-popup">
                <Cell
                    title="允许滑动"
                    isLink
                    onClick={() => setShowPopup7(true)}
                />
                <Popup
                    visible={showPopup7}
                    lockScroll={false}
                    mountContainer={popupRef.current}
                    onClose={() => setShowPopup7(false)}
                >
                    <div style={{ padding: '30px 50px' }}>内容</div>
                </Popup>
            </DemoBlock>
            <DemoBlock title="关闭图标" padding="" className="demo-jing-popup">
                <Cell
                    title="关闭图标"
                    isLink
                    onClick={() => setShowPopup8(true)}
                />
                <Cell
                    title="图标位置-左上"
                    isLink
                    onClick={() => setShowPopup9(true)}
                />
                <Cell
                    title="图标位置-右下"
                    isLink
                    onClick={() => setShowPopup10(true)}
                />
                <Popup
                    visible={showPopup8}
                    closeable
                    style={{ height: '30%' }}
                    position="bottom"
                    onClose={() => setShowPopup8(false)}
                />
                <Popup
                    visible={showPopup9}
                    closeable
                    style={{ height: '30%' }}
                    position="bottom"
                    closeIconPosition="top-left"
                    onClose={() => setShowPopup9(false)}
                />
                <Popup
                    visible={showPopup10}
                    closeable
                    style={{ height: '30%' }}
                    position="bottom"
                    closeIconPosition="bottom-right"
                    onClose={() => setShowPopup10(false)}
                />
            </DemoBlock>
            <DemoBlock title="圆角弹窗" padding="" className="demo-jing-popup">
                <Cell
                    title="圆角弹窗"
                    isLink
                    onClick={() => setShowPopup11(true)}
                />
                <Popup
                    visible={showPopup11}
                    closeable
                    style={{ height: '30%' }}
                    position="bottom"
                    round
                    onClose={() => setShowPopup11(false)}
                ></Popup>
            </DemoBlock>
            <DemoBlock title="标题弹窗" padding="" className="demo-jing-popup">
                <Cell
                    title="标题弹窗"
                    isLink
                    onClick={() => setShowPopup12(true)}
                />
                <Popup
                    visible={showPopup12}
                    closeable
                    style={{ height: '60%' }}
                    position="bottom"
                    round
                    title="我是标题之王"
                    onClose={() => setShowPopup12(false)}
                ></Popup>
            </DemoBlock>
        </>
    );
};
