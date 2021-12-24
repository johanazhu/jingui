import { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * Panel 面板
 * @param {title} ReactNode                             // 标题
 * @param {more} ReactNode                              // 更多渲染
 * @param {children} ReactNode                          // 组件中的内容
 **/
export interface PanelProps extends BaseTypeProps {
    className?: string;
    title?: ReactNode;
    more?: ReactNode;
    children?: ReactNode;
}
