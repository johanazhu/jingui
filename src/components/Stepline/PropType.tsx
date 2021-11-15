import { ReactNode, FC } from 'react';

export interface SteplineItemProps {
    header: ReactNode;
    footer: ReactNode;
    color?: string;
    percent?: string;
    count?: number;
    i?: any;
}

export interface StepLineProps {
    className?: string;
    percent?: string;
    color?: string;
}

export interface StepLineType extends FC<StepLineProps> {
    Item: FC<SteplineItemProps>;
}
