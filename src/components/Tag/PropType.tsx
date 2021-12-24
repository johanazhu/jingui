import { ReactNode, MouseEventHandler } from 'react';
import { BaseTypeProps } from '@/utils';

export type TagType = 'default' | 'primary' | 'normal' | 'disabled';
export type TagSize = 'medium' | 'large';

/**
 * Tag 标签
 * @param {type} TagType                                // 类型
 * @param {size} string                                 // 颜色
 * @param {active} boolean                              // 是否选中
 * @param {children} ReactNode                          // 组件中的内容
 * @param {onClick} MouseEventHandler<HTMLElement>      // 点击后的回调事件
 **/
export interface TagProps extends BaseTypeProps {
    type?: TagType;
    size?: string;
    active?: boolean;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLElement>;
}
