"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _jingUi = require("@jojobo/jing-ui");
var _demo = require("../../../demo");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _default = function _default() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_demo.DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5"
  }, /*#__PURE__*/React.createElement(_jingUi.Divider, {
    contentPosition: "center"
  })), /*#__PURE__*/React.createElement(_demo.DemoBlock, {
    title: "\u5C55\u793A\u6587\u672C"
  }, /*#__PURE__*/React.createElement(_jingUi.Divider, {
    contentPosition: "center"
  }, "\u6587\u672C")), /*#__PURE__*/React.createElement(_demo.DemoBlock, {
    title: "\u5185\u5BB9\u4F4D\u7F6E"
  }, /*#__PURE__*/React.createElement(_jingUi.Divider, {
    contentPosition: "right"
  }, "\u6587\u672C"), /*#__PURE__*/React.createElement(_jingUi.Divider, {
    contentPosition: "center"
  }, "\u6587\u672C")), /*#__PURE__*/React.createElement(_demo.DemoBlock, {
    title: "\u865A\u7EBF"
  }, /*#__PURE__*/React.createElement(_jingUi.Divider, {
    contentPosition: "center",
    dashed: true
  }, "\u6587\u672C")));
};
exports.default = _default;