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
 * @param {errorword} string 正则不匹配时显示的错误文案
 * @param {clearable} boolean 显示清除图标
 * @param {prefix} object 带前缀图标的 input
 * @param {suffix} object 带后缀图标的 input
 * @param {style} object 自定义样式
 * @param {size} string 尺寸大小
 * @param {children} React.ReactNode children 渲染内容
 * @param {Group} React.ReactNode
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
    icon?: React.ReactNode;
    errorword?: string;
    clearable?: boolean;
    prefix?: React.ReactNode | string;
    suffix?: React.ReactNode | string;
    style?: React.CSSProperties;
    size?: InputSizes;
    children?: any;
    Group?: React.ReactNode;
    onChange?: (value: string, e?: any) => void;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    onClear?: (e: any) => void;
}
