import { ReactNode, CSSProperties } from 'react';
import { InputProps } from '../Input';

/**
 *  多行文本
 * @param {rows} number                             // 文本行数
 **/
export interface TextAreaProps extends InputProps {
    rows?: number;
}
