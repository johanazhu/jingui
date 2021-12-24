import { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * 选择器
 * @param {show} 是否显示
 * @param {title} 标题
 * @param {height} 选择器高度
 * @param {onHandleCancel} 点击空白处回调
 */
export interface PickerProps extends BaseTypeProps {
    children: ReactNode;
    show: boolean;
    title: string;
    height?: string;
    onHandleCancel?: () => void;
}
