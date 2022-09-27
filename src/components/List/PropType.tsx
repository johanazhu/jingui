import { ReactNode, CSSProperties } from 'react';
import { BaseTypeProps } from '@/utils';
/**
 * List 列表
 * @param {className} string                            // 输入框组件样式名
 * @param {hasArrow} string                             // 是否显示箭头
 * @param {icon} ReactNode                              // 图标
 * @param {title} function                              // 设置标题区域内容
 * @param {description} ReactNode                       // 描述区域内容
 * @param {help} ReactNode                              // 设置下方提示信息区域内容，通常配合 Message 组件使用
 * @param {onClick} function                            // Clear 中点击 x 后的回调
 **/
export interface ListProps extends BaseTypeProps {
    onClick?: () => void;
}

export interface ListTitleProps extends BaseTypeProps {
    leftText: string;
    rightText: string;
}
