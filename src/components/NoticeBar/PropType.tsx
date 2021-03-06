import { ReactNode } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * NoticeBar 通知栏
 * @param {duration} number                             // 动画时长
 * @param {text} string                                 // 通知文本内容
 * @param {center} boolean                              // 是否居中
 * @param {mode} string                                 // 通告栏模式，可选值为 normal、closeable、link
 * @param {scrollable} boolean                          // 是否开启滚动播放，内容长度溢出时默认开启
 * @param {onClick} function                            // mode === link 时 整个NoticeBar 可以点击
 * @param {onClose} function                            // mode === closeable 点击关闭按钮关闭noticebar
 **/
export interface NoticeBarProps extends BaseTypeProps {
    duration?: number;
    text: string;
    center?: boolean;
    mode?: string;
    scrollable?: boolean;
    onClick?: () => void;
    onClose?: () => void;
}
