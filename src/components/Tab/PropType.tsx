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
export interface TabProps {
    className?: string;
    style?: CSSProperties;
    title?: ReactNode;
    value?: ReactNode;
    disabled?: boolean;
    children?: ReactNode;
    titleClass: string;
    titleStyle: CSSProperties;
    selected?: boolean;
}
