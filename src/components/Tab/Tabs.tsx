import React, { memo, CSSProperties, FC } from 'react';
import classnames from 'classnames';

const prefixCls = 'jing-tabs';

export interface TabProps {
    className?: string;
    style?: CSSProperties;
    swiper?: string;
}

const Tabs: FC<TabProps> = (props) => {
    const { className, style, children } = props;

    const classes = classnames(prefixCls, className, {
        // [`${prefixCls}--active`]: !!type,
    });
    return (
        <div className={classes} style={style}>
            <div className="jing-tabs__wrap"></div>
            <div className="jing-tabs__content"></div>
        </div>
    );
};

export default memo(Tabs);
