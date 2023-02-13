import { BaseTypeProps } from '@/utils';

/**
 * PasswordInput 密码输入框
 * @param {value} string 密码值
 * @param {length} number 密码最大长度
 * @param {radius} number | string                          // 圆角大小，默认单位为px
 * @param {mask} boolean 是否隐藏密码内容
 * @param {focused} boolean 是否已聚焦，聚焦时会显示光标
 * @param {type} string 类型 默认为 text
 * @param {autoFocus} boolean 自动聚焦
 * @param {gutter} number 输入框格子之间的间距，如 20px 2em，默认单位为px
 * @param {mode} PasswordInputMode 模式，默认输入框输入模式和配合keyboard组件模式
 * @param {onChange} function 数据改变时触发
 * @param {onSubmit} function 数据输满时触发
 * @param {onFocus} function 输入框聚焦时触发
 * @param {onBlur} function 输入框失焦时触发
 **/
export interface PasswordInputProps extends BaseTypeProps {
    value?: string;
    length?: number;
    radius?: number | string;
    mask?: boolean;
    type?: string;
    autoFocus?: boolean;
    gutter?: number | string;
    mode?: PasswordInputMode;
    onChange?: (val: string) => void;
    onSubmit?: (val: string) => void;
    onFocus?: (e?: React.FocusEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
}

export type InputMode =
    | 'text'
    | 'none'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';

export type PasswordInputMode = 'normal' | 'keyboard';

export type PasswordInputInstance = {
    focus: () => void;
    blur: () => void;
    clear: () => void;
};
