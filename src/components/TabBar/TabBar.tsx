import React, { FC } from 'react';
import classnames from 'classnames';
import TabBarItem from './TabBarItem';
import { TabBarType } from './PropType';

const prefixCls = 'jing-tabbar';

const TabBar: TabBarType = (props) => {
    const { children, sticky, className } = props;
    return (
        <div
            className={classnames(prefixCls, className, {
                [`${prefixCls}--sticky`]: sticky,
            })}
        >
            {children}
        </div>
    );
};

TabBar.Item = TabBarItem;

TabBar.defaultProps = {
    sticky: false,
};

export default TabBar;
