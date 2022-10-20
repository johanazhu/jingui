import { FC, ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * SortBarItem
 * @param {title} string                                // 标题
 * @param {itemKey} string                              // 唯一标识，对应activeKey
 * @param {selected} boolean                            // 是否选中
 * @param {onClick} (status: string) => void;           // 点击后的回调，返回 点击的状态
 **/
export interface SortBarItemProps {
    title?: ReactNode;
    itemKey: string;
    selected?: boolean;
    onClick?: (status: string) => void;
}

/**
 * SortBarFilter
 * @param {title} string                                // 标题
 * @param {onClick} function                            // 点击筛选后的回调
 **/
export interface SortBarFilterProps {
    title?: string;
    onClick?: () => void;
}

/**
 * SortBar
 * @param {activeKey} string                            // 当前选中项
 * @param {type} string                                 // 模式，默认模式等分划分，此外 "chan"(禅模式)
 * @param {title} string                                // 标题
 * @param {sticky} boolean                              // 是否使用粘性定位布局
 * @param {children} ReactNode                          // 组件中的内容
 * @param {onClick} () => void                          // 点击筛选后的回调
 * @param {onChange} (key: string, status: string) => void; // 点击后的回调，返回 选中项和点击的状态
 **/
export interface SortBarProps extends BaseTypeProps {
    activeKey: number | string;
    type?: string;
    title?: string;
    sticky?: boolean;
    children: ReactNode;
    onClick?: () => void;
    onChange?: (key: string, status: string) => void;
}
