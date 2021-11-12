import { ReactNode, CSSProperties } from 'react';

export type InputSizes = 'small' | 'default' | 'large';

/**
 * Input 输入框组件
 * @param {className} string 输入框组件样式名
 * @param {name} string input的唯一标识，有传入点击title会聚焦
 * @param {type} string input的类型
 * @param {value} string input的值
 * @param {placeholder} string input的占位符
 * @param {disabled} bool 是否能点击
 * @param {minLength} number 最少长度 minLength 属性与 <input type="text"> 或 <input type="password"> 配合使用。
 * @param {maxLength} number 最多长度 maxlength 属性与 <input type="text"> 或 <input type="password"> 配合使用。
 * @param {icon} string  图标
 * @param {error} bool 错误提示
 * @param {clearable} boolean 显示清除图标
 * @param {prefix} object 带前缀图标的 input
 * @param {suffix} object 带后缀图标的 input
 * @param {style} object 自定义样式
 * @param {size} string 尺寸大小
 * @param {children} ReactNode children 渲染内容
 * @param {Group} ReactNode
 * @param {onChange} function input中的value改变时触发
 * @param {onFocus} function 获取焦点时的事件
 * @param {onBlur} function 失去焦点时的事件
 * @param {onClear} function Clear 中点击 x 后的回调
 **/
export interface InputProps {
    className?: string;
    name?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    minLength?: number;
    maxLength?: number;
    icon?: ReactNode;
    clearable?: boolean;
    prefix?: ReactNode | string;
    suffix?: ReactNode | string;
    style?: CSSProperties;
    size?: InputSizes;
    children?: any;
    Group?: ReactNode;
    onChange?: (value: string, e?: any) => void;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    onClear?: (e: any) => void;
}

// InputClear
export interface ClearProps extends InputProps {
    groupClassName?: string;
    groupStyle?: CSSProperties;
    render?: ReactNode;
    backRender?: ReactNode;
}

export interface SearchProps extends InputProps {
    value?: string;
    icon?: string;
    className?: string;
}

export interface TextareaProps extends InputProps {
    rows?: number;
}

export interface PhoneProps extends InputProps {
    value: string;
    icon?: string;
    className?: string;
    reg?: RegExp | any;
}

/**
 * Input 正则Input
 * @param {reg} RegExp 输入框的正则
 * @param {value} string 输入框的值
 * @param {type} string 输入框样式
 * @param {className} string 自定义class
 * @param {onChange} function  输入值后的回调
 **/
export interface RegProps extends InputProps {
    reg: RegExp;
    value: string;
    type?: string;
    className?: string;
    onChange?: any;
}

export interface VerifyProps extends InputProps {
    onHandleSendMessage: () => void;
}

// Input 组
export interface GroupProps {
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}

export interface KeyboardProps {
    value: string;
    placeholder?: string;
    isActive?: boolean;
    maxLength?: number;
    onChange?: (val: string) => void;
    onClearValue?: () => void;
    onHandleFocus?: () => void;
}
