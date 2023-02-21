import { ReactNode, CSSProperties } from 'react';
import { BaseTypeProps } from '@/utils';

export type InputSizes = 'small' | 'default' | 'large';

export type InputTextAlign = 'left' | 'center' | 'right'


export type InputType =
    | 'tel'
    | 'text'
    | 'digit'
    | 'number'
    | 'search'
    | 'password'

/**
 * Input 输入框组件
 * @param {type} InputType                          // 类型
 * @param {value} string                            // 当前输入的值
 * @param {minLength} number                        // 最少长度 minLength 属性与 <input type="text"> 或 <input type="password"> 配合使用。
 * @param {maxLength} number                        // 最多长度 maxlength 属性与 <input type="text"> 或 <input type="password"> 配合使用。
 * @param {placeholder} string                      // 输入框占位提示文字
 * @param {disabled} boolean                        // 是否禁用输入框
 * @param {readOnly} boolean                        // 是否只读
 * @param {align} InputTextAlign                    // 对齐方式
 * @param {clearable} boolean                       // 是否启用清除图标，点击清除图标后会清空输入框
 * @param {clearIcon} boolean                       // 自定义清除图标
 * @param {autoFocus} boolean                       // 是否自动聚焦，iOS 系统不支持该属性
 * @param {prefix} ReactNode                        // 插入前置内容， 对 Input.TextArea 无效
 * @param {suffix} ReactNode                        // 插入后置内容， 对 Input.TextArea 无效
 * @param {onChange} function                       // value改变时触发
 * @param {onFocus} function                        // 获取焦点时的事件
 * @param {onBlur} function                         // 失去焦点时的事件
 * @param {onClear} function                        // 点击清除按钮时触发
 * @param {onOverlimit} function                    // 当输入值超出 maxLength 时触发
 * @param {onClick} function                        // 点击 Input 时触发
 **/
export interface InputProps extends BaseTypeProps {
    type?: InputType;
    value?: string;
    minLength?: number;
    maxLength?: number;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    align?: InputTextAlign;
    clearable?: boolean;
    clearIcon?: ReactNode;
    autoFocus?: boolean;
    prefix?: ReactNode | string;
    suffix?: ReactNode | string;
    onChange?: (value: string, e?: MouseEvent) => void;
    onFocus?: (e: MouseEvent) => void;
    onBlur?: (e: MouseEvent) => void;
    onClear?: (e: MouseEvent) => void;
    onOverlimit?: () => void;
    onClick?: (e: any) => void;
}

export type InputInstance = {
    focus: () => void
    blur: () => void
    clear: () => void
    nativeElement: HTMLInputElement | null
}

/**
 *  Input.Keyboard
 * @param {value} string                            // 值
 * @param {placeholder} string                      // 占位符
 * @param {active} boolean                          // 选中时
 * @param {maxLength} number                        // 最多长度
 * @param {onChange} function                       // 数据改变时的回调
 * @param {onClearValue} function                   // 点击清除时的回调
 * @param {onHandleFocus} function                  // 点击选中时的回调
 **/
export interface KeyboardInputProps extends BaseTypeProps {
    value: string;
    placeholder?: string;
    active?: boolean;
    maxLength?: number;
    onChange?: (val: string) => void;
    onClearValue?: () => void;
    onHandleFocus?: () => void;
    onClick?: (e: any) => void;
}


export type KeyboardInputInstance = {
    clearElement: HTMLDivElement | null
    focusElement: HTMLDivElement | null
}
