import { CSSProperties, ReactNode } from 'react';

export interface BaseTypeProps {
    className?: string;
    style?: CSSProperties | any;
    children?: ReactNode;
}

export type GetContainer = HTMLElement | (() => HTMLElement) | null;
