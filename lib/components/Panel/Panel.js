"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var prefixCls = 'jing-panel';
var Panel = function Panel(props) {
  var className = props.className,
    children = props.children,
    title = props.title,
    more = props.more;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(prefixCls, className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "__header")
  }, title && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "__header-title")
  }, title), more && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "__header-more")
  }, more)), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "__body")
  }, children));
};
var _default = Panel;
exports.default = _default;