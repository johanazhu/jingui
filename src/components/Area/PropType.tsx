import { ReactNode } from 'react';

/**
 * 单个选择器
 * @param {columnSource} Array 单个选择器的数据源
 * @param {tabSource} Array<header的数据源>;
 * @param {rangeKey} string 单个选择器的key
 * @param {onClick} function 回调函数
 **/

export interface AreaColumn {
    columnSource: Array<AreaColumnRangeProps>;
    tabSource?: Array<AreaTabSourceProps>;
    rangeKey?: string;
    onClick: (item: AreaColumnRangeProps) => void;
}

export interface AreaColumnRangeProps {
    value: string;
    label: string;
}

/**
 * 选择器的头部
 * @param {tabSource} Array
 * @param {rangeKey} string
 * @param {onClick} function
 **/

export interface AreaHeaderArea {
    onClick?: (item: AreaTabSourceProps) => void;
    tabSource?: Array<AreaTabSourceProps>;
}

export interface AreaTabSourceProps {
    value: string;
    label: string;
}


/**
 * 单个选择器
 * @param {columnSource} Array 单个选择器的数据源
 * @param {tabSource} Array<header的数据源>;
 * @param {rangeKey} string 单个选择器的key
 * @param {onClick} function 回调函数
 **/

 export interface AreaColumn {
    columnSource: Array<AreaColumnRangeProps>;
    tabSource?: Array<AreaTabSourceProps>;
    rangeKey?: string;
    onClick: (item: AreaColumnRangeProps) => void;
}

export interface AreaColumnRangeProps {
    value: string;
    label: string;
}

/**
 * 从底部弹起的滚动选择器（高仿京东地址选择器）
 * @param {tabSource} Array 头部的数据源
 * @param {columnSource} Array 选择器的数据
 * @param {onHeaderItemClick} 头部中的点击回调
 * @param {onColumnItemClick} 选择器中的点击回调
 * @param {show} 是否显示
 * @param {title} 标题
 * @param {onHandleCancel} 点击空白处回调
 */
export interface AreaProps {
    tabSource?: Array<AreaTabSourceProps>;
    columnSource: Array<AreaColumnRangeProps>;
    onHeaderItemClick?: (item: AreaTabSourceProps) => void;
    onColumnItemClick: (item: AreaColumnRangeProps) => void;
    show: boolean;
    title: string;
    onHandleCancel?: () => void;
}
