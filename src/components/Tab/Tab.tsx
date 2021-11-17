import React, { memo, CSSProperties, FC } from 'react';
import classnames from 'classnames';

const prefixCls = 'jing-tab__panel';

export interface TabProps {
    className?: string;
    style?: CSSProperties;
    title?: string;
}

const Tab: FC<TabProps> = (props) => {
    const { className, style, title, children } = props;

    const classes = classnames(prefixCls, className, {
        // [`${prefixCls}--active`]: !!type,
    });
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export default memo(Tab);
