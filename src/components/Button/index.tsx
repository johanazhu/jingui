import React, { FC, memo } from 'react';
import classnames from 'classnames';

interface ButtonProps {
    className?: string;
}

const Button: FC<ButtonProps> = ({ children, className }) => {
    return (
        <div className={classnames('jing-button', className)}>{children}</div>
    );
};

export default memo(Button);
