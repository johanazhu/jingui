import './style/index.scss';
import _SortBar from './SortBar';
import SortBarItem from './Item';

const SortBar = Object.assign(_SortBar, { Item: SortBarItem });

export default SortBar;

export { SortBar, SortBarItem };

export type { SortBarProps, SortBarItemProps } from './PropType';
