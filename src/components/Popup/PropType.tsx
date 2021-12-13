import { ReactNode, CSSProperties } from 'react';

/**
 * Portal 传送门
 * @param {container} HTMLDivElement                        // 自定义传送到的根节点
 * @param {className} CSSProperties                         // 自定义 class 名
 * @param {children} scaleSize                              // 组件中的内容
 **/
export interface PortalProps {
    container?: HTMLDivElement;
    className?: string;
    children?: ReactNode;
}

export type PopupModelStatus = 'input';
/**
 * Popup 弹出框
 * @param {className} string                        // 自定义 class 名
 * @param {style} CSSProperties                     // 自定义样式
 * @param {visible} boolean                         // 是否显示
 * @param {position} boolean                        // 弹出方向，可选值 top, bottom, left, right, center
 * @param {animationType} string                    // 当弹出方向为中间位置（direction="center"）时的动画效果，可选值 fade, door, flip, rotate, zoom,moveUp, moveDown, moveLeft, moveRight,slideUp, slideDown, slideLeft, slideRight
 * @param {animationDuration} number                // 动画执行时间（单位：毫秒）
 * @param {mask} boolean                            // 是否展示遮罩层
 * @param {maskType} string                         // 遮罩层的类型，可选值 transparent, normal
 * @param {destroy} boolean                         // 弹层关闭后是否移除节点
 * @param {lockScroll} boolean                      // 是否锁定背景滚动
 * @param {safeAreaInsetBottom} boolean             // 是否开启底部安全区适配
 * @param {children} ReactNode                      // 组件中的内容
 * @param {afterOpen} function                      // 弹层展示后的回调
 * @param {afterClose} function                     // 弹层关闭后的回调
 * @param {onMaskClick} function                    // 点击遮罩层时触发的回调函数
 * @param {mountContainer} HTMLElement              // 指定 Popup 挂载的 HTML 节点
 **/
export interface PopupProps {
    className?: string;
    style?: CSSProperties;
    visible: boolean;
    position: string;
    animationType: string;
    animationDuration: number;
    mask?: boolean;
    maskType?: string;
    destroy?: boolean;
    lockScroll?: boolean;
    safeAreaInsetBottom: boolean;
    children?: ReactNode;
    afterOpen?: () => void;
    afterClose?: () => void;
    onMaskClick?: () => void;
    mountContainer?: HTMLElement;
}
