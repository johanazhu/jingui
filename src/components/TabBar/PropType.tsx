import { ReactNode, FC, CSSProperties } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * TabBar.Item
 * @param {itemKey} number | string                     // 唯一标识，对应activeKey，不设置则默认取 index 索引
 * @param {pagePath} string                             // 页面路径
 * @param {text} string                                 // tab 上按钮文字
 * @param {icon} ReactNode                              // 图标
 * @param {selectedIcon} ReactNode                      // 选中时的图标
 * @param {selected} boolean                            // 是否选中
 * @param {onChange} function                           // 值变化时触发的回调函数
 **/
export interface TabBarItemProps extends BaseTypeProps {
    itemKey: number | string;
    pagePath: string,
    text: string;
    icon?: ReactNode;
    selectedIcon?: ReactNode;
    selected?: boolean;
    onChange?: (pagePath?: string) => void;
}

/**
 * TabBar
 * @param {activeKey} number | string                   // 当前选中项
 * @param {defaultActiveKey} number | string            // 初始选中项, 默认第一个选中
 * @param {fixed} boolean                               // 是否固定在底部
 * @param {safeAreaInsetBottom} boolean                 // 是否开启底部安全区适配，设置 fixed 时默认开启
 * @param {children} ReactNode                          // 组件中的内容
 * @param {onChange} function                           // 值变化时触发的回调函数
 * @param {beforeChange} function                       // 切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise
 **/
export interface TabBarProps extends BaseTypeProps {
    activeKey: number | string;
    defaultActiveKey?: number | string;
    fixed?: boolean;
    safeAreaInsetBottom?: boolean;
    children: ReactNode;
    onChange?: (value?: number | string, pagePath?: string) => void;
    beforeChange?: (
        value?: number | string,
    ) => boolean | Promise<unknown> | any;
}
