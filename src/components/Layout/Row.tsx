import * as React from 'react';
import classNames from 'classnames';

export type justifyType = 'center' | 'end' | 'space-around' | 'space-between';
export interface RowProps {
    className?: string;
    children?: React.ReactNode;
    justify?: justifyType;
    align?: string;
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

export default React.memo(Row);
