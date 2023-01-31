import "./style/index.scss";
import _Cell from "./Cell";
import CellGroup from "./Group";
var Cell = Object.assign(_Cell, {
  Group: CellGroup
});
export default Cell;
export { Cell, CellGroup };