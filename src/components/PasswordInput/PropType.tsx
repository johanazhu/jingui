import { TouchEvent } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * PasswordInput 密码输入框
 * @param {value} string 密码值
 * @param {length} string | number 密码最大长度
 * @param {mask} boolean 是否隐藏密码内容
 * @param {focused} boolean 是否已聚焦，聚焦时会显示光标
 * @param {mode} string 模式，input模式 和 默认模式
 * @param {onHandleFocus} function focus时方法
 * @param {onChange} function change时方法
 **/
export interface PasswordInputProps extends BaseTypeProps {
    value: string;
    length: string | number;
    mask: boolean;
    focused: boolean;
    mode?: string;
    isFocus?: boolean; // 是否让他一开始就弹出系统键盘
    onHandleFocus?: (event: TouchEvent) => void;
    onChange?: (event: any) => void;
}
