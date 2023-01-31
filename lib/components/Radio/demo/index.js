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
    title: "\u57FA\u672C\u7528\u6CD5"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Space, {
    style: {
      backgroundColor: 'red'
    }
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u7A7A\u884C\u5C3A\u5BF8"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Space, {
    scale: 1,
    style: {
      backgroundColor: 'blue'
    }
  }), /*#__PURE__*/_react.default.createElement(_jingUi.Space, {
    scale: 2,
    style: {
      backgroundColor: 'red'
    }
  }), /*#__PURE__*/_react.default.createElement(_jingUi.Space, {
    scale: 3,
    style: {
      backgroundColor: 'yellow'
    }
  }), /*#__PURE__*/_react.default.createElement(_jingUi.Space, {
    scale: 4,
    style: {
      backgroundColor: 'green'
    }
  })));
};
exports.default = _default;