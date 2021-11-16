import { ReactNode, FC } from 'react';

export interface HeaderTagListProps {
    labelName: string;
    labelColor?: string;
    labelType?: string;
}

export interface HeaderProps {
    title: string | ReactNode;
    tagList?: Array<HeaderTagListProps>;
}

export interface BodyItemProps {
    title: ReactNode;
    desc: string;
}

export interface BodyProps {
    list: Array<BodyItemProps>;
    mode?: string;
}

export interface ProductDetailTopProps extends FC {
    Header: FC<HeaderProps>;
    Body: FC<BodyProps>;
}
