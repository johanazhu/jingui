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
    style = props.style,
    label = props.label,
    title = props.title,
    value = props.value,
    desc = props.desc,
    icon = props.icon,
    center = props.center,
    isLink = props.isLink,
    required = props.required,
    border = props.border,
    titleStyle = props.titleStyle,
    titleClass = props.titleClass,
    valueStyle = props.valueStyle,
    valueClass = props.valueClass,
    labelStyle = props.labelStyle,
    labelClass = props.labelClass,
    descStyle = props.descStyle,
    descClass = props.descClass,
    linkStyle = props.linkStyle,
    linkClass = props.linkClass,
    children = props.children,
    onClick = props.onClick;
  var classes = classnames(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "--center"), !!center), _defineProperty(_classnames, "".concat(prefixCls, "--clickable"), !!isLink), _defineProperty(_classnames, "".concat(prefixCls, "--borderless"), !border), _classnames));
  var renderIcon = function renderIcon() {
    if (icon) {
      return /*#__PURE__*/React.cloneElement(props.icon, {
        className: "".concat(prefixCls, "__icon")
      });
    }
    return null;
  };
  var renderLabel = function renderLabel() {
    var showLabel = isDef(label);
    if (showLabel) {
      return /*#__PURE__*/React.createElement("div", {
        className: classnames("".concat(prefixCls, "__label"), labelClass),
        style: labelStyle
      }, label);
    }
    return null;
  };
  var renderRequire = function renderRequire() {
    if (required) {
      return /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "__required")
      }, "*");
    }
    return null;
  };
  var renderTitle = function renderTitle() {
    if (isDef(title)) {
      return /*#__PURE__*/React.createElement("div", {
        className: classnames("".concat(prefixCls, "__title"), titleClass),
        style: titleStyle
      }, /*#__PURE__*/React.createElement("span", null, title, renderRequire()), renderLabel());
    }
    return null;
  };
  var renderDesc = function renderDesc() {
    var showDesc = isDef(desc);
    if (showDesc) {
      return /*#__PURE__*/React.createElement("div", {
        className: classnames("".concat(prefixCls, "__desc"), descClass),
        style: descStyle
      }, desc);
    }
    return null;
  };
  var renderValue = function renderValue() {
    var hasTitle = isDef(title);
    var hasValue = children || isDef(value);
    if (hasValue) {
      return /*#__PURE__*/React.createElement("div", {
        className: classnames("".concat(prefixCls, "__value"), valueClass, _defineProperty({}, "".concat(prefixCls, "__value--alone"), !hasTitle)),
        style: valueStyle
      }, children ? children : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, value), renderDesc()));
    }
    return null;
  };
  var renderLink = function renderLink() {
    if (isLink) {
      return /*#__PURE__*/React.createElement("span", {
        className: classnames("".concat(prefixCls, "__link"), linkClass),
        style: linkStyle
      }, /*#__PURE__*/React.createElement(IconArrow, {
        size: "sm"
      }));
    }
    return null;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(classes),
    style: style,
    onClick: onClick
  }, renderIcon(), renderTitle(), renderValue(), renderLink());
};
Cell.defaultProps = {
  center: false,
  isLink: false,
  required: false,
  border: true
};
export default Cell;