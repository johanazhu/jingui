import { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * ConnectFooter 页面尾部提示
 * @param {left} ReactNode 左边的内容
 * @param {right} ReactNode 右边的内容
 * @param {onClickLeft} function 点击左边回调
 * @param {onClickRight} function 点击右边回调
 **/
export interface ConnectFooterProps extends BaseTypeProps {
    left?: ReactNode;
    right?: ReactNode;
    onClickLeft?: () => void;
    onClickRight?: () => void;
}
