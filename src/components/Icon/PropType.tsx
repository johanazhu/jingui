import { MouseEvent, TouchEvent } from 'react';
import { BaseTypeProps } from '@/utils';


export type IconSize = 'sm' | 'md' | 'lg' | 'auto';

export type IconColor = 'grey' | 'blue' | 'white' | 'black' | 'red' | 'orange' | 'green' | 'shy-blue'


/**
 * Icon 基本属性
 * @param {svgClass} boolean                    // svg 的
 * @param {icon} boolean                        // svg 文件
 * @param {color} IconColor                     // 颜色
 * @param {fill} string                         // 填充颜色
 **/
export interface IconbaseProps extends BaseTypeProps {
    svgClass?: string;
    icon?: any;
    color?: IconColor;
    fill?: string;
}

/**
 * Icon 图标
 * @param {size} IconSize                       // 大小，可选值 sm、md、lg、auto
 * @param {keepOriginColor}  boolean            // 是否保持原有颜色
 * @param {onClick}  MouseEventHandler          // 点击图标后的回调
 **/
export interface JqbIconProps extends IconbaseProps {
    size?: IconSize;
    keepOriginColor?: boolean;
    onClick?: (
        event?: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>,
    ) => void;
}
