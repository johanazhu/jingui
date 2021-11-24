import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { RowProps } from './PropType';

const prefixCls = 'jing-row';

const Row: FC<RowProps> = (props) => {
    const { className, children, justify, align, style, onClick } = props;

    const classes = classnames(
        prefixCls,
        `${prefixCls}--justify-${justify}`,
        `${prefixCls}--align-${align}`,
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

export default memo(Row);
