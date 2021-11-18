import { ReactNode, FC } from 'react';

export interface TabBarItemProps {
    children: ReactNode;
}

/**
 * TabBar
 * @param {className} string                            // 自定义 class 名
 * @param {value} string                                // ...
 * @param {indicator} string                            // ...
 * @param {sticky} any                                  // ...
 * @param {activeIndex} boolean                         // ...
 * @param {children} string                             // ...
 * @param {onChange} function                           // ...
 **/
export interface TabBarProps {
    className?: string;
    value: number;
    indicator: boolean;
    sticky: boolean;
    activeIndex: number;
    children: ReactNode;
    onChange: () => void;
}

export interface TabBarType extends FC<TabBarProps> {
    Item: FC<TabBarItemProps>;
}
