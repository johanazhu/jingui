import { ReactNode, MouseEvent } from 'react';
import { BaseTypeProps } from '@/utils';

export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

/**
 * Image 图片
 * @param {width} number | string                           // 宽度，默认单位为px
 * @param {height} number | string                          // 高度，默认单位为 px
 * @param {src} string                                      // 图片链接
 * @param {fit} ImageFit                                    // 图片填充模式
 * @param {alt} string                                      // 替代文本
 * @param {round} boolean                                   // 是否显示为圆形
 * @param {radius} number | string                          // 圆角大小，默认单位为px
 * @param {showLoading} boolean                             // 是否展示图片加载中提示
 * @param {showError} boolean                               // 是否展示图片加载失败提示
 * @param {loadingIcon} ReactNode                           // 加载时提示的自定义图标
 * @param {errorIcon} ReactNode                             // 失败时提示的自定义图标
 * @param {children} ReactNode                              // 组件中的内容
 * @param {onClick} function                                // 点击图片时触发
 * @param {onLoad} function                                 // 图片加载完毕时触发
 * @param {onError} function                                // 图片加载失败时触发
 **/
export interface ImageProps extends BaseTypeProps {
    width?: number | string;
    height?: number | string;
    src?: string;
    fit?: ImageFit;
    alt?: string;
    round?: boolean;
    radius?: number | string;
    showLoading?: boolean;
    showError?: boolean;
    loadingIcon?: ReactNode;
    errorIcon?: ReactNode;
    children?: ReactNode;
    onClick?: (e: MouseEvent<HTMLImageElement>) => void;
    onLoad?: (e: MouseEvent<HTMLImageElement>) => void;
    onError?: (e: MouseEvent<HTMLImageElement>) => void;
}
