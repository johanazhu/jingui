import { ReactNode } from 'react';


/**
 * BoardBase 按钮
 * @param {isRandom} boolean                            // 自定义 class 名
 * @param {value} string                                 // 类型，可选值为 primary、second-primary、default
 * @param {isNew} boolean                               // 是否为朴素按钮
 * @param {sourceNumber} any                               // 源字母
 * @param {keys} any                                    // keys
 * @param {onHandleDelete} boolean                      // 是否为圆形按钮
 * @param {onHandleValue} string                                 // 设置大小，可选值为 large、normal、small、mini 
 **/
 export interface BoardBaseProps {
    isRandom?: boolean;
    value: string;
    isNew?: boolean;
    sourceNumber: any; // 源字母
    keys: any;
    onHandleDelete: (text: any) => void;
    onHandleValue: (text: any) => void;
}

export interface HeaderProps {
    onClick?: () => void;
    showIcon?: boolean;
}