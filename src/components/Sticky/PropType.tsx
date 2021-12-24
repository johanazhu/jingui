import { ReactNode, CSSProperties } from 'react';
import { BaseTypeProps } from '@/utils';
/**
 * Sticky 粘性布局
 * @param {children} ReactNode                      // 组件中的内容
 **/
export interface StickyProps extends BaseTypeProps {
    children?: ReactNode;
}
