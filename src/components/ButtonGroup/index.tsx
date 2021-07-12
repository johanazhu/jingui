import React, { FC, memo } from 'react';
import classNames from 'classnames';

export type ButtonVariant = 'contained' | 'outlined';
export type ButtonColor = 'blue' | 'orange' | 'green';

interface ButtonGroupProps {
    className?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;
    block?: boolean;
    children?: React.ReactNode;
}

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
    const { className, variant, color, block, children } = props;

    const classes = classNames('jing-buttonGroup', className);


    const items = React.Children.map(children, (item: any) => {
        return React.cloneElement(item, { variant, color, block, ...item.props });
    });

    return <div className={classes}>{items}</div>;
};

ButtonGroup.defaultProps = {
    variant: 'contained',
    block: true,
};


export default memo(ButtonGroup);
