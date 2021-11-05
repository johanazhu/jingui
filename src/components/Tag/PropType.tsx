import { ReactNode, MouseEventHandler } from 'react';

export type TagType = 'default' | 'primary' | 'normal' | 'disabled';
export type TagSize = 'medium' | 'large';

export interface TagProps {
    className?: string;
    type?: TagType;
    size?: string;
    active?: boolean;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLElement>;
}
