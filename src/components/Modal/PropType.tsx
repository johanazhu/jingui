import { CSSProperties } from 'react';

/**
 * Modal 模态框
 * @param {className} string                        // 自定义 class 名
 * @param {style} CSSProperties                     // 自定义样式
 * @param {isTransparent} boolean                   // 是否透明
 * @param {onClick} function                        // 点击事件后的回调
 **/
export interface MaskProps {
    className?: string;
    style?: CSSProperties;
    isTransparent?: boolean;
    onClick?: () => void;
}
