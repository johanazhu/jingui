import { ReactNode } from 'react';

export type ButtonType = 'default' | 'fixed-bottom';
export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

/**
 * ButtonGroup 按钮组
 * @param {className} string                            // 自定义 class 名
 * @param {type} string                                 // 类型，可选值为 default、fixed-bottom
 * @param {size} string                                 // 设置大小，可选值为 large、normal、small、mini
 * @param {children} ReactNode                          // 组件中的内容
 **/
export interface ButtonGroupProps {
    className?: string;
    type?: ButtonType;
    size?: ButtonSize;
    children: ReactNode;
}
