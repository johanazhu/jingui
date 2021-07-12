import * as React from 'react';
import Input from './base';
import Prefix from './prefix';
import { InputProps } from './PropType';

export interface SearchProps extends InputProps {
    value?: string;
    icon?: string;
    className?: string;
}

const Search = (props: SearchProps) => {
    const { value, icon, className } = props;

    return (
        <Prefix icon={icon} className={className}>
            <Input value={value} {...props} />
        </Prefix>
    );
};

export default React.memo(Search);
