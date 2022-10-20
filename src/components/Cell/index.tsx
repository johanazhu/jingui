import './style/index.scss';
import _Cell from './Cell';
import CellGroup from './Group';

const Cell = Object.assign(_Cell, { Group: CellGroup });

export default Cell;
export { Cell, CellGroup };

export type { CellProps, CellGroupProps } from './PropType';
