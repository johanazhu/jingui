import "./style/index.scss";
import _Input from "./Input";
import TextArea from "../TextArea";
import KeyBoradInput from "./KeyBoard";
var Input = Object.assign(_Input, {
  TextArea: TextArea,
  KeyBoard: KeyBoradInput
});
export default Input;
export { Input };