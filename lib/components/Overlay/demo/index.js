"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _jingUi = require("@jojobo/jing-ui");
var _demo = require("../../../demo");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _default = function _default() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    visible1 = _useState4[0],
    setVisible1 = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    visible2 = _useState6[0],
    setVisible2 = _useState6[1];
  var toggle = function toggle() {
    return setVisible(!visible);
  };
  var toggle1 = function toggle1() {
    return setVisible1(!visible1);
  };
  var toggle2 = function toggle2() {
    return setVisible2(!visible2);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    padding: "",
    className: "demo-jing-overlay"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Button, {
    type: "primary",
    onClick: toggle
  }, "\u663E\u793A\u906E\u7F69\u5C42"), /*#__PURE__*/_react.default.createElement(_jingUi.Overlay, {
    visible: visible,
    onClick: toggle
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u5D4C\u5165\u5185\u5BB9",
    padding: "",
    className: "demo-jing-overlay"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Button, {
    type: "primary",
    onClick: toggle1
  }, "\u5D4C\u5165\u5185\u5BB9"), /*#__PURE__*/_react.default.createElement(_jingUi.Overlay, {
    visible: visible1,
    onClick: toggle1
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "block"
  })))), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u900F\u660E\u80CC\u666F",
    padding: "",
    className: "demo-jing-overlay"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Button, {
    type: "primary",
    onClick: toggle2
  }, "\u900F\u660E\u80CC\u666F"), /*#__PURE__*/_react.default.createElement(_jingUi.Overlay, {
    type: "transparent",
    visible: visible2,
    onClick: toggle2
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "block",
    style: {
      background: '#ddd'
    }
  })))));
};
exports.default = _default;