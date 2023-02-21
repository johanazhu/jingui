import { FC, ReactNode, MouseEvent, TouchEvent, CSSProperties } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * CellGroup 列表组
 * @param {shadow} boolean                               // 是否显示外阴影
 **/
export interface CellGroupProps extends BaseTypeProps {
    shadow?: boolean;
}

/**
 * Cell 列表项
 * @param {title} number | string                       // 左侧标题
 * @param {value} number | string | ReactNode           // 右侧内容
 * @param {label} string                                // 标题下方的描述信息
 * @param {desc} string                                 // 内容下方的描述信息
 * @param {icon} ReactNode                              // 左侧图标名称
 * @param {center} boolean                              // 是否使内容垂直居中
 * @param {isLink} boolean                              // 是否显示箭头
 * @param {required} boolean                            // 是否显示表单必填星号
 * @param {titleClass} string                           // title 的 class
 * @param {titleStyle} CSSProperties                    // title 的样式
 * @param {valueClass} string                           // value 的 class
 * @param {valueStyle} CSSProperties                    // value 的样式
 * @param {labelClass} string                           // label 的 class
 * @param {labelStyle} CSSProperties                    // label 的样式
 * @param {descClass} string                            // desc 的 class
 * @param {descStyle} CSSProperties                     // desc 的样式
 * @param {linkClass} string                            // link 的 class
 * @param {linkStyle} CSSProperties                     // link 的样式
 * @param {onClick} function                            // 点击单元格后的回调
 **/
export interface CellProps extends BaseTypeProps {
    title?: number | string;
    value?: number | string | ReactNode;
    label?: string;
    desc?: string;
    icon?: ReactNode;
    center?: boolean;
    isLink?: boolean;
    required?: boolean;
    titleClass?: string;
    titleStyle?: CSSProperties;
    valueClass?: string;
    valueStyle?: CSSProperties;
    labelClass?: string;
    labelStyle?: CSSProperties;
    descClass?: string;
    descStyle?: CSSProperties;
    linkClass?: string;
    linkStyle?: CSSProperties;
    onClick?: (
        event?: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>,
    ) => void;
}

