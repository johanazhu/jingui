import * as React from 'react';
import { DetailProps, DetailListType } from './PropType';

const prefixCls = 'jing-detaillist';

const Header = (props: DetailProps) => (
    <div className={`${prefixCls}__header`}>{props.title}</div>
);

const Body = (props: DetailProps) => (
    <div className={`${prefixCls}__content`}>{props.children}</div>
);

const Line = () => <div className={`${prefixCls}__line`} />;

const Item = (props: DetailProps) => {
    const { leftText, rightChildren, customChildren, leftStyle } = props;

    if (!customChildren) {
        return (
            <div className={`${prefixCls}__content--item`}>
                <div
                    className={`${prefixCls}__content--item__left`}
                    style={leftStyle}
                >
                    {leftText}
                </div>
                <div className={`${prefixCls}__content--item__right`}>
                    {rightChildren}
                </div>
            </div>
        );
    } else {
        return (
            <div className={`${prefixCls}__content--item`}>
                {customChildren}
            </div>
        );
    }
};

const DetailList: DetailListType = (props) => {
    return <div className={prefixCls}>{props.children}</div>;
};

DetailList.Header = Header;
DetailList.Body = Body;
DetailList.Item = Item;
DetailList.Line = Line;

export default DetailList;
