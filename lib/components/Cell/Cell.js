"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames3 = _interopRequireDefault(require("classnames"));
var _Icon = require("../Icon");
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var prefixCls = 'jing-cell';
var Cell = function Cell(props) {
  var _classnames;
  var className = props.className,
    label = props.label,
    title = props.title,
    value = props.value,
    desc = props.desc,
    icon = props.icon,
    center = props.center,
    isLink = props.isLink,
    required = props.required,
    onClick = props.onClick;
  var classes = (0, _classnames3.default)(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "--center"), !!center), _defineProperty(_classnames, "".concat(prefixCls, "--clickable"), !!isLink), _defineProperty(_classnames, "".concat(prefixCls, "--required"), !!required), _classnames));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames3.default)(classes),
    onClick: onClick
  }, icon && /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(prefixCls, "__icon")
  }, icon), title && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "__title")
  }, /*#__PURE__*/_react.default.createElement("span", null, title), label && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "__label")
  }, label)), value && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames3.default)("".concat(prefixCls, "__value"), _defineProperty({}, "".concat(prefixCls, "__value--alone"), !(0, _utils.isDef)(title) && (0, _utils.isDef)(value)))
  }, /*#__PURE__*/_react.default.createElement("span", null, value), desc && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "__desc")
  }, desc)), isLink && /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(prefixCls, "__link")
  }, /*#__PURE__*/_react.default.createElement(_Icon.IconArrow, {
    size: "sm"
  })));
};
Cell.defaultProps = {
  center: false,
  isLink: false,
  required: false
};
var _default = Cell;
exports.default = _default;