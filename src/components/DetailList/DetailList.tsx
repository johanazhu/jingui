import * as React from 'react';
import { DetailProps } from './PropType';

const Header = (props: DetailProps) => {
    return <div className="DetailList-header">{props.title}</div>;
};

const Body = (props: DetailProps) => (
    <div className="DetailList-body">{props.children}</div>
);

const Item = (props: DetailProps) => {
    const { leftText, rightChildren, customChildren, leftStyle } = props;

    if (!customChildren) {
        return (
            <div className="DetailList-body-item">
                <div className="DetailList-body-item__left" style={leftStyle}>
                    {leftText}
                </div>
                <div className="DetailList-body-item__right">
                    {rightChildren}
                </div>
            </div>
        );
    } else {
        return <div className="DetailList-body-item">{customChildren}</div>;
    }
};

const Line = () => <div className="DetailList-line" />;

export interface DetailListProps {
    children: React.ReactNode;
}

interface DetailListType extends React.FC<DetailListProps> {
    Header: React.FC<DetailProps>;
    Body: React.FC<DetailProps>;
    Item: React.FC<DetailProps>;
    Line: React.FC<DetailProps>;
}

const DetailList: DetailListType = (props) => {
    return <div className="DetailList">{props.children}</div>;
};

DetailList.Header = Header;
DetailList.Body = Body;
DetailList.Item = Item;
DetailList.Line = Line;

export default DetailList;
