function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { useContext } from 'react';
import classnames from 'classnames';
import { IconLoading } from "../Icon";
import ButtonContext from "./Context";
import { WHITE } from "../../utils";
var prefixCls = 'jing-button';
var Button = function Button(props) {
  var _classnames;
  var className = props.className,
    style = props.style,
    type = props.type,
    plain = props.plain,
    round = props.round,
    size = props.size,
    disabled = props.disabled,
    loading = props.loading,
    block = props.block,
    color = props.color,
    text = props.text,
    children = props.children,
    onClick = props.onClick;
  var _useContext = useContext(ButtonContext),
    parent = _useContext.parent;
  console.log('props', props);
  console.log('parent', parent);
  var _style = _objectSpread({}, style);
  if (color) {
    _style.color = plain ? color : WHITE;
    if (!plain) {
      _style.background = color;
    }
    if (color.indexOf('gradient') !== -1) {
      _style.border = 0;
    } else {
      _style.borderColor = color;
    }
  }
  var classes = classnames(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "--").concat(type), !!type), _defineProperty(_classnames, "".concat(prefixCls, "--").concat((parent === null || parent === void 0 ? void 0 : parent.size) || size), (parent === null || parent === void 0 ? void 0 : parent.size) || !!size), _defineProperty(_classnames, "".concat(prefixCls, "--plain"), !!plain), _defineProperty(_classnames, "".concat(prefixCls, "--round"), !!round), _defineProperty(_classnames, "".concat(prefixCls, "--disabled"), !!disabled), _defineProperty(_classnames, "".concat(prefixCls, "--loading"), !!loading), _defineProperty(_classnames, "".concat(prefixCls, "--block"), !!block), _classnames));
  var contentRender = loading ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__content")
  }, /*#__PURE__*/React.createElement(IconLoading, null), /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "__content-span")
  }, children)) : /*#__PURE__*/React.createElement(React.Fragment, null, " ", children || text, " ");
  return /*#__PURE__*/React.createElement("button", {
    className: classes,
    disabled: disabled,
    onClick: onClick,
    style: _style
  }, contentRender);
};
Button.defaultProps = {
  type: 'default',
  size: 'normal',
  block: false
};
export default Button;