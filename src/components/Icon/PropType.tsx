import { MouseEvent, TouchEvent } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * Icon 基本属性
 * @param {svgClass} boolean                    // svg 的
 * @param {icon} boolean                        // svg 文件
 * @param {color} string                        // 颜色
 * @param {fill} string                         // 填充颜色
 **/
export interface IconbaseProps extends BaseTypeProps {
    svgClass?: string;
    icon?: any;
    color?: string;
    fill?: string;
}

export type IconSize = 'sm' | 'md' | 'lg' | 'auto';

/**
 * Icon 图标
 * @param {size} string                         // 大小，可选值 sm、md、lg、auto
 * @param {color} string                        // 颜色
 * @param {icon}  any                           // svg 文件
 * @param {keepOriginColor}  boolean            // 是否保持原有颜色
 * @param {onClick}  MouseEventHandler          // 点击图标后的回调
 **/
export interface JqbIconProps extends IconbaseProps {
    color?: string;
    size?: IconSize;
    icon?: any;
    keepOriginColor?: boolean;
    onClick?: (
        event?: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>,
    ) => void;
}
