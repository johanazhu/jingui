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
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.NoticeBar, {
    text: "\u751F\u6D3B\u4E0D\u662F\u8FD9\u6837\u5C31\u662F\u90A3\u6837\uFF0C\u603B\u4E4B\uFF0C\u4E0D\u4F1A\u662F\u4F60\u60F3\u7684\u90A3\u6837\u3002"
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u6EDA\u52A8\u64AD\u653E",
    padding: "",
    className: "demo-jing-noticebar"
  }, /*#__PURE__*/_react.default.createElement("p", null, "\u6587\u5B57\u8F83\u77ED\u65F6\uFF0C\u901A\u8FC7\u8BBE\u7F6E scrollable \u5C5E\u6027\u5F00\u542F\u6EDA\u52A8\u64AD\u653E"), /*#__PURE__*/_react.default.createElement(_jingUi.NoticeBar, {
    scrollable: true,
    text: "\u4F60\u7684\u8138\uFF0C\u4E00\u5206\u5929\u6CE8\u5B9A\uFF0C\u4E5D\u5206\u770B\u6EE4\u955C\u3002"
  }), /*#__PURE__*/_react.default.createElement("p", null, "\u6587\u5B57\u8F83\u957F\u65F6\uFF0C\u901A\u8FC7\u7981\u7528 scrollable \u5C5E\u6027\u5173\u95ED\u6EDA\u52A8\u64AD\u653E"), /*#__PURE__*/_react.default.createElement(_jingUi.NoticeBar, {
    scrollable: false,
    text: "\u4E16\u754C\u5F88\u516C\u5E73\uFF0C\u6BD4\u4F60\u5FD9\u7684\u4EBA\u8D5A\u7684\u6BD4\u4F60\u591A\uFF0C\u6BD4\u4F60\u95F2\u7684\u4EBA\u4F60\u8D5A\u7684\u6BD4\u4ED6\u5C11\u3002"
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u52A8\u753B\u65F6\u957F",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.NoticeBar, {
    scrollable: true,
    duration: 3,
    text: "\u6211\u6CA1\u6709\u53BB\u8FC7\u4F60\u7684\u57CE\u5E02\uFF0C\u4F46\u6211\u5237\u8FC7\u4F60\u90A3\u7684\u9898\u3002"
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u5C45\u4E2D",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.NoticeBar, {
    center: true,
    text: "\u522B\u4F4E\u5934\uFF0C\u53CC\u4E0B\u5DF4\u4F1A\u9732\u3002"
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "closeable\u6A21\u5F0F",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.NoticeBar, {
    mode: "closeable",
    text: "\u5355\u8EAB\u8131\u53D1\u53C8\u6CA1\u94B1\uFF0C\u8DD1\u6B65\u8FDB\u5165\u4E2D\u8001\u5E74\u3002",
    onClose: function onClose() {
      alert('关闭按钮');
    }
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "link\u6A21\u5F0F",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.NoticeBar, {
    mode: "link",
    text: "\u4F60\u73B0\u5728\u6240\u62E5\u6709\u7684\uFF0C\u90FD\u4E0D\u66FE\u662F\u4F60\u7684\uFF0C\u56E0\u4E3A\u672A\u6765\u4F60\u90FD\u4F1A\u5931\u53BB\u3002",
    onClick: function onClick() {
      alert('点击');
    }
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u70B9\u51FB\u4E8B\u4EF6",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.NoticeBar, {
    text: "\u5982\u679C\u5168\u4E16\u754C\u90FD\u4E0D\u8981\u4F60\u4E86\uFF0C\u4F60\u8981\u8BB0\u5F97\u8FD8\u6709\u6211\uFF0C\u6211\u4E5F\u4E0D\u8981\u4F60\u3002",
    onClick: function onClick() {
      alert('点击');
    }
  })));
};
exports.default = _default;