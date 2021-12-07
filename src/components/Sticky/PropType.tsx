import { ReactNode, CSSProperties } from 'react';

/**
 * Sticky 粘性布局
 * @param {className} string                        // 自定义 class 名
 * @param {style} CSSProperties                     // 样式
 * @param {children} ReactNode                      // 组件中的内容
 **/
export interface StickyProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
