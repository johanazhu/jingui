import { ReactNode } from 'react';

export interface ProductDetailCardProps {
    hasHeader?: boolean;
    headerLeft: any;
    headerRight?: JSX.Element;
    children: ReactNode;
    leftclass?: string;
    onClick?: () => void;
}
