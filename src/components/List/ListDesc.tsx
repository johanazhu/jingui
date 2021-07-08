import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface ListDescProps {
    children: React.ReactNode;
}

const ListDesc = (props: ListDescProps) => {
    const { children } = props;

    return <div className="ListDesc">{children}</div>;
};

ListDesc.propTypes = {
    children: PropTypes.any,
};

export default React.memo(ListDesc);
