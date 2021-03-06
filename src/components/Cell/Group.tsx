import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { CellGroupProps } from './PropType';

const prefixCls = 'jing-cell-group';

const CellGroup: FC<CellGroupProps> = (props) => {
    const { className, children, inset, shadow } = props;

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--inset`]: !!inset,
        [`${prefixCls}--shadow`]: !!shadow,
    });

    return <div className={classes}>{children}</div>;
};

CellGroup.defaultProps = {
    inset: false,
    shadow: true,
};

export default memo(CellGroup);
