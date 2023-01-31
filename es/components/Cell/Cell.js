function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import classnames from 'classnames';
import { IconArrow } from "../Icon";
import { isDef } from "../../utils";
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
  var classes = classnames(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "--center"), !!center), _defineProperty(_classnames, "".concat(prefixCls, "--clickable"), !!isLink), _defineProperty(_classnames, "".concat(prefixCls, "--required"), !!required), _classnames));
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(classes),
    onClick: onClick
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "__icon")
  }, icon), title && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__title")
  }, /*#__PURE__*/React.createElement("span", null, title), label && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__label")
  }, label)), value && /*#__PURE__*/React.createElement("div", {
    className: classnames("".concat(prefixCls, "__value"), _defineProperty({}, "".concat(prefixCls, "__value--alone"), !isDef(title) && isDef(value)))
  }, /*#__PURE__*/React.createElement("span", null, value), desc && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__desc")
  }, desc)), isLink && /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "__link")
  }, /*#__PURE__*/React.createElement(IconArrow, {
    size: "sm"
  })));
};
Cell.defaultProps = {
  center: false,
  isLink: false,
  required: false
};
export default Cell;