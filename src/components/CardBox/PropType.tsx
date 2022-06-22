import { ReactNode, ReactChild, FC } from 'react';

export interface CardBoxHeaderProps {
    className?: string;
    children: ReactNode;
}

export interface CardBoxFooterProps {
    className?: string;
    children: ReactChild;
}

export interface CardBoxProps {
    className?: string;
}

export interface CardBoxType extends FC<CardBoxProps> {
    Header: FC<CardBoxHeaderProps>;
    Footer: FC<CardBoxFooterProps>;
}
