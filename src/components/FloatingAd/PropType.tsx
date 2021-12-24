import { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * FloatingAd 悬浮广告
 * @param {chilren} ReactNode                   // 组件中的内容
 * @param {onClick} function                    // 点击后的回调函数
 **/
export interface FloatingAdProps extends BaseTypeProps {
    children?: ReactNode;
    onClick?: () => void;
}
