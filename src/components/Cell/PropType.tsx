import { FC, ReactNode } from 'react';

/**
 * CellGroup 列表组
 * @param {className} string                            // 自定义 class 名
 * @param {inset} boolean                               // 是否使用卡片模式
 * @param {shadow} boolean                               // 是否显示外阴影
 **/
export interface CellGroupProps {
    className?: string;
    inset?: boolean;
    shadow?: boolean;
}

/**
 * Cell 列表项
 * @param {className} string                            // 自定义 class 名
 * @param {title} number | string                       // 左侧标题
 * @param {value} number | string                       // 右侧内容
 * @param {label} string                                // 标题下方的描述信息
 * @param {desc} string                                 // 内容下方的描述信息
 * @param {icon} ReactNode                              // 左侧图标名称
 * @param {center} boolean                              // 是否使内容垂直居中
 * @param {isLink} boolean                              // 是否显示箭头
 * @param {required} boolean                            // 是否显示表单必填星号
 * @param {onClick} function                            // 点击单元格后的回调
 **/
export interface CellProps {
    className?: string;
    title?: number | string;
    value?: number | string | ReactNode;
    label?: string;
    desc?: string;
    icon?: ReactNode;
    center?: boolean;
    isLink?: boolean;
    required?: boolean;
    onClick?: () => void;
}

export interface CellType extends FC<CellProps> {
    Group: React.FC<CellGroupProps>;
}
