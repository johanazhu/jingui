function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { cloneElement, Children } from 'react';
import classnames from 'classnames';
import ButtonContext from "./Context";
var prefixCls = 'jing-button-group';
var ButtonGroup = function ButtonGroup(props) {
  var _classnames;
  var style = props.style,
    className = props.className,
    type = props.type,
    size = props.size,
    children = props.children;
  var count = Children.count(children);
  var classes = classnames(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "--").concat(type), !!type), _defineProperty(_classnames, "".concat(prefixCls, "--").concat(count), !!count), _classnames));
  var items = Children.map(children, function (element, index) {
    if (! /*#__PURE__*/React.isValidElement(element)) return null;
    return /*#__PURE__*/cloneElement(element, _objectSpread({
      key: index,
      size: size
    }, element.props));
  });
  if (type === 'fixed-bottom') {
    return /*#__PURE__*/React.createElement("div", {
      className: classes,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__content")
    }, items), /*#__PURE__*/React.createElement("div", {
      className: "iphonex-extra-height"
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classes,
    style: style
  }, /*#__PURE__*/React.createElement(ButtonContext.Provider, {
    value: {
      parent: props
    }
  }, items));
};
ButtonGroup.defaultProps = {
  size: 'normal',
  type: 'default'
};
export default ButtonGroup;