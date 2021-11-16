import { ReactNode, CSSProperties } from 'react';

export type InputSizes = 'small' | 'default' | 'large';

/**
 * Input 输入框组件
 * @param {className} string                        // 输入框组件样式名
 * @param {name} string                             // 唯一标识，有传入点击title会聚焦
 * @param {type} string                             // 类型
 * @param {value} string                            // 值
 * @param {placeholder} string                      // 占位符
 * @param {disabled} bool                           // 是否能点击
 * @param {minLength} number                        // 最少长度 minLength 属性与 <input type="text"> 或 <input type="password"> 配合使用。
 * @param {maxLength} number                        // 最多长度 maxlength 属性与 <input type="text"> 或 <input type="password"> 配合使用。
 * @param {icon} string                             // 图标
 * @param {error} bool                              // 错误提示
 * @param {clearable} boolean                       // 显示清除图标
 * @param {prefix} object                           // 带前缀图标的 input
 * @param {suffix} object                           // 带后缀图标的 input
 * @param {style} object                            // 自定义样式
 * @param {size} string                             // 尺寸大小
 * @param {children} ReactNode                      // children 渲染内容
 * @param {Group} ReactNode                         // group 渲染内容
 * @param {onChange} function                       // value改变时触发
 * @param {onFocus} function                        // 获取焦点时的事件
 * @param {onBlur} function                         // 失去焦点时的事件
 * @param {onClear} function                        // Clear 中点击 x 后的回调
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

/**
 *  Input.Group
 * @param {className} string                            // 自定义 class 名
 * @param {style} CSSProperties                         // 自定义样式
 * @param {children} ReactNode                          // 组件中的内容
 **/
export interface GroupProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

/**
 *  Input.Clear
 * @param {groupClassName} string                        // group 自定义 class 名
 * @param {groupStyle} CSSProperties                     // 自定义 group 样式
 * @param {render} ReactNode                             // 在 clear 图标前渲染
 * @param {backRender} ReactNode                         // 在 clear 图标后选择
 **/
export interface ClearProps extends InputProps {
    groupClassName?: string;
    groupStyle?: CSSProperties;
    render?: ReactNode;
    backRender?: ReactNode;
}

/**
 *  Input.Verify
 * @param {onHandleSendMessage} function                  // 点击获取验证码后的回调
 **/
export interface VerifyProps extends InputProps {
    onHandleSendMessage: () => void;
}

/**
 *  Input.Captcha
 * @param {captcha} ReactNode                             // 验证码
 * @param {onHandleChangeCaptcha} function                // 点击验证码后的回调
 **/
export interface CaptchaProps extends InputProps {
    captcha: ReactNode;
    onHandleChangeCaptcha: () => void;
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
export interface KeyboardProps {
    value: string;
    placeholder?: string;
    active?: boolean;
    maxLength?: number;
    onChange?: (val: string) => void;
    onClearValue?: () => void;
    onHandleFocus?: () => void;
}

/**
 *  Input.Textarea
 * @param {rows} number                             // 文本行数
 **/
export interface TextareaProps extends InputProps {
    rows?: number;
}

/**
 *  Input.Phone
 * @param {value} string                                    // 值
 * @param {reg} RegExp                                      // 正则
 **/
export interface PhoneProps extends InputProps {
    value: string;
    reg?: RegExp;
}

/**
 * Input.Reg
 * @param {reg} RegExp                                      // 正则
 * @param {value} string                                    // 值
 * @param {className} string                                // 自定义class
 * @param {onChange} function                               // 输入值后的回调
 **/
export interface RegProps extends InputProps {
    reg: RegExp;
    value: string;
    className?: string;
    onChange?: (res: string, _isValid: boolean) => void;
}

/**
 * Input.Search
 * @param {value} string                                      // 正则
 * @param {className} string                                  // 自定义class
 **/
export interface SearchProps extends InputProps {
    value?: string;
    className?: string;
}
