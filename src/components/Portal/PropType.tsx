import { ReactNode } from 'react';


/**
 * portal 传送门
 * @param {container} HTMLDivElement                        // 自定义传送到的根节点
 * @param {className} CSSProperties                         // 自定义 class 名
 * @param {children} scaleSize                              // 组件中的内容
 **/
 export interface PortalProps {
    container?: HTMLDivElement;
    className?: string;
    children?: ReactNode;
}

