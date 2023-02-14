"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var prefixCls = 'jing-cell-group';
var CellGroup = function CellGroup(props) {
  var _classnames;
  var className = props.className,
    children = props.children,
    inset = props.inset,
    shadow = props.shadow;
  var classes = (0, _classnames2.default)(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "--inset"), !!inset), _defineProperty(_classnames, "".concat(prefixCls, "--shadow"), !!shadow), _classnames));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, children);
};
CellGroup.defaultProps = {
  inset: false,
  shadow: true
};
var _default = CellGroup;
exports.default = _default;