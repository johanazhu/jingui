import { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * Divider 分割线
 * @param {dashed} boolean                      // 是否使用虚线
 * @param {hairline} boolean                    // 是否使用 0.5px 线
 * @param {contentPosition} string              // 内容所在位置，可选 left，center，right
 * @param {chilren} ReactNode                   // 分割线中的文字
 **/
export interface DividerProps extends BaseTypeProps {
    dashed?: boolean;
    hairline?: boolean;
    contentPosition?: 'left' | 'center' | 'right';
    children?: ReactNode;
}
