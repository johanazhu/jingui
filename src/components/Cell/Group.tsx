import React, { FC } from 'react';
import classnames from 'classnames';
import { CellGroupProps } from './PropType';

const prefixCls = 'jing-cell-group';

const CellGroup: FC<CellGroupProps> = (props) => {
    const { className, children, shadow, style } = props;

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--shadow`]: !!shadow,
    });

    return <div className={classes} style={style}>{children}</div>;
};

CellGroup.defaultProps = {
    shadow: true,
};

export default CellGroup;
