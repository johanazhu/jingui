import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { MaskProps } from './PropType';

const prefixCls = 'jing-mask';

const Mask: FC<MaskProps> = (props) => {
    const { className, type, visible, style, onClick } = props;

    const classes = classnames(className, prefixCls, {
        [`${prefixCls}--${type}`]: !!type,
    });

    return visible ? (
        <div className={classes} style={style} onClick={onClick} />
    ) : null;
};

Mask.defaultProps = {
    type: 'normal',
    visible: false,
};

export default memo(Mask);
