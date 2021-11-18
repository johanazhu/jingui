import React, { FC, memo } from 'react';
import { TabBarItemProps } from './PropType';

const prefixCls = 'jing-tabbar';

const TabBarItem: FC<TabBarItemProps> = (props) => {
    const { children } = props;
    return <div className={`${prefixCls}--item`}>{children}</div>;
};

export default memo(TabBarItem);
