"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var prefixCls = 'jing-divider';
var Divider = function Divider(props) {
  var _classnames;
  var dashed = props.dashed,
    hairline = props.hairline,
    contentPosition = props.contentPosition,
    children = props.children;
  var classes = (0, _classnames2.default)(prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "--dashed"), dashed), _defineProperty(_classnames, "".concat(prefixCls, "--hairline"), hairline), _defineProperty(_classnames, "".concat(prefixCls, "--content-").concat(contentPosition), (0, _utils.isDef)(children) && contentPosition), _classnames));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, children);
};
Divider.defaultProps = {
  dashed: false,
  hairline: true,
  contentPosition: 'center'
};
var _default = Divider;
exports.default = _default;