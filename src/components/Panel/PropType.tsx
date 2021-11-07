import { ReactNode } from 'react';


/**
 * Panel 面板
 * @param {className} string                            // 自定义 class 名
 * @param {title} ReactNode                             // 标题
 * @param {more} ReactNode                              // 更多渲染
 * @param {children} ReactNode                          // 组件中的内容  
 **/
export interface PanelProps {
    className?: string;
    title?: ReactNode;
    more?: ReactNode;
    children?: ReactNode;
}