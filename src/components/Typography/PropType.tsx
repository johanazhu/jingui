import { ReactNode } from 'react';


/**
 * Typography 富文本
 * @param {className} string                            // 自定义 class 名
 * @param {innerHtml} CSSProperties                     // inner内容
 * @param {children} scaleSize                          // 组件中的内容  
 **/
 export interface TypographyProps {
    className?: string;
    innerHtml?: string;
    children?: ReactNode;
}
