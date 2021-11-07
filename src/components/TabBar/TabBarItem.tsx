import * as React from 'react';
import { TabBarItemProps } from './PropType';


const TabBarItem: React.FC<TabBarItemProps> = (props) => {
    const { children } = props;
    return <div className="jing-tabbar--item">{children}</div>;
};

export default React.memo(TabBarItem);
