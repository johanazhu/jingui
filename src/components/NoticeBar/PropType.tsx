import { ReactNode } from 'react';


/**
 * NoticeBar 通知栏
 * @param {duration} number                             // 动画时长
 * @param {delay} number                                // 动画延迟时间 (s)
 * @param {text} string                                 // 通知文本内容  
 * @param {center} boolean                              // 是否居中  
 * @param {hasLeft} boolean                             // 是否需要左边图标  
 * @param {mode} string                                 // 通告栏模式，可选值为 normal、closeable、link
 * @param {scrollable} boolean                          // 是否开启滚动播放，内容长度溢出时默认开启
 * @param {onClick} function                            // mode === link 时 整个NoticeBar 可以点击  
 * @param {onClose} function                            // mode === closeable 点击关闭按钮关闭noticebar  
 **/
// 暂时用不到滚动和时间
export interface NoticeBarProps {
    duration?: number;
    delay?: number; 
    text: string; 
    center?: boolean; 
    hasLeft?: boolean; 
    mode?: string; 
    scrollable?: boolean; 
    onClick?: () => void;
    onClose?: () => void;
}
