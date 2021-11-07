
import { ReactNode, CSSProperties } from 'react';

export type ButtonVariant = 'contained' | 'outlined';
export type ButtonColor = 'blue' | 'orange' | 'green';
export type ButtonSize = 'md' | 'sm';

/**
 * Button 按钮
 * @param {className} string                            // 自定义 class 名 
 * @param {style} CSSProperties                         // 自定义样式
 * @param {variant} string                              // 设置按钮形态，可选值 contained、 outlined
 * @param {color} string                                // 设置颜色，可选值为 'blue'、'orange'、'green'  
 * @param {size} string                                 // 设置大小，可选值为 md、sm  
 * @param {disabled} boolean                            // 是否禁用
 * @param {loading} boolean                             // 是否加载中状态  
 * @param {block} boolean                               // 是否块级元素
 * @param {children} ReactNode                          // 组件中的内容   
 * @param {onClick} function                            // 点击后的回调事件                        
 **/
export interface ButtonProps {
    className?: string;
    style?: CSSProperties;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;
    children?: ReactNode;
    onClick?: () => void;
}


