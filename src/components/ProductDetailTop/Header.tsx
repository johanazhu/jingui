import * as React from 'react';
import { Tag } from 'components';

export interface HeaderTagListProps {
    labelName: string;
    labelColor?: string;
    labelType?: string;
}

export interface HeaderProps {
    title: string | React.ReactDOM;
    tagList?: Array<HeaderTagListProps>;
}

const Header: React.FC<HeaderProps> = (props) => {
    const { title, tagList } = props;

    return (
        <div className="ProductDetailTop__Header">
            <div className="ProductDetailTop__Header-title">{title}</div>
            {tagList && (
                <div className="ProductDetailTop__Header-content">
                    {tagList.map((item: HeaderTagListProps, i: number) => (
                        // <span key={i}>{item.labelName}</span>
                        <Tag
                            color={
                                item.labelType === '04' ? 'highWhite' : 'white'
                            }
                            key={i}
                        >
                            {item.labelName}
                        </Tag>
                    ))}
                </div>
            )}
        </div>
    );
};

export default React.memo(Header);
