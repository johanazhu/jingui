import "./style/index.scss";
import _Stepline from "./Stepline";
import SteplineItem from "./Item";
var Stepline = Object.assign(_Stepline, {
  Item: SteplineItem
});
export default Stepline;
export { Stepline, SteplineItem };