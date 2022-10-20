import React, { useState } from 'react';
import { Cell, Button } from '@jojobo/jing-ui';
import { CSSTransition } from 'react-transition-group';
import { DemoBlock } from 'demo';
import './index.scss';

export default () => {
    const [show, setShow] = useState(false);
    const [transition, setTransition] = useState('');

    const animate = (transitionName: string) => {
        setShow(true);
        setTransition(transitionName);

        setTimeout(() => {
            setShow(false);
        }, 500);
    };

    return (
        <>
            <DemoBlock
                title="文字省略"
                padding=""
                className="demo-style"
                background=""
            >
                <div className="jing-ellipsis">
                    这是一段最多显示一行的文字，多余的内容会被省略
                </div>
                <div className="jing-multi-ellipsis--l2">
                    这是一段最多显示两行的文字，多余的内容会被省略多余的内容会被省略多余的内容会被省略多余的内容会被省略
                </div>
                <div className="jing-multi-ellipsis--l3">
                    这是一段最多显示两行的文字，多余的内容会被省略多余的内容会被省略多余的内容会被省略多余的内容会被省略多余的内容会被省略多余的内容会被省略
                </div>
            </DemoBlock>
            <DemoBlock title="1px 边框" padding="" className="demo-style">
                <div className="jing-hairline--top"></div>
            </DemoBlock>
            <DemoBlock title="动画" padding="" className="demo-style">
                <Cell
                    isLink
                    title="Fade"
                    onClick={() => animate('jing-fade')}
                />
                <Cell
                    isLink
                    title="Slide Up"
                    onClick={() => animate('jing-slide-up')}
                />
                <Cell
                    isLink
                    title="Slide Down"
                    onClick={() => animate('jing-slide-down')}
                />
                <Cell
                    isLink
                    title="Slide Left"
                    onClick={() => animate('jing-slide-left')}
                />
                <Cell
                    isLink
                    title="Slide Right"
                    onClick={() => animate('jing-slide-right')}
                />
                <CSSTransition
                    in={show}
                    timeout={300}
                    classNames={transition}
                    unmountOnExit
                >
                    <div className="demo-animate-block" />
                </CSSTransition>
            </DemoBlock>
        </>
    );
};
