import "./style/index.scss";
import _Button from "./Button";
import ButtonGroup from "./Group";
var Button = Object.assign(_Button, {
  Group: ButtonGroup
});
export default Button;
export { Button, ButtonGroup };