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
    className: "demo-jing-sticky",
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Sticky, null, /*#__PURE__*/_react.default.createElement(_jingUi.Button, {
    type: "primary"
  }, "\u57FA\u7840\u7528\u6CD5"))));
};
exports.default = _default;