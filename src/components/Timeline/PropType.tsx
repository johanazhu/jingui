import { ReactNode } from 'react';

/**
 * TimeLineItem
 * @param {header} ReactNode                        // 组件头部信息
 * @param {footer} ReactNode                        // 组件尾部信息
 * @param {color} string                            // 颜色
 * @param {dashed} boolean                          // 是否为虚线
 * @param {count} number                            // Item 组件的数量
 * @param {percent} string                          // 百分比
 * @param {showPercent} boolean                     // 是否显示百分比
 * @param {i} any                                   // ...
 * @param {canShowColor} boolean                    // 是否显示颜色
 **/
export interface TimeLineItemProps {
    header: ReactNode;
    footer: ReactNode;
    color?: string;
    dashed?: boolean;
    count?: number;
    percent?: string;
    showPercent?: boolean;
    i?: any;
    canShowColor?: boolean;
}

/**
 * TimeLine
 * @param {className} string                        // 自定义 class 名
 * @param {percent} string                          // 百分比
 * @param {color} string                            // 颜色
 **/
export interface TimelineProps {
    className?: string;
    percent?: string;
    color?: string;
}

export interface TimelineType extends React.FC<TimelineProps> {
    Item: React.FC<TimeLineItemProps>;
}
