"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames3 = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useTabActive(initialValue) {
  var _useState = (0, _react.useState)(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var updateValue = function updateValue(res) {
    setValue(res);
  };
  return {
    value: value,
    updateValue: updateValue
  };
}
function useTabDisabled(initialValue) {
  var _useState3 = (0, _react.useState)(initialValue),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var updateValue = function updateValue(res) {
    setValue(res);
  };
  return {
    value: value,
    updateValue: updateValue
  };
}
var prefixCls = 'jing-tab';
var Title = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _classnames;
  var active = props.active,
    img = props.img,
    value = props.value,
    disabled = props.disabled,
    scrollable = props.scrollable,
    onClick = props.onClick;
  var oValue = useTabActive(value);
  var oDisabled = useTabDisabled(disabled);
  (0, _react.useEffect)(function () {
    oValue.updateValue(value);
  }, [value]);
  (0, _react.useEffect)(function () {
    oDisabled.updateValue(disabled);
  }, [disabled]);
  var classes = (0, _classnames3.default)(prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "--img"), !!img), _defineProperty(_classnames, "".concat(prefixCls, "--active"), active), _defineProperty(_classnames, "".concat(prefixCls, "--disabled"), oDisabled === null || oDisabled === void 0 ? void 0 : oDisabled.value), _classnames));
  var spanclasses = (0, _classnames3.default)("".concat(prefixCls, "__text"), _defineProperty({}, "".concat(prefixCls, "__text--ellipsis"), !scrollable));
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: classes,
    onClick: onClick,
    "aria-selected": active
  }, img && /*#__PURE__*/_react.default.createElement("img", {
    className: "".concat(prefixCls, "__img"),
    src: img,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: spanclasses
  }, oValue.value));
});
var _default = /*#__PURE__*/(0, _react.memo)(Title);
exports.default = _default;