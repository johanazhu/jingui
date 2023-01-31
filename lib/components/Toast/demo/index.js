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
  var onDynicUpdate = function onDynicUpdate() {
    var remain = 4;
    var timer;
    var update = _jingUi.Toast.info({
      message: "\u8FD8\u5269 ".concat(remain + 1, " \u79D2"),
      duration: 5000,
      onClose: function onClose() {
        clearInterval(timer);
      }
    });
    timer = setInterval(function () {
      update.config({
        message: "\u8FD8\u5269 ".concat(remain--, " \u79D2")
      });
    }, 1000);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    padding: "",
    className: "demo-jing-popup"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Cell, {
    title: "\u6587\u5B57\u63D0\u793A",
    isLink: true,
    onClick: function onClick() {
      (0, _jingUi.Toast)('上不在高，有仙则灵');
    }
  }), /*#__PURE__*/_react.default.createElement(_jingUi.Cell, {
    title: "\u6587\u5B57\u63D0\u793A\u5305\u88F9\u8FC7\u957F",
    isLink: true,
    onClick: function onClick() {
      _jingUi.Toast.info({
        message: '落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声断衡阳之浦。',
        duration: 5000
      });
    }
  }), /*#__PURE__*/_react.default.createElement(_jingUi.Cell, {
    title: "\u52A0\u8F7D\u63D0\u793A",
    isLink: true,
    onClick: function onClick() {
      _jingUi.Toast.loading({
        message: '加载中...',
        forbidClick: true
      });
    }
  }), /*#__PURE__*/_react.default.createElement(_jingUi.Cell, {
    title: "\u6210\u529F\u63D0\u793A",
    isLink: true,
    onClick: function onClick() {
      // Toast.success('成功文案');
      _jingUi.Toast.success({
        message: '成功文案',
        duration: 100000
      });
    }
  }), /*#__PURE__*/_react.default.createElement(_jingUi.Cell, {
    title: "\u5931\u8D25\u63D0\u793A",
    isLink: true,
    onClick: function onClick() {
      _jingUi.Toast.fail('失败文案');
    }
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u52A8\u6001\u66F4\u65B0\u63D0\u793A",
    padding: "",
    className: "demo-jing-popup"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Cell, {
    title: "\u52A8\u6001\u66F4\u65B0\u63D0\u793A",
    isLink: true,
    onClick: onDynicUpdate
  })));
};
exports.default = _default;