import React, { FC, memo } from 'react';
import classNames from 'classnames';
import { ButtonGroupProps } from './PropType';


const ButtonGroup: FC<ButtonGroupProps> = (props) => {
    const { className, variant, color, block, children } = props;

    const classes = classNames('jing-buttonGroup', className);

    const items = React.Children.map(children, (item: any) => {
        return React.cloneElement(item, {
            variant,
            color,
            block,
            ...item.props,
        });
    });

    return <div className={classes}>{items}</div>;
};

ButtonGroup.defaultProps = {
    variant: 'contained',
    block: true,
};

export default memo(ButtonGroup);
