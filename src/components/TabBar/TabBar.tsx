import * as React from 'react';
import classnames from 'classnames';
import TabBarItem, { TabBarItemProps } from './TabBarItem';

{
    /* <Tabbar>
    <Tabbar.Item>标签1</Tabbar.Item>
    <Tabbar.Item>标签2</Tabbar.Item>
</Tabbar> */
}
// sticky
/**
 * TabBar
 * @param {children} any 渲染的内容
 **/
export interface TabBarProps {
    className?: string;
    value: number;
    indicator: boolean;
    sticky: boolean;
    activeIndex: number;
    children: React.ReactNode;
    onChange: () => void;
}

export interface TabBarType extends React.FC<TabBarProps> {
    Item: React.FC<TabBarItemProps>;
}

const TabBar: TabBarType = (props) => {
    const { children, sticky, className } = props;
    return (
        <div
            className={classnames('TabBar', className, {
                'TabBar-sticky': sticky,
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
