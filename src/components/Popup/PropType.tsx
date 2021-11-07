import { ReactNode, CSSProperties } from 'react';


export type PopupModelStatus = 'input'
/**
 * Popup 弹出框
 * @param {className} string                        // 自定义 class 名
 * @param {show} boolean                            // 是否显示
 * @param {mask} boolean                            // 是否需要遮罩
 * @param {children} ReactNode                      // 组件中的内容
 * @param {islock} boolean                          // 是否锁屏
 * @param {isActionSheet} boolean                   // ...
 * @param {groupStyle} CSSProperties                // 自定义样式
 * @param {model} string                            // 模式
 * @param {onClose} function                        // 点击关闭后的回调
 **/
export interface PopupProps {
    className?: string;
    show: boolean;
    mask?: boolean;
    children: ReactNode;
    islock?: boolean;
    isActionSheet?: boolean;
    groupStyle?: CSSProperties;
    model?: PopupModelStatus; 
    onClose?: () => void;
}


