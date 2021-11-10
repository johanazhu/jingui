import { CSSProperties } from 'react';

export type scaleSize = 1 | 2 | 3 | 4;
/**
 * Mask 遮罩
 * @param {className} string                        // 自定义 class 名
 * @param {style} CSSProperties                     // 自定义样式
 * @param {scale} scaleSize                         // 分行行距，1-4
 **/
export interface SpaceProps {
    className?: string;
    style?: CSSProperties;
    scale?: scaleSize;
}
