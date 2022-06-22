import { ReactNode, CSSProperties } from 'react';

export interface DetailProps {
    leftText?: ReactNode;
    rightChildren?: ReactNode;
    customChildren?: ReactNode;
    headerTitle?: string;
    hasHeader?: boolean;
    title?: string;
    children?: ReactNode;
    leftStyle?: CSSProperties;
}

export interface DetailListProps {
    children: React.ReactNode;
}

export interface DetailListType extends React.FC<DetailListProps> {
    Header: React.FC<DetailProps>;
    Body: React.FC<DetailProps>;
    Item: React.FC<DetailProps>;
    Line: React.FC<DetailProps>;
}
