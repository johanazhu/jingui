import React, { FC, memo } from 'react';
import classNames from 'classnames';

export type ButtonVariant = 'contained' | 'outlined';
export type ButtonColor = 'blue' | 'orange' | 'green';

interface ButtonGroupProps {
    className?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;
    children?: React.ReactNode;
}

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
    const { variant, color, children, className } = props;

    const classes = classNames('jing-buttonGroup', className);

    const items = React.Children.map(children, (item: any) => {
        return React.cloneElement(item, { variant, color });
    });

    return <div className={classes}>{items}</div>;
};

export default memo(ButtonGroup);
