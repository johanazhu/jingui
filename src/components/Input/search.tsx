import * as React from 'react';
// import * as PropTypes from 'prop-types';
// import RegInput from './reg';
import { InputProps } from './input';
import Input from './base';
import Prefix from './prefix';

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
