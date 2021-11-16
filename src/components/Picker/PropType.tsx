import { ReactNode } from 'react';

/**
 * 选择器
 * @param {show} 是否显示
 * @param {title} 标题
 * @param {height} 选择器高度
 * @param {onHandleCancel} 点击空白处回调
 */
export interface PickerProps {
    children: React.ReactNode;
    show: boolean;
    title: string;
    height?: string;
    onHandleCancel?: () => void;
}
