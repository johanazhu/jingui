import { ReactNode, MouseEventHandler } from 'react';
import { LoadingType } from '../Loading';
import { BaseTypeProps, GetContainer } from '@/utils';

export type ToastType = 'loading' | 'success' | 'fail' | 'info';

/**
 * Toast 轻提示
 * @param {type} ToastType                                // 类型
 * @param {message} number | string                     // 文本内容
 * @param {duration} number | string                    // 展示时长(ms)，值为 0 时，toast 不会消失
 * @param {icon}  string | ReactNode                    // 自定义图标
 * @param {loadingType}  LoadingType                    // 加载图标类型, 可选值为 spinner
 * @param {overlay}  boolean                            // 是否显示背景遮罩层
 * @param {forbidClick}  boolean                        // 是否禁止背景点击
 * @param {closeOnClickOverlay}  boolean                // 是否在点击遮罩层后关闭
 * @param {closeOnClick}  boolean                       // 是否在点击后关闭
 * @param {onClick}  () => void                         // 点击内容后的回调函数
 * @param {onClose}  () => void                         // 关闭时的回调函数
 * @param {onClosed}  () => void                        // 关闭后的回调函数
 * @param {onOpened}  () => void                        // 打开后的回调函数
 * @param {mountContainer}  GetContainer                // 指定挂载的节点
 **/
export interface ToastProps extends BaseTypeProps {
    type?: ToastType;
    message?: number | string;
    duration?: number | string;
    icon?: string | ReactNode;
    loadingType?: LoadingType;
    overlay?: boolean;
    forbidClick?: boolean;
    closeOnClickOverlay?: boolean;
    closeOnClick?: boolean;
    onClick?: () => void;
    onClose?: () => void;
    onClosed?: () => void;
    onOpened?: () => void;
    mountContainer?: GetContainer;
}

export type ToastPrivateProps = {
    onClosed?: () => void;
};

export type ToastOptions = Omit<ToastProps, 'type'> | string;

export type ToastReturnType = {
    config: React.Dispatch<React.SetStateAction<ToastProps>>;
    clear: () => void;
};
export interface ToastInstance {
    (opts: ToastProps | string): ToastReturnType;
    info(opts: ToastOptions): ToastReturnType;
    loading(opts: ToastOptions): ToastReturnType;
    success(opts: ToastOptions): ToastReturnType;
    fail(opts: ToastOptions): ToastReturnType;
    allowMultiple(value?: boolean): void;
    clear(): void;
}
