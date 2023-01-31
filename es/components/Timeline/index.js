import "./style/index.scss";
import _Timeline from "./Timeline";
import TimelineItem from "./TimelineItem";
var Timeline = Object.assign(_Timeline, {
  Item: TimelineItem
});
export default Timeline;
export { Timeline, TimelineItem };