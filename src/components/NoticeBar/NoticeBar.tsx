import React, { useState, useEffect, useRef } from 'react';
import { IconClose, IconArrow, IconNotice } from '../Icon';

// 暂时用不到滚动和时间
export interface NoticeBarProps {
    duration?: number; // 动画时长
    delay?: number; // 动画延迟时间 (s)
    text: string; // 通知文本内容
    center?: boolean; // 是否居中
    hasLeft?: boolean; // 是否需要左边图标
    mode?: string; // 通告栏模式，可选值为 normal、closeable、link
    scrollable?: boolean; // 是否开启滚动播放，内容长度溢出时默认开启
    onClick?: () => void; // mode === link 时 整个NoticeBar 可以点击
    onClose?: () => void; // mode === closeable 点击关闭按钮关闭noticebar
}

const NoticeBar: React.FC<NoticeBarProps> = (props) => {
    const {
        text,
        delay,
        center,
        hasLeft,
        duration,
        scrollable,
        mode,
        onClick,
        onClose,
    } = props;

    let wrapRef = useRef<any>(null);
    let contentRef = useRef<any>(null);

    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
        let style = document.styleSheets[0];
        const wrapWidth = wrapRef.current ? wrapRef.current.offsetWidth : 0;
        const contentWidth = contentRef.current
            ? contentRef.current.offsetWidth
            : 0;

        if (scrollable || wrapWidth < contentWidth) {
            const proportion = contentWidth / wrapWidth;
            const persolProportion = (100 / (proportion + 1)) * proportion;
            style.insertRule(
                `
                @keyframes noticeBarPlay {
                    0%  {-webkit-transform:translate3d(0,0,0);}
                    ${persolProportion}% {-webkit-transform:translate3d(-100% ,0,0);}
                    ${
                        persolProportion + 0.01
                    }% {-webkit-transform:translate3d(${wrapWidth}px,0,0);}
                    100%  {-webkit-transform:translate3d(0,0,0);}
                }
            `,
            );
            const _duration = duration || (contentWidth / wrapWidth) * 15;
            contentRef.current.style.animationName = 'noticeBarPlay';
            contentRef.current.style.animationDuration = _duration + 's';
            contentRef.current.style.animationIterationCount = 'infinite';
            contentRef.current.style.animationTimingFunction = 'linear';
        }

        return () => {
            style.insertRule(`@keyframes noticeBarPlay {}`);
        };
    }, []);

    const onHandleClose = (e: any) => {
        e.stopPropagation();
        setIsShow(false);
        onClose && onClose();
    };

    const renderLeftIcon = () => {
        return (
            <div className="jing-notice-bar__left">
                <IconNotice color="orange" size="sm" />
            </div>
        );
    };

    const renderMarquee = () => {
        return (
            <div
                className="jing-notice-bar__wrap"
                style={{ justifyContent: center ? 'center' : 'flex-start' }}
                ref={wrapRef}
            >
                <div className="jing-notice-bar__wrap-content" ref={contentRef}>
                    {text}
                </div>
            </div>
        );
    };

    const renderRightIcon = () => {
        if (mode === 'closeable') {
            return (
                <div className="jing-notice-bar__close" onClick={onHandleClose}>
                    <IconClose color="orange" size="sm" />
                </div>
            );
        } else if (mode === 'link') {
            return (
                <div className="jing-notice-bar__link">
                    <IconArrow color="orange" size="sm" />
                </div>
            );
        } else {
            return <div className="jing-notice-bar__normal"></div>;
        }
    };

    return (
        <>
            {isShow ? (
                <div className="jing-notice-bar" onClick={onClick}>
                    {renderLeftIcon()}
                    {renderMarquee()}
                    {renderRightIcon()}
                </div>
            ) : null}
        </>
    );
};

NoticeBar.defaultProps = {
    scrollable: false,
    mode: 'normal',
};

export default React.memo(NoticeBar);
