import * as React from 'react';
import classNames from 'classnames';
import { RowProps } from './PropType';

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
