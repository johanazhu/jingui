import { ReactNode, FC } from 'react';
import { BaseTypeProps } from '@/utils';

export type SteplineType = 'normal' | 'ellipsis';

export interface SteplineItemProps {
    children: ReactNode;
    footer?: ReactNode;
    percent?: string;
    color?: string;
    type?: SteplineType;
    count?: number;
    i?: any;
}

export interface SteplineProps extends BaseTypeProps {
    type?: SteplineType;
    percent?: string;
    color?: string;
}
