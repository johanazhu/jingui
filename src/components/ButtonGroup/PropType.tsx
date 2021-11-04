
import { ReactNode } from 'react';

export type ButtonVariant = 'contained' | 'outlined';
export type ButtonColor = 'blue' | 'orange' | 'green';


/**
 * ButtonGroup 按钮组
 * @param {className} string                            // 自定义 class 名 
 * @param {variant} string                              // 设置按钮形态，可选值 contained、 outlined
 * @param {color} string                                // 设置颜色，可选值为 'blue'、'orange'、'green'  
 * @param {block} string                                // 是否填充满                        
 * @param {children} ReactNode                          // 组件中的内容                        
 **/
export interface ButtonGroupProps {
    className?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;
    block?: boolean;
    children: ReactNode;
}





