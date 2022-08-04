import React, { FC } from 'react';
import classnames from 'classnames';
import { DividerProps } from './PropType';
import { isDef } from '@/utils';

const prefixCls = 'jing-divider';

const Divider: FC<DividerProps> = (props) => {
    const { dashed, hairline, contentPosition, children } = props;

    const classes = classnames(prefixCls, {
        [`${prefixCls}--dashed`]: dashed,
        [`${prefixCls}--hairline`]: hairline,
        [`${prefixCls}--content-${contentPosition}`]:
            isDef(children) && contentPosition,
    });

    return <div className={classes}>{children}</div>;
};

Divider.defaultProps = {
    dashed: false,
    hairline: true,
    contentPosition: 'center',
};

export default Divider;
