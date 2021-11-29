import React, { useState, memo, ReactNode, CSSProperties, FC } from 'react';
import classnames from 'classnames';
import { TabsPanelProps } from './PropType';

const prefixCls = 'jing-tabs__panel';

const Tab: FC<TabsPanelProps> = (props) => {
    const { className, style, selected, disabled, children } = props;

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--active`]: !!selected,
        [`${prefixCls}--disabled`]: !!disabled,
    });
    return (
        <div className={classes} style={style} role="tabpanel">
            {children}
        </div>
    );
};

export default memo(Tab);
