import { ReactNode, CSSProperties } from 'react';

/**
 * FloatingAd 悬浮广告
 * @param {style} CSSProperties                 // 样式
 * @param {chilren} ReactNode                   // 组件中的内容
 * @param {onClick} function                    // 点击后的回调函数
 **/
export interface FloatingAdProps {
    children?: ReactNode;
    style?: CSSProperties;
    onClick?: () => void;
}
