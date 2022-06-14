import { ReactNode, TouchEvent } from 'react';
import { BaseTypeProps } from '@/utils';

export interface KeyboardLayoutObject {
    [key: string]: string[];
}

/**
 * 虚拟键盘单独按钮
 * @param {type} string                                         // 类型如 delete、shift、extra 等
 * @param {text} number | string                                // 键盘内内容
 * @param {color} string                                        // 键盘按钮
 * @param {active} boolean                                      // 该元素是否被按住
 * @param {touchStart} function                                 // 触碰到按钮时的回调
 * @param {touchMove} function                                  // 按住移动时的回调
 * @param {touchEnd} function                                   // 放开按钮时的回调
 * @param {onPress} function                                    // 长按按钮时的回调
 **/
export interface FakerKeyboardKeyProps extends BaseTypeProps {
    type: KeyType | string;
    text: ReactNode | string;
    color?: string;
    active?: boolean;
    touchStart?: (text: ReactNode | string) => void;
    touchMove?: (e: TouchEvent) => void;
    touchEnd?: (e: TouchEvent) => void;
    onPress: (text: ReactNode | string, type: KeyType | string) => void;
}

/**
 * 虚拟键盘
 * @param {layout} Array<string>                                    // 布局
 * @param {titleLeft} ReactNode                                     // 自定义标题栏左侧内容
 * @param {title} string                                            // 键盘标题
 * @param {theme} string                                            // 样式风格，可选值为 custom、number、letter
 * @param {visible} boolean                                         // 是否显示键盘
 * @param {closeButtonText} boolean                                 // 是否将关闭按钮设置为加载中状态，仅在 theme="custom" 时有效
 * @param {display} [button: string]: string                        // 自定义某一按钮的名字
 * @param {value} string                                            // 当前输入值
 * @param {maxLength}  number | boolean                             // 输入值最大长度
 * @param {hideOnClickOutside} boolean                              // 是否在点击外部时收起键盘
 * @param {noNeedHideElements}  Array<string>                       // 点击外部不用收起键盘的id
 * @param {onHandleClose} function                                  // 点击关闭按钮时触发
 * @param {onHandleBlur} function                                   // 点击关闭按钮或非键盘区域时触发
 * @param {onHandleDelete} function                                 // 点击删除键时触发
 * @param {onHandleValue} function                                  // 输入值回调
 * @param {touchEnd} function                                       // 放开按钮时的回调
 * @param {onHandlePress} function                                  // 点击按钮时的回调
 * @param {onHandleShiftCb} function                                // 点击 shift 后的自定义回调
 * @param {onHandleSpaceCb} function                                // 点击 空格 后的自定义回调
 * @param {onHandleDoneCb} function                                // 点击 完成 后的自定义回调
 **/
export interface FakerKeyboardProps extends BaseTypeProps {
    layout?: KeyboardLayoutObject;
    layoutName?: string;
    titleLeft?: ReactNode;
    title?: string;
    theme?: string;
    visible: boolean;
    closeButtonText?: boolean;
    display?: { [button: string]: string };
    value?: string;
    maxLength?: number | string;
    hideOnClickOutside?: boolean;
    noNeedHideElements?: Array<string>;
    onHandleClose?: () => void;
    onHandleBlur?: () => void;
    onHandleDelete?: () => void;
    onHandleValue?: (value: string) => void;
    touchEnd?: (e: TouchEvent) => void;
    onHandlePress?: (text: ReactNode, type: string) => void;
    onHandleShiftCb?: () => void;
    onHandleSpaceCb?: () => void;
    onHandleDoneCb?: () => void;
}

// export interface KeyType
export type KeyType =
    | ''
    | 'emty'
    | 'shift'
    | 'delete'
    | '123.*!&'
    | 'ABC'
    | 'space'
    | 'complete'
    | 'close';
