import React, { FC, memo } from 'react';
import Input from './base';
import Prefix from './prefix';
import { SearchProps } from './PropType';

// 不适用，没有搜索图标
const Search: FC<SearchProps> = (props) => {
    const { value, icon, className } = props;

    return (
        <Prefix icon={icon} className={className}>
            <Input value={value} {...props} />
        </Prefix>
    );
};

export default memo(Search);
