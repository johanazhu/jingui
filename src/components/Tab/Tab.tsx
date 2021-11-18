import React, { useState, memo, ReactNode, CSSProperties, FC } from 'react';
import classnames from 'classnames';
import { TabProps } from './PropType';

const prefixCls = 'jing-tab__panel';

const Tab: FC<TabProps> = (props) => {
    const { className, style, children } = props;

    const [show, setShow] = useState(false);

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--active`]: !!show,
    });
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export default memo(Tab);
