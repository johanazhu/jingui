import './style/index.scss';
import _TabBar from './TabBar';
import TabBarItem from './TabBarItem';

const TabBar = Object.assign(_TabBar, { Item: TabBarItem });

export default TabBar;

export { TabBar, TabBarItem };

export type { TabBarProps, TabBarItemProps } from './PropType';
