import "./style/index.scss";
import _TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
var TabBar = Object.assign(_TabBar, {
  Item: TabBarItem
});
export default TabBar;
export { TabBar, TabBarItem };