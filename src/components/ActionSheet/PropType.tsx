import { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

export interface ActionSheetTabSourceProps {
    value: string;
    label: string;
}

export interface ActionSheetColumnRangeProps {
    value: string;
    label: string;
}

/**
 * 选择器的头部
 * @param {tabSource} Array
 * @param {rangeKey} string
 * @param {onClick} function
 **/
export interface ActionSheetHeaderProps extends BaseTypeProps {
    tabSource?: Array<ActionSheetTabSourceProps>;
    onClick?: (item: ActionSheetTabSourceProps) => void;
}

/**
 * 单个选择器
 * @param {columnSource} Array 单个选择器的数据源
 * @param {tabSource} Array<header的数据源>;
 * @param {rangeKey} string 单个选择器的key
 * @param {onClick} function 回调函数
 **/

export interface ActionSheetColumnProps extends BaseTypeProps {
    columnSource: Array<ActionSheetColumnRangeProps>;
    tabSource?: Array<ActionSheetTabSourceProps>;
    rangeKey?: string;
    onClick: (item: ActionSheetColumnRangeProps) => void;
}

/**
 * 从底部弹起的滚动选择器（高仿京东地址选择器）
 * @param {tabSource} Array 头部的数据源
 * @param {columnSource} Array 选择器的数据
 * @param {onHeaderItemClick} 头部中的点击回调
 * @param {onColumnItemClick} 选择器中的点击回调
 * @param {show} 是否显示
 * @param {title} 标题
 * @param {closeable} 是否显示关闭图标
 * @param {onCancel} 点击空白处回调
 */
export interface ActionSheetProps extends BaseTypeProps {
    tabSource?: Array<ActionSheetTabSourceProps>;
    columns: Array<ActionSheetColumnRangeProps>;
    onHeaderItemClick?: (item: ActionSheetTabSourceProps) => void;
    onColumnItemClick: (item: ActionSheetColumnRangeProps) => void;
    visible: boolean;
    title: string;
    closeable: boolean;
    onCancel?: () => void;
}
