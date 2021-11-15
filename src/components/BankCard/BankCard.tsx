import * as React from 'react';
import classnames from 'classnames';
import Tag from '../Tag';
import { IconArrow } from 'icons';

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

interface TagItemProps {
    labelName: string;
    labelContentLinkPkid: any;
    largePaymentFlag: any;
}

const BankCard: React.FC<BankCardProps> = (props) => {
    const {
        bankNo,
        title,
        desc,
        footer,
        className,
        tagList,
        onClick,
        onHandleClickToIcon,
        rightRender,
    } = props;

    return (
        <div className={classnames('BankCard', className)} onClick={onClick}>
            <div className="BankCard__icon">{bankNo}</div>
            <div className="BankCard__content">
                <div className="BankCard__content-title">{title}</div>
                <div className="BankCard__content-desc">{desc}</div>
                {footer && (
                    <div className="BankCard__content-footer">{footer}</div>
                )}
                <div className="ProductCard__header-taglist">
                    {tagList &&
                        tagList.map((item, i) => (
                            <Tag
                                color="orange"
                                key={i}
                                onClick={(e: any) => {
                                    if (item.labelContentLinkPkid) {
                                        e.stopPropagation();
                                        onHandleClickToIcon &&
                                            onHandleClickToIcon(
                                                item.labelContentLinkPkid,
                                            );
                                    }
                                    if (item.largePaymentFlag) {
                                        e.stopPropagation();
                                        onHandleClickToIcon &&
                                            onHandleClickToIcon(
                                                item.largePaymentFlag,
                                            );
                                    }
                                }}
                            >
                                {item.labelName}
                                {(item.labelContentLinkPkid ||
                                    item.largePaymentFlag) && (
                                    <IconArrow size="auto" color="orange" />
                                )}
                            </Tag>
                        ))}
                </div>
            </div>
            {rightRender()}
        </div>
    );
};

export default React.memo(BankCard);
