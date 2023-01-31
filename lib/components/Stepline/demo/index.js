"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _jingUi = require("@jojobo/jing-ui");
var _demo = require("../../../demo");
require("./index.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Stepline, {
    percent: "90%",
    color: "#3264c8"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F01"
  }, "1"), /*#__PURE__*/_react.default.createElement(_jingUi.Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F02"
  }, "2"), /*#__PURE__*/_react.default.createElement(_jingUi.Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F03"
  }, "3"))), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    className: "demo-jing-stepline",
    title: "\u7701\u7565\u53F7\u6A21\u5F0F"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Stepline, {
    percent: "61%",
    type: "ellipsis"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F01"
  }, "1"), /*#__PURE__*/_react.default.createElement(_jingUi.Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F02"
  }, "2"), /*#__PURE__*/_react.default.createElement(_jingUi.Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F03"
  }, "3")), /*#__PURE__*/_react.default.createElement(_jingUi.Stepline, {
    percent: "90%",
    type: "ellipsis"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F01"
  }, "1"), /*#__PURE__*/_react.default.createElement(_jingUi.Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F02"
  }, "2"), /*#__PURE__*/_react.default.createElement(_jingUi.Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F03"
  }, "3"), /*#__PURE__*/_react.default.createElement(_jingUi.Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F04"
  }, "3"))));
};
exports.default = _default;