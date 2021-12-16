import { CSSProperties } from 'react';

export interface BaseTypeProps {
    className?: string;
    style?: CSSProperties;
}

export type GetContainer = HTMLElement | (() => HTMLElement) | null;
