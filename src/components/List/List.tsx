import * as React from 'react';
import classnames from 'classnames';

export interface ListProps {
    children: React.ReactNode;
    className?: string;
}

const List = (props: ListProps) => {
    const { children, className } = props;

    return <div className={classnames('jing-list', className)}>{children}</div>;
};

export default React.memo(List);
