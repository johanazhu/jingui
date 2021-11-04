import * as React from 'react';

export interface TabBarItemProps {
    children: React.ReactNode;
}

const TabBarItem: React.FC<TabBarItemProps> = (props) => {
    const { children } = props;
    return <div className="TabBar-item">{children}</div>;
};

export default React.memo(TabBarItem);
