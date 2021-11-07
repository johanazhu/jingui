import React, { FC } from 'react';
import classnames from 'classnames';
import TabBarItem from './TabBarItem';
import { TabBarType } from './PropType';

const TabBar: TabBarType = props => {
    const { children, sticky, className } = props;
    return (
        <div
            className={classnames('jing-tabbar', className, {
                'jing-tabbar--sticky': sticky,
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
