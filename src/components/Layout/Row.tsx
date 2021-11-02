import * as React from 'react';
import classNames from 'classnames';

export type justifyType =
    | 'start'
    | 'center'
    | 'end'
    | 'space-around'
    | 'space-between';
export type alignType = 'top' | 'center' | 'bottom';

export interface RowProps {
    className?: string;
    children?: React.ReactNode;
    justify?: justifyType;
    align?: alignType;
}

const Row: React.FC<RowProps> = (props) => {
    const { className, children, justify, align } = props;

    const classes = classNames(
        'jing-row',
        `jing-row--${justify}`,
        `jing-row--${align}`,
        className,
    );

    return <div className={classes}>{children}</div>;
};

Row.defaultProps = {
    justify: 'start',
    align: 'top',
};

export default React.memo(Row);
