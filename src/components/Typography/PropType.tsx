import { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * Typography 富文本
 * @param {innerHtml} CSSProperties                     // inner内容
 * @param {children} scaleSize                          // 组件中的内容
 **/
export interface TypographyProps extends BaseTypeProps {
    innerHtml?: string;
    children?: ReactNode;
}
