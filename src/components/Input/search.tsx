import React, { FC } from 'react';
import Input from './base';
import Prefix from './prefix';
import { SearchProps } from './PropType';

const Search: FC<SearchProps> = (props) => {
    const { value, icon, className } = props;

    return (
        <Prefix icon={icon} className={className}>
            <Input value={value} {...props} />
        </Prefix>
    );
};

export default React.memo(Search);
