import { CSSProperties } from 'react';

export interface KeyBoardProps {
    className?: string;
    style?: CSSProperties;
}

/**
 * BoardBase
 * @param {value} string
 * @param {sourceNumber} any                               // 源字母
 * @param {keys} any                                    // keys
 * @param {new} boolean
 * @param {random} boolean                            // 自定义 class 名
 * @param {onHandleDelete} boolean                      // 是否为圆形按钮
 * @param {onHandleValue} string                                 // 设置大小，可选值为 large、normal、small、mini
 **/
export interface BoardBaseProps {
    value: string;
    sourceNumber: any;
    keys: any;
    new?: boolean;
    random?: boolean;
    onHandleDelete: (text: any) => void;
    onHandleValue: (text: any) => void;
}

export interface HeaderProps {
    onClick?: () => void;
    showIcon?: boolean;
}

export interface KeyProps {
    className?: string;
    text: string;
    type: string;
    value: string;
    keyActive: string;
    new?: boolean;
    changeDoneActive?: boolean;
    keyBoardHeight?: number;
    onPress: (text: string, type: string) => void;
    onTouchStartCb?: (text: any) => void;
}

export interface SymbolProps {
    className?: string;
    value: string;
    updatePosition?: boolean;
    onHandleDelete?: (text: string) => void;
    onHandleValue?: (text: any) => void;
    onHandleDone?: () => void;
    onHandleSymbol?: () => void;
}

export interface PriceBoardProps {
    value: string;
    random?: boolean;
    new?: boolean;
    onHandleDelete: (text: any) => void;
    onHandleValue: (text: any) => void;
}

export interface NumberBoardProps {
    value: string;
    random?: boolean;
    new?: boolean;
    onHandleDelete: (text: any) => void;
    onHandleValue: (text: any) => void;
}

export interface IdCardBoardProps {
    value: string;
    random?: boolean;
    onHandleDelete: (text: any) => void;
    onHandleValue: (text: any) => void;
}

export interface LetterProps {
    className?: string;
    random?: boolean;
    value: string;
    updatePosition?: boolean;
    onHandleDelete?: (text: string) => void;
    onHandleValue?: (text: any) => void;
    onHandleDone?: () => void;
    onHandleSymbol?: () => void;
}

export interface IdCardBoardProps {
    value: string;
    random?: boolean;
    onHandleDelete: (text: any) => void;
    onHandleValue: (text: any) => void;
}
