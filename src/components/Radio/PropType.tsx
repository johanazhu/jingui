import { CSSProperties } from 'react';
import { BaseTypeProps } from '@/utils';

export type scaleSize = 1 | 2 | 3 | 4;

/**
 * Radio 单选框
 * @param {scale} scaleSize                         // 分行行距，1-4
 **/
export interface RadioProps extends BaseTypeProps {
    scale?: scaleSize;
}
