import React, { useState, useRef } from 'react';
import { PopupMiddle, Cell } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';
import './index.scss';

export default () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <DemoBlock title="基本用法" padding="" className="demo-jing-popup">
                <Cell
                    title="弹中容"
                    isLink
                    onClick={() => setShowPopup(true)}
                />
                <PopupMiddle visible={showPopup} onClose={() => setShowPopup(false)}>
                    <div className="body">
                        <div className="header">社保养老账户余额查询指南</div>
                        <div className="content">
                            <div className="p1">
                                微信查询
                            </div>
                            <div className="p2">打开微信—【我的】菜单—进入【服务】—【城市服务】—【社保】—【查社保】—查看养老金详情</div>
                            <div className="p1">官网查询</div>
                            <div className="p2">通过您当地的社保官网查询</div>
                        </div>
                    </div>
                </PopupMiddle>
            </DemoBlock>
        </>
    );
};
