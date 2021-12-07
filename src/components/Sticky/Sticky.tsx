import React, { memo, FC } from 'react';
import classnames from 'classnames';
import { StickyProps } from './PropType';

const prefixCls = 'jing-sticky';

const Sticky: FC<StickyProps> = (props) => {
    const { children, style, className } = props;

    return (
        <div className={classnames(prefixCls, className)} style={style}>
            {children}
        </div>
    );
};

export default memo(Sticky);
