"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var prefixCls = 'jing-cardbox';
var CardBoxFooter = function CardBoxFooter(props) {
  var children = props.children,
    className = props.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("".concat(prefixCls, "__footer"), className)
  }, children);
};
var _default = CardBoxFooter;
exports.default = _default;