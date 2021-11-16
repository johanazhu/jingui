import React, { FC } from 'react';
import classnames from 'classnames';
import { TagProps } from './PropType';

const prefixCls = 'jing-tag';

const Tag: FC<TagProps> = (props) => {
    const { className, type, size, active, children, onClick } = props;

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--${type}`]: !!type,
        [`${prefixCls}--${size}`]: !!size,
        [`${prefixCls}--active`]: !!active,
    });

    return (
        <span className={classes} onClick={onClick}>
            {children}
        </span>
    );
};

Tag.defaultProps = {
    type: 'default',
};

export default React.memo(Tag);
