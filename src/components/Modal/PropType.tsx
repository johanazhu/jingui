import { CSSProperties } from 'react';
import { BaseTypeProps } from '@/utils';

/**
 * Modal 模态框
 * @param {className} string                        // 自定义 class 名
 * @param {style} CSSProperties                     // 自定义样式
 **/
export interface ModalProps extends BaseTypeProps {
    className?: string;
    style?: CSSProperties;
}
