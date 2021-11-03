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
    style?: React.CSSProperties;
    children?: React.ReactNode;
    justify?: justifyType;
    align?: alignType;
    onClick?: () => void;
}

const Row: React.FC<RowProps> = (props) => {
    const { className, children, justify, align, style, onClick } = props;

    const classes = classNames(
        'jing-row',
        `jing-row--justify-${justify}`,
        `jing-row--align-${align}`,
        className,
    );

    return (
        <div className={classes} style={style} onClick={onClick}>
            {children}
        </div>
    );
};

Row.defaultProps = {
    justify: 'start',
    align: 'top',
};

export default React.memo(Row);
