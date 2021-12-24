import { CSSProperties, ReactNode, MouseEvent, FC } from 'react';
import { BaseTypeProps } from '@/utils';

export type IndexBarPosition = 'left' | 'right';

/**
 * IndexBar 索引栏
 * @param {customStyle} CSSProperties               // 自定义样式
 * @param {zIndex}  number | string                 // z-index 层级
 * @param {visible} boolean                         // 是否显示
 * @param {duration} number | string                // 动画时长，单位毫秒
 * @param {lockScroll} boolean                      // 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动
 * @param {type}  normal | transparent              // 遮罩层的类型，可选值 transparent, normal
 * @param {children}  ReactNode                     // 组件内的内容
 * @param {onClick} function                        // 点击事件后的回调
 **/
export interface IndexBarProps extends BaseTypeProps {
    position?: IndexBarPosition;
    children?: ReactNode;
    onClick?: (e: MouseEvent) => void;
}

export interface IndexAnchorProps extends BaseTypeProps {
    index: string;
    children?: ReactNode;
    onClick?: (e: MouseEvent) => void;
}

export interface IndexBarType extends FC<IndexBarProps> {
    Anchor: FC<IndexAnchorProps>;
}
