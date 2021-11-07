import { ReactNode } from 'react';


/**
 * Cell 列表项
 * @param {className} string                            // 自定义 class 名
 * @param {title} ReactNode                             // 标题
 * @param {value} ReactNode                              // 更多渲染
 * @param {label} ReactNode                          // 组件中的内容  
 **/
export interface CellProps {
    className?: string;
    title?: ReactNode;
    value?: ReactNode;
    label?: ReactNode
}