import { ReactNode, CSSProperties } from 'react';

/**
 * TabContent
 * @param {list} any                                    // 数据列表
 * @param {duration} number                             // 动画时长
 * @param {children} ReactNode                          // 组件中的内容
 * @param {onClick} MouseEventHandler<HTMLElement>      // 点击事件后的回调
 * @param {changeSwiper} function                       // 滑动后的回调
 * @param {onSwiper} function                           // 滑动时的回调
 **/
export interface TabContentProps {
    list: any;
    duration?: number;
    children?: ReactNode;
    onClick?: (item: any) => void;
    changeSwiper?: (swiper: any) => void;
    onSwiper?: (swiper: any) => void;
}

/**
 * TabItem
 * @param {className} string                            // 自定义 class 名
 * @param {style} CSSProperties                         // 自定义样式
 * @param {isActive} boolean                            // 是否选中
 * @param {value} string                                //
 * @param {label} string                                // 值
 * @param {selected} any                                // 选中的Tab Array
 * @param {disabled} boolean                            // 是否可选
 * @param {icon} string                                 //
 * @param {tagId} string                                //
 * @param {onClick} MouseEventHandler<HTMLElement>      // 点击事件后的回调
 **/
export interface TabItemProps {
    className?: string;
    style?: CSSProperties;
    isActive: boolean;
    value: string;
    label: string;
    selected: any;
    disabled?: boolean;
    icon?: string;
    tagId?: string;
    onClick: () => void;
}

/**
 * Tab
 * @param {className} string                            // 自定义 class 名
 * @param {style} CSSProperties                         // 自定义样式
 * @param {sticky} boolean                              // 是否固定
 * @param {selected} TabItemProps                       // active 选择的Tab 选中的那个Tab
 * @param {data} TabItemProps                           // 值
 * @param {swipeThreshold} number                       // 选中的Tab
 * @param {duration} number                             // 动画时长
 * @param {children} boolean                            // 组件中的内容
 * @param {onClick} MouseEventHandler<HTMLElement>      // 点击事件后的回调
 * @param {onChange} function                           // 滑动改变之后的回调
 **/
export interface TabProps {
    className?: string;
    style?: CSSProperties;
    sticky?: boolean;
    selected: TabItemProps | null;
    data: TabItemProps | any;
    swipeThreshold?: number;
    duration?: number;
    children?: ReactNode;
    onClick: (item: any) => void;
    onChange: (res: TabItemProps) => void;
}
