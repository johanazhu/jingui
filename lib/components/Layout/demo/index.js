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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "demo-layout"
  }, /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Row, null, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 8
  }, "span: 8"), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 8
  }, "span: 8"), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 8
  }, "span: 8")), /*#__PURE__*/_react.default.createElement(_jingUi.Row, null, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 4
  }, "span: 8"), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    offset: 4,
    span: 10
  }, "offset: 4, span: 10")), /*#__PURE__*/_react.default.createElement(_jingUi.Row, null, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    offset: 12,
    span: 12
  }, "offset: 12, span: 12"))), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u5BF9\u9F50\u65B9\u5F0F"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Row, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, "span: 6")), /*#__PURE__*/_react.default.createElement(_jingUi.Row, {
    justify: "end"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, "span: 6")), /*#__PURE__*/_react.default.createElement(_jingUi.Row, {
    justify: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, "span: 6")), /*#__PURE__*/_react.default.createElement(_jingUi.Row, {
    justify: "space-around"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, "span: 6"))));
};
exports.default = _default;