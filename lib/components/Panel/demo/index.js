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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    background: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Panel, {
    title: "\u6807\u9898",
    more: /*#__PURE__*/_react.default.createElement("a", {
      href: "#",
      onClick: function onClick() {
        return alert('click more');
      }
    }, "\u66F4\u591A")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "box",
    style: {
      padding: '1rem'
    }
  }, "\u5185\u5BB9"))));
};
exports.default = _default;