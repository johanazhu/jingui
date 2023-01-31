"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _PropType = require("./PropType");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ExceptionStatus = Object.keys(_PropType.ExceptionMap);
var renderIcon = function renderIcon(_ref) {
  var status = _ref.status;
  if (ExceptionStatus.includes(status)) {
    var SVGComponent = _PropType.ExceptionMap[status];
    return /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames2.default)('jing-result__icon')
    }, /*#__PURE__*/React.createElement(SVGComponent, null));
  }
};
var prefixCls = 'jing-result';
var Result = function Result(props) {
  var title = props.title,
    extra = props.extra,
    place = props.place,
    className = props.className,
    children = props.children;
  var _classes = (0, _classnames2.default)(prefixCls, className);
  var contentclass = (0, _classnames2.default)("".concat(prefixCls, "__content"), _defineProperty({}, "".concat(prefixCls, "__content--").concat(place), !!place));
  return /*#__PURE__*/React.createElement("div", {
    className: _classes
  }, renderIcon(props), title && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__title")
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: contentclass
  }, children), extra && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__extra")
  }, extra));
};
Result.defaultProps = {
  status: 'empty',
  place: 'left'
};
var _default = Result;
exports.default = _default;