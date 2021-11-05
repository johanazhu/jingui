import React, { FC } from 'react';
import classnames from 'classnames';
import { DividerProps } from './PropType';

const Divider: FC<DividerProps> = (props) => {
    const { dashed, hairline, contentPosition, children } = props;

    const prefixCls = 'jing-divider';

    const classes = classnames(prefixCls, {
        [`${prefixCls}--dashed`]: dashed,
        [`${prefixCls}--hairline`]: hairline,
        [`${prefixCls}--content-${contentPosition}`]: contentPosition,
    });

    return <div className={classes}>{children}</div>;
};

Divider.defaultProps = {
    dashed: false,
    hairline: true,
    contentPosition: 'center',
};

export default React.memo(Divider);
