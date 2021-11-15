export interface BankCardProps {
    bankNo: any;
    title: JSX.Element;
    desc: React.ReactNode;
    footer?: string | JSX.Element;
    className?: string;
    tagList?: Array<TagItemProps>;
    onClick: () => void;
    onHandleClickToIcon?: (pkid: string) => void;
    rightRender: any;
}

export interface TagItemProps {
    labelName: string;
    labelContentLinkPkid: any;
    largePaymentFlag: any;
}
