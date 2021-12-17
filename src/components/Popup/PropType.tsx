import { ReactElement, MouseEvent } from 'react';
import { BaseTypeProps, GetContainer } from '@/utils';

export type PopupCloseIconPosition =
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';

/**
 * Popup 弹出框
 * @param {zIndex} number                           // z-index值
 * @param {visible} boolean                         // 是否显示
 * @param {position} string                         // 弹出方向，可选值 top, bottom, left, right, center
 * @param {duration} number                         // 动画执行时间（单位：毫秒）
 * @param {overlay} boolean                         // 是否展示遮罩层
 * @param {overlayType} string                      // 遮罩层的类型，可选值 transparent, normal
 * @param {lockScroll} boolean                      // 是否锁定背景滚动
 * @param {safeAreaInsetBottom} boolean             // 是否开启底部安全区适配
 * @param {closeOnClickOverlay} boolean             // 是否在点击遮罩层后关闭
 * @param {closeable} boolean                       // 是否显示关闭图标
 * @param {closeIconPosition} PopupCloseIconPosition// 关闭图标出现的位置
 * @param {children} any                            // 组件中的内容
 * @param {onOpen} function                         // 打开弹出层时触发
 * @param {onClose} function                        // 关闭弹出层时触发
 * @param {onOpened} function                       // 打开弹出层且动画结束后触发
 * @param {onClosed} function                       // 关闭弹出层且动画结束后触发
 * @param {onClickOverlay} function                 // 点击遮罩层时触发的回调函数
 * @param {onClick} function                        // 点击弹出层时触发
 * @param {onClickCloseIcon} function               // 点击关闭图标时触发
 * @param {mountContainer} GetContainer             // 指定 Popup 挂载的 HTML 节点
 **/
export interface PopupProps extends BaseTypeProps {
    zIndex?: number;
    visible: boolean;
    position?: string;
    animationType?: string;
    duration?: number;
    overlay?: boolean;
    overlayType?: 'normal' | 'transparent';
    lockScroll?: boolean;
    safeAreaInsetBottom?: boolean;
    closeOnClickOverlay?: boolean;
    closeable?: boolean;
    closeIconPosition?: PopupCloseIconPosition;
    children?: any;
    onOpen?: () => void;
    onClose?: () => void;
    onOpened?: () => void;
    onClosed?: () => void;
    onClickOverlay?: (e: MouseEvent) => void;
    onClick?: (e: MouseEvent) => void;
    onClickCloseIcon?: (e: MouseEvent) => void;
    mountContainer?: GetContainer;
}

/**
 * Portal 传送门
 * @param {mountContainer} HTMLElement                      // 指定 Portal 挂载的 HTML 节点
 * @param {children} ReactNode                              // 组件中的内容
 **/
export interface PortalProps {
    mountContainer: GetContainer;
    children: ReactElement;
}
