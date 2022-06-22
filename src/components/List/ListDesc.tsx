import * as React from 'react';

export interface ListDescProps {
    children: React.ReactNode;
}

const ListDesc = (props: ListDescProps) => {
    const { children } = props;

    return <div className="jing-list__Desc">{children}</div>;
};

export default React.memo(ListDesc);
