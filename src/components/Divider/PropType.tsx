import { ReactNode } from 'react';

/**
 * Divider 分割线
 * @param {dashed} boolean                      // 是否使用虚线
 * @param {hairline} boolean                    // 是否使用 0.5px 线
 * @param {contentPosition} string              // 内容所在位置，可选 left，center，right
 * @param {chilren}                             // 分割线中的文字
 **/
export interface DividerProps {
    dashed?: boolean;
    hairline?: boolean;
    contentPosition?: 'left' | 'center' | 'right';
    children?: ReactNode;
}
