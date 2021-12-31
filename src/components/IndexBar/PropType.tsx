import { CSSProperties, ReactNode, MouseEvent, FC } from 'react';
import { BaseTypeProps } from '@/utils';

export type IndexBarPosition = 'left' | 'right';

/**
 * IndexBar 索引栏
 * @param {customStyle} CSSProperties               // 自定义样式
 * @param {zIndex}  number | string                 // z-index 层级
 * @param {children}  ReactNode                     // 组件内的内容
 * @param {onClick} function                        // 点击事件后的回调
 **/
export interface IndexBarProps extends BaseTypeProps {
    position?: IndexBarPosition;
    zIndex?: number | string;
    indexList?: string[] | number[];
    sticky?: boolean;
    stickyOffsetTop?: number;
    highlightColor?: string;
    children?: ReactNode;
    onChange?: (index: number | string) => void;
    onSelect?: (value: number | string) => void;
}

/** 索引字符	 */
export interface IndexAnchorProps extends BaseTypeProps {
    index: number | string;
    children?: ReactNode;
    onClick?: (e: MouseEvent) => void;
}

export interface IndexBarType extends FC<IndexBarProps> {
    Anchor: FC<IndexAnchorProps>;
}

/** 滚动到指定锚点	 */
export type IndexBarInstance = {
    scrollTo: (index: number | string) => void;
};

export const COMPONENT_TYPE_KEY = '__REACT_JING_COMPONENT';
