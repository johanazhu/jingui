"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames4 = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var prefixCls = 'jing-timeline--item';
var TimelineItem = function TimelineItem(props) {
  var header = props.header,
    footer = props.footer,
    color = props.color,
    dashed = props.dashed,
    count = props.count,
    percent = props.percent,
    showPercent = props.showPercent,
    i = props.i,
    canShowColor = props.canShowColor;
  var dotClass = (0, _classnames4.default)("".concat(prefixCls, "__content"), _defineProperty({}, "".concat(prefixCls, "__content--dashed"), dashed));
  var stepClass = (0, _classnames4.default)("".concat(prefixCls, "__step"), _defineProperty({}, "".concat(prefixCls, "__step--dashed"), dashed));
  var isShowColor =
  // @ts-ignore
  parseInt(percent) - "".concat(count && i && 100 / count * i);
  return /*#__PURE__*/_react.default.createElement("li", {
    className: (0, _classnames4.default)(prefixCls, _defineProperty({}, "".concat(prefixCls, "--isShowPercent"), showPercent)),
    style: {
      width: "".concat(count && 100 / count, "%")
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: stepClass,
    style: {
      backgroundColor: isShowColor > 0 && percent === '100%' ? color : ''
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "__header")
  }, header), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "__contents")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: dotClass,
    style: {
      backgroundColor: isShowColor > 0 && canShowColor && !dashed ? color : '',
      borderColor: isShowColor > 0 && canShowColor ? color : ''
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "__footer")
  }, footer));
};
TimelineItem.defaultProps = {
  dashed: false,
  canShowColor: true
};
var _default = /*#__PURE__*/(0, _react.memo)(TimelineItem);
exports.default = _default;