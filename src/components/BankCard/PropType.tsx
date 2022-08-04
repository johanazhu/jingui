import { ReactNode } from 'react';

export interface TagItemProps {
    labelName: string;
    labelContentLinkPkid: any;
    largePaymentFlag: any;
}

export interface BankCardProps {
    bankNo: ReactNode;
    title: ReactNode;
    desc: ReactNode;
    footer?: ReactNode;
    className?: string;
    tagList?: Array<TagItemProps>;
    onClick: () => void;
    onClickToIcon?: (pkid: string) => void;
    rightRender: any;
}
