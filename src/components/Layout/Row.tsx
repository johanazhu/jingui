import * as React from 'react';
import classNames from 'classnames';

export interface RowProps {
    className?: string;
    children?: any;
}

const Row = (props: RowProps) => {
    const { className, children } = props;

    const classes = classNames('row', className);

    return <div className={classes}>{children}</div>;
};

export default React.memo(Row);
