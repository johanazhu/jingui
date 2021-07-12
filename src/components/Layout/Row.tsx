import * as React from 'react';
import classNames from 'classnames';

export interface RowProps {
    className?: string;
    children?: React.ReactNode;
}

const Row: React.FC<RowProps> = (props) => {
    const { className, children } = props;

    const classes = classNames('jing-row', className);

    return <div className={classes}>{children}</div>;
};

export default React.memo(Row);
