import React, { FC, memo } from 'react';
// import { Tag } from '../Tag';
import { HeaderProps } from './PropType';

const Header: FC<HeaderProps> = (props) => {
    const { title, tagList } = props;

    return (
        <div className="ProductDetailTop__Header">
            <div className="ProductDetailTop__Header-title">{title}</div>
            {/* {tagList && (
                <div className="ProductDetailTop__Header-content">
                    {tagList.map((item: HeaderTagListProps, i: number) => (
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
            )} */}
        </div>
    );
};

export default memo(Header);
