import React, { FC, memo } from 'react';
import classNames from 'classnames';

interface ButtonGroupProps {
    type?: string;
    className?: string;
}

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
    const { type, children, className } = props;

    const classes = classNames('jing-buttonGroup', className, {
        [`jing-buttonGroup__type_${type}`]: type,
        // [`am-g-${children.length}`]: Array.isArray(children),
        // ['am-g-1']: !Array.isArray(children),
    });

    return <div className={classes}>{children}</div>;
};

export default memo(ButtonGroup);
