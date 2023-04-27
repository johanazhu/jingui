import React, { useState, useRef } from 'react';
import { PopupMiddle, Cell } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';
// import popupImg from '../../../assets/popup.png';
import closeImg from '../../../assets/close.png';
import './index.scss';

const popupImg = 'https://s2.loli.net/2021/12/24/9NUnJXwYVPquDGf.png';

export default () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup1, setShowPopup1] = useState(false);

    return (
        <>
            <DemoBlock title="基本用法" padding="" className="demo-jing-popup">
                <Cell
                    title="弹中容"
                    isLink
                    onClick={() => setShowPopup(true)}
                />
                <PopupMiddle
                    className="popupmiddle-demo1"
                    visible={showPopup}
                    onClose={() => setShowPopup(false)}
                >
                    <div className="body">
                        <div className="header">社保养老账户余额查询指南</div>
                        <div className="content">
                            <div className="p1">微信查询</div>
                            <div className="p2">
                                打开微信—【我的】菜单—进入【服务】—【城市服务】—【社保】—【查社保】—查看养老金详情
                            </div>
                            <div className="p1">官网查询</div>
                            <div className="p2">通过您当地的社保官网查询</div>
                        </div>
                    </div>
                </PopupMiddle>
            </DemoBlock>
            <DemoBlock
                title="隐藏关闭按钮"
                padding=""
                className="demo-jing-popup"
            >
                <Cell
                    title="隐藏关闭按钮"
                    isLink
                    onClick={() => setShowPopup1(true)}
                />
                <PopupMiddle
                    className="popupmiddle-demo2"
                    visible={showPopup1}
                    hideClose
                    style={{ background: 'transparent' }}
                >
                    <img
                        className="popupmiddle-demo2-content"
                        src={popupImg}
                        alt=""
                    />
                    <img
                        className="popupmiddle-demo2-close"
                        src={closeImg}
                        alt=""
                        onClick={() => setShowPopup1(false)}
                    />
                </PopupMiddle>
            </DemoBlock>
        </>
    );
};
