"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var prefixCls = 'jing-loading';
var CircularIcon = function CircularIcon() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: (0, _classnames2.default)("".concat(prefixCls, "__circular")),
    viewBox: "25 25 50 50"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  }));
};
var SpinIcon = function SpinIcon() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Array(12).fill(null).map(function (_, index) {
    return /*#__PURE__*/_react.default.createElement("i", {
      key: index,
      className: (0, _classnames2.default)("".concat(prefixCls, "__line"), "".concat(prefixCls, "__line-").concat(index + 1))
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
  var iconStyle = (0, _react.useMemo)(function () {
    return _objectSpread({
      color: color
    }, (0, _utils.getSizeStyle)(size));
  }, [color, size]);
  var _style = _objectSpread({
    color: color,
    size: size
  }, style);
  var classes = (0, _classnames2.default)(prefixCls, className, "".concat(prefixCls, "--").concat(type), _defineProperty({}, "".concat(prefixCls, "--vertical"), !!vertical));
  var renderText = function renderText() {
    if (children) {
      return /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(prefixCls, "__text"),
        style: {
          fontSize: (0, _utils.addUnit)(textSize),
          color: textColor !== null && textColor !== void 0 ? textColor : color
        }
      }, children);
    }
    return null;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes,
    style: _style
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames2.default)("".concat(prefixCls, "__icon"), "".concat(prefixCls, "__icon--").concat(type)),
    style: iconStyle
  }, type === 'circular' ? /*#__PURE__*/_react.default.createElement(CircularIcon, null) : /*#__PURE__*/_react.default.createElement(SpinIcon, null)), renderText());
};
Loading.defaultProps = {
  type: 'circular'
  // color: '#c8c8c8',
  // size: '30px',
  // textSize: '14px',
  // textColor: '#c8c8c8',
  // vertical: false,
};
var _default = /*#__PURE__*/(0, _react.memo)(Loading);
exports.default = _default;