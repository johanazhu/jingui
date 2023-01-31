function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { memo, useMemo } from 'react';
import classnames from 'classnames';
import { addUnit, getSizeStyle } from "../../utils";
var prefixCls = 'jing-loading';
var CircularIcon = function CircularIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    className: classnames("".concat(prefixCls, "__circular")),
    viewBox: "25 25 50 50"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  }));
};
var SpinIcon = function SpinIcon() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, Array(12).fill(null).map(function (_, index) {
    return /*#__PURE__*/React.createElement("i", {
      key: index,
      className: classnames("".concat(prefixCls, "__line"), "".concat(prefixCls, "__line-").concat(index + 1))
    });
  }));
};
var Loading = function Loading(props) {
  var className = props.className,
    style = props.style,
    type = props.type,
    color = props.color,
    size = props.size,
    textSize = props.textSize,
    textColor = props.textColor,
    vertical = props.vertical,
    children = props.children;
  var iconStyle = useMemo(function () {
    return _objectSpread({
      color: color
    }, getSizeStyle(size));
  }, [color, size]);
  var _style = _objectSpread({
    color: color,
    size: size
  }, style);
  var classes = classnames(prefixCls, className, "".concat(prefixCls, "--").concat(type), _defineProperty({}, "".concat(prefixCls, "--vertical"), !!vertical));
  var renderText = function renderText() {
    if (children) {
      return /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "__text"),
        style: {
          fontSize: addUnit(textSize),
          color: textColor !== null && textColor !== void 0 ? textColor : color
        }
      }, children);
    }
    return null;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classes,
    style: _style
  }, /*#__PURE__*/React.createElement("span", {
    className: classnames("".concat(prefixCls, "__icon"), "".concat(prefixCls, "__icon--").concat(type)),
    style: iconStyle
  }, type === 'circular' ? /*#__PURE__*/React.createElement(CircularIcon, null) : /*#__PURE__*/React.createElement(SpinIcon, null)), renderText());
};
Loading.defaultProps = {
  type: 'circular'
  // color: '#c8c8c8',
  // size: '30px',
  // textSize: '14px',
  // textColor: '#c8c8c8',
  // vertical: false,
};

export default /*#__PURE__*/memo(Loading);