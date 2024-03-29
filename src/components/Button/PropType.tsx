import { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

export type ButtonType = 'primary' | 'second-primary' | 'default';
export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

/**
 * Button 按钮
 * @param {className} string                            // 自定义 class 名
 * @param {type} string                                 // 类型，可选值为 primary、second-primary、default
 * @param {plain} boolean                               // 是否为朴素按钮
 * @param {round} boolean                               // 是否为圆形按钮
 * @param {size} string                                 // 设置大小，可选值为 large、normal、small、mini
 * @param {disabled} boolean                            // 是否禁用
 * @param {loading} boolean                             // 是否加载中状态
 * @param {block} boolean                               // 是否块级元素
 * @param {color} string                                // 自定义颜色
 * @param {children} ReactNode                          // 组件中的内容
 * @param {onClick} function                            // 点击后的回调事件
 **/
export interface ButtonProps extends BaseTypeProps {
    type?: ButtonType;
    plain?: boolean;
    round?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;
    color?: string;
    text?: string;
    children?: ReactNode;
    onClick?: () => void;
}

export type ButtonGroupType = 'default' | 'fixed-bottom';
export type ButtonGroupSize = 'large' | 'normal' | 'small' | 'mini';

/**
 * ButtonGroup 按钮组
 * @param {className} string                            // 自定义 class 名
 * @param {type} string                                 // 类型，可选值为 default、fixed-bottom
 * @param {size} string                                 // 设置大小，可选值为 large、normal、small、mini
 * @param {children} ReactNode                          // 组件中的内容
 **/
export interface ButtonGroupProps extends BaseTypeProps {
    type?: ButtonGroupType;
    size?: ButtonGroupSize;
    children: ReactNode;
}
