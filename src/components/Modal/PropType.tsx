import React, { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * Modal 模态框
 * @param {visible} boolean                             // 是否显示弹窗
 * @param {title} string                                // 标题
 * @param {width} number/string                         // 弹窗宽度，默认单位为 px
 * @param {message} React.ReactNode                     // 设置主题内容
 * @param {messageAlign} string                         // 内容对齐方式，可选值为 center left right
 * @param {showConfirmButton} boolean                   // 是否展示确认按钮
 * @param {showCancelButton} boolean                    // 是否展示取消按钮
 * @param {confirmButtonText} string                    // 确认按钮文案
 * @param {confirmButtonColor} string                   // 确认按钮颜色
 * @param {cancelButtonText} string                     // 取消按钮文案
 * @param {cancelButtonColor} string                    // 取消按钮颜色
 * @param {overlay} string                              // 是否展示遮罩层
 * @param {overlayClass} string                         // 自定义遮罩层类名
 * @param {overlayStyle} object                         // 自定义遮罩层样式
 * @param {closeable} boolean                           // 是否展示关闭图标
 * @param {closeOnPopstate} boolean                     // 是否在页面回退时自动关闭
 * @param {closeOnClickOverlay} boolean                 // 是否在点击遮罩层后关闭弹窗
 * @param {lockScroll} boolean                          // 是否锁定背景滚动
 * @param {onCancel} function                           // 点击取消按钮时触发
 * @param {onConfirm} function                          // 点击确认按钮时触发
 * @param {onClose} function                            // Modal 关闭时的回调
 * @param {onClosed} function                           // Modal 完全关闭时的回调
 * @param {teleport} function                           // 指定挂载的节点
 * @param {footer} ReactNode                            // 自定义底部按钮区域
 * @param {children} ReactNode                          // 自定义底部按钮区域
 **/
export interface ModalProps extends BaseTypeProps {
    visible?: boolean;
    title?: string;
    width?: number | string;
    message?: React.ReactNode;
    messageAlign?: string;
    showConfirmButton?: boolean;
    showCancelButton?: boolean;
    confirmButtonText?: string;
    confirmButtonColor?: string;
    cancelButtonText?: string;
    cancelButtonColor?: string;
    cancelProps?: ModalBtnProps;
    confirmProps?: ModalBtnProps;
    overlay?: boolean;
    overlayClass?: string;
    overlayStyle?: object;
    closeable?: boolean;
    closeOnPopstate?: boolean;
    closeOnClickOverlay?: boolean;
    lockScroll?: boolean;
    onConfirm?: (
        e: React.MouseEvent,
    ) =>
        | void
        | boolean
        | Promise<boolean>
        | Promise<void>
        | Promise<void | boolean>;
    onCancel?: (
        e: React.MouseEvent,
    ) =>
        | void
        | boolean
        | Promise<boolean>
        | Promise<void>
        | Promise<void | boolean>;
    onClose?: () => void;
    onClosed?: () => void;
    teleport?: () => HTMLElement | HTMLElement;
    footer?: ReactNode;
    children?: ReactNode;
}

export interface ModalBtnProps {
    loading?: boolean;
    disabled?: boolean;
}

export type AlertModalProps = Omit<
    ModalProps,
    'confirmButtonText' | 'onCancel'
>;

export type ModalStatic = {
    (props: ModalProps): JSX.Element;
    show: (props: ModalProps) => void;
    confirm: (props: ModalProps) => Promise<boolean>;
    alert: (props: ModalProps) => Promise<React.MouseEvent>;
};
