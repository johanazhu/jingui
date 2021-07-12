export type InputSizes = 'small' | 'default' | 'large';

/**
 * Input 输入框组件
 * @param {className} string 输入框组件样式名
 * @param {name} string input的唯一标识，有传入点击title会聚焦
 * @param {type} string input的类型
 * @param {value} string input的值
 * @param {icon} string  Icon
 * @param {placeholder} string input的占位符
 * @param {disabled} bool 是否能点击
 * @param {error} bool 错误提示
 * @param {minLength} number 最少长度
 * @param {maxLength} number 最长长度
 * @param {errorword} string 正则不匹配时显示的错误文案
 * @param {clearable} boolean 显示 清除图标
 * @param {onChange} function input中的value改变时触发
 * @param {onFocus} function 获取焦点时的事件
 * @param {onBlur} function 失去焦点时的事件
 * @param {prefix} object 带前缀图标的 input
 * @param {suffix} object 带后缀图标的 input
 * @param {style} object input 的样式
 * @param {size} object input 的尺寸
 * @param {children} any children 渲染内容
 * @param {onClear} function Clear 中点击 x 后的回调
 * @param {Group} any
 **/
export interface InputProps {
    value?: string;
    className?: string;
    name?: string;
    type?: string;
    icon?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    minLength?: number;
    maxLength?: number;
    errorword?: string;
    clearable?: boolean;
    onChange?: (value: string, e?: any) => void;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    onClear?: (e: any) => void;
    prefix?: React.ReactNode | string;
    suffix?: React.ReactNode | string;
    style?: React.CSSProperties;
    size?: InputSizes;
    children?: any;
    Group?: React.ReactNode;
    autofocus?: any;
}
