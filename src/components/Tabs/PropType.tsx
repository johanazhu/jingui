import { ReactNode, CSSProperties, FC, MouseEvent } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * TabsTitle Tab标题部分
 * @param {active} boolean                         // 选中时
 * @param {value} string                            // 值
 * @param {disabled} boolean                        // 是否禁用标签
 * @param {scrollable} boolean                      // 是否滑动
 * @param {img} string                              // 图片
 * @param {onClick} function                        // 点击后的回调
 **/
export interface TabsTitleProps {
    active: boolean;
    value: string;
    disabled?: boolean;
    scrollable?: boolean;
    img?: string;
    onClick?: (e: MouseEvent) => void;
}

/**
 * TabsPanel Tab内容部分
 * @param {title} ReactNode                         // 标题
 * @param {img} ReactNode                           // 图片模式
 * @param {selected} boolean                        // 选中时
 * @param {disabled} boolean                        // 是否禁用标签
 * @param {children} ReactNode                      // 组件中的内容
 **/
export interface TabsPanelProps extends BaseTypeProps {
    title?: ReactNode;
    img?: ReactNode;
    selected?: boolean;
    disabled?: boolean;
    children?: ReactNode;
}

/**
 * Tabs 标签页
 * @param {value} ReactNode                         // 绑定当前选中标签的标识符
 * @param {type} string                             // 样式风格类型，可选值为 img
 * @param {swipeable} boolean                       // 是否开启手势滑动切换
 * @param {sticky} boolean                          // 是否使用粘性定位布局
 * @param {ellipsis} boolean                        // 是否省略过长的标题文字
 * @param {disabled} boolean                        // 是否禁用标签
 * @param {duration} number                         // 动画时间，单位秒
 * @param {swipeThreshold} number                   // 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动
 * @param {children} ReactNode                      // 组件中的内容
 * @param {onChange} function                       // 切换标签的回调函数
 * @param {onSwiper} function                       // 滑动panel的回调函数
 **/
export interface TabsProps extends BaseTypeProps {
    value: number;
    type?: string;
    swipeable?: boolean;
    sticky?: boolean;
    ellipsis?: boolean;
    disabled?: boolean;
    duration?: number;
    swipeThreshold?: number;
    children?: ReactNode;
    onChange?: (index?: number, item?: any) => void;
    onSwiper?: (index?: number) => void;
}

export interface TabsType extends FC<TabsProps> {
    Panel: FC<TabsPanelProps>;
}
