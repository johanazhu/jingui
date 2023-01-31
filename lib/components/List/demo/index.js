"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _jingUi = require("@jojobo/jing-ui");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "jing-page jing-page-layout"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Panel, {
    title: "\u57FA\u672C\u6392\u7248"
  }, /*#__PURE__*/_react.default.createElement("div", null, "111"), /*#__PURE__*/_react.default.createElement(List.Title, {
    leftText: "\u5217\u8868\u6807\u9898",
    rightText: "\u94FE\u63A5",
    onRightClick: true
  })));
};
exports.default = _default;