"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var prefixCls = 'jing-detailtop';
var DetailTop = function DetailTop(props) {
  var bigText = props.bigText,
    text = props.text,
    desc = props.desc,
    bigTextStyle = props.bigTextStyle,
    className = props.className,
    descClassName = props.descClassName,
    color = props.color;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('DetailTop-bigtext', className, "DetailTop-bigtext-".concat(color)),
    style: bigTextStyle
  }, ' ', bigText), /*#__PURE__*/_react.default.createElement("div", {
    className: "DetailTop-text"
  }, " ", text), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('DetailTop-desc', descClassName)
  }, ' ', desc));
};
DetailTop.defaultProps = {
  bigText: '',
  text: '',
  desc: ''
};
var _default = DetailTop;
exports.default = _default;