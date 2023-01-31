"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _jingUi = require("@jojobo/jing-ui");
var _demo = require("../../../demo");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "demo-loading"
  }, /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u52A0\u8F7D\u7C7B\u578B",
    padding: "",
    className: "demo-jing-loading"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Loading, null), /*#__PURE__*/_react.default.createElement(_jingUi.Loading, {
    type: "spinner"
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u81EA\u5B9A\u4E49\u989C\u8272",
    padding: "",
    className: "demo-jing-loading"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Loading, {
    color: "#4664D2"
  }), /*#__PURE__*/_react.default.createElement(_jingUi.Loading, {
    type: "spinner",
    color: "#4664D2"
  }), /*#__PURE__*/_react.default.createElement(_jingUi.Loading, {
    type: "spinner",
    color: "#FF6414"
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u81EA\u5B9A\u4E49\u5927\u5C0F",
    padding: "",
    className: "demo-jing-loading"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Loading, {
    size: "24"
  }), /*#__PURE__*/_react.default.createElement(_jingUi.Loading, {
    type: "spinner",
    size: "24"
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u52A0\u8F7D\u6587\u6848",
    padding: "",
    className: "demo-jing-loading"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Loading, {
    size: "24"
  }, "\u52A0\u8F7D\u4E2D..")), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u5782\u76F4\u6392\u5217",
    padding: "",
    className: "demo-jing-loading"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Loading, {
    size: "24",
    vertical: true
  }, "\u52A0\u8F7D\u4E2D..")), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u81EA\u5B9A\u4E49\u6587\u6848\u989C\u8272",
    padding: "",
    className: "demo-jing-loading"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Loading, {
    size: "24",
    vertical: true,
    color: "#4664D2",
    textColor: "#4664D2"
  }, "\u52A0\u8F7D\u4E2D.."), /*#__PURE__*/_react.default.createElement(_jingUi.Loading, {
    size: "24",
    vertical: true,
    color: "#FF6414",
    textColor: "#FF6414"
  }, "\u52A0\u8F7D\u4E2D..")));
};
exports.default = _default;