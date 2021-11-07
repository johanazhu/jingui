import { CSSProperties } from 'react';


/**
 * Mask 遮罩
 * @param {className} string                        // 自定义 class 名
 * @param {style} CSSProperties                     // 自定义样式
 * @param {scale} scaleSize                         // 分行行距，1-6
 **/
export interface SortBarItemProps {
    name: string;
    status?: string;
    onClick: (isStatus: string) => void;
}


export interface SortBarFilterProps {
    name: string;
    status: boolean;
    onClick: () => void;
}

// 是否开启滚动后悬浮到顶部
export interface SortBarProps {
    options: Array<any>;
    isSticky: Boolean;
    filterName: string;
    status: boolean;
    onItemHandleClick: (item: any) => void;
    onFilterHandleClick: () => void;
}

