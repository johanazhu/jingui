import { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

export type spanSize =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24;
/**
 * Col
 * @param {span} spanSize                           // 列元素宽度
 * @param {chilren} ReactNode                       // 组件中的内容
 * @param {onClick} function                        // 点击事件后的回调
 **/
export interface ColProps extends BaseTypeProps {
    span: spanSize;
    children?: ReactNode;
    onClick?: () => void;
}

export type justifyType =
    | 'start'
    | 'center'
    | 'end'
    | 'space-around'
    | 'space-between';
export type alignType = 'top' | 'center' | 'bottom';

/**
 * Row
 * @param {justify} justifyType                     // 主轴对齐方式，可选值为 end center space-around space-between
 * @param {align} alignType                         // 交叉轴对齐方式，可选值为 center bottom
 * @param {chilren} ReactNode                       // 组件中的内容
 * @param {onClick} function                        // 点击事件后的回调
 **/
export interface RowProps extends BaseTypeProps {
    justify?: justifyType;
    align?: alignType;
    children?: ReactNode;
    onClick?: () => void;
}
