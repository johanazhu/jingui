function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import * as React from 'react';
import classnames from 'classnames';
import { ExceptionMap } from "./PropType";
var ExceptionStatus = Object.keys(ExceptionMap);
var renderIcon = function renderIcon(_ref) {
  var status = _ref.status;
  if (ExceptionStatus.includes(status)) {
    var SVGComponent = ExceptionMap[status];
    return /*#__PURE__*/React.createElement("div", {
      className: classnames('jing-result__icon')
    }, /*#__PURE__*/React.createElement(SVGComponent, null));
  }
};
var prefixCls = 'jing-result';
var Result = function Result(props) {
  var title = props.title,
    subTitle = props.subTitle,
    extra = props.extra,
    place = props.place,
    className = props.className,
    style = props.style,
    children = props.children;
  var _classes = classnames(prefixCls, className);
  var contentclass = classnames("".concat(prefixCls, "__content"), _defineProperty({}, "".concat(prefixCls, "__content--").concat(place), !!place));
  return /*#__PURE__*/React.createElement("div", {
    className: _classes,
    style: style
  }, renderIcon(props), title && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__title")
  }, title), subTitle && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__subTitle")
  }, subTitle), children && /*#__PURE__*/React.createElement("div", {
    className: contentclass
  }, children), extra && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__extra")
  }, extra));
};
Result.defaultProps = {
  status: 'empty',
  place: 'center'
};
export default Result;