import { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

export type LoadingType = 'circular' | 'spinner';
/**
 * Loading 加载
 * @param {type} LoadingType                        // 类型
 * @param {color} string                            // 颜色
 * @param {size}  number | string                   // 加载图标大小，默认单位为px
 * @param {textSize}  number | string               // 文字大小，默认单位为px
 * @param {textColor}  string                       // 文字颜色
 * @param {vertical}  boolean                       // 是否垂直排列图标和文字内容
 * @param {children}  ReactNode                     // 组件中的内容
 **/
export interface LoadingProps extends BaseTypeProps {
    type?: LoadingType;
    color?: string;
    size?: number | string;
    textSize?: number | string;
    textColor?: string;
    vertical?: boolean;
    children?: ReactNode;
}

export interface UseLoading {
    show: (props: LoadingProps) => void;
    hide: () => void;
}
