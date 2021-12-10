import { CSSProperties } from 'react';

/**
 * Mask 遮罩
 * @param {className} string                        // 自定义 class 名
 * @param {style} CSSProperties                     // 自定义样式
 * @param {visible} boolean                         // 是否显示
 * @param {type}  normal | transparent              // 遮罩层的类型，可选值 transparent, normal
 * @param {onClick} function                        // 点击事件后的回调
 **/
export interface MaskProps {
    className?: string;
    style?: CSSProperties;
    visible?: boolean;
    type?: 'normal' | 'transparent';
    onClick?: () => void;
}
