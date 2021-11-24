import { ReactNode, CSSProperties, FC } from 'react';

export interface TabPanelProps {
    className?: string;
    style?: CSSProperties;
    title?: ReactNode;
    value?: ReactNode;
    selected?: boolean;
    disabled?: boolean;
    titleClass?: string;
    titleStyle?: CSSProperties;
    children?: ReactNode;
}

export interface TabsProps {
    className?: string;
    style?: CSSProperties;
    value: number;
    swipeable?: boolean;
    sticky?: boolean;
    ellipsis?: boolean; // 是否省略过长的标题文字
    animated?: boolean;
    disabled?: boolean;
    duration?: number; // 间隔
    lineStyle?: CSSProperties;
    swipeThreshold?: number; // 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 默认5
    children?: ReactNode;
    onChange?: (index?: number) => void;
    onSwiper?: (index?: number) => void;
}

export interface TabsType extends FC<TabsProps> {
    Panel: FC<TabPanelProps>;
}
