"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _group = _interopRequireDefault(require("./group"));
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var prefixCls = 'jing-input';
var _default = function _default(props) {
  var className = props.className,
    style = props.style,
    icon = props.icon;
  return /*#__PURE__*/_react.default.createElement(_group.default, {
    className: (0, _classnames.default)("".concat(prefixCls, "__group-prefix"), className),
    style: style
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "__group-prefix-icon")
  }, icon), /*#__PURE__*/_react.default.createElement(_base.default, props));
};
exports.default = _default;