"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DemoBlock = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./index.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DemoBlock = function DemoBlock(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('jing-demo', props.className)
  }, props.title && /*#__PURE__*/_react.default.createElement("div", {
    className: "jing-demo__title"
  }, props.title), /*#__PURE__*/_react.default.createElement("div", {
    className: "jing-demo__content",
    style: {
      padding: props.padding,
      background: props.background,
      border: props.border
    }
  }, props.children));
};
exports.DemoBlock = DemoBlock;
DemoBlock.defaultProps = {
  padding: '10px 16px',
  background: '#ffffff'
};