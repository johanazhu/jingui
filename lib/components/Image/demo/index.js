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
  var src = 'https://s2.loli.net/2021/12/24/9NUnJXwYVPquDGf.png';
  var fits = ['contain', 'cover', 'fill', 'none', 'scale-down'];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Image, {
    width: "100",
    height: "100",
    src: src
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u586B\u5145\u72B6\u6001",
    className: "demo-jing-image"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Row, null, fits.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
      span: 8,
      key: index
    }, /*#__PURE__*/_react.default.createElement(_jingUi.Image, {
      width: "100%",
      height: "27vw",
      fit: item,
      src: src
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "text"
    }, item));
  }))), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u5706\u5F62\u56FE\u7247",
    className: "demo-jing-image"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Row, null, fits.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
      span: 8,
      key: index
    }, /*#__PURE__*/_react.default.createElement(_jingUi.Image, {
      round: true,
      width: "100%",
      height: "27vw",
      fit: item,
      src: src
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "text"
    }, item));
  }))), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u52A0\u8F7D\u4E2D\u63D0\u793A",
    className: "demo-jing-image"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Row, null, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 8
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Image, {
    width: "100%",
    height: "27vw"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "\u9ED8\u8BA4\u63D0\u793A")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 8
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Image, {
    loadingIcon: /*#__PURE__*/_react.default.createElement(_jingUi.Loading, {
      type: "spinner"
    }),
    width: "100%",
    height: "27vw"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "\u81EA\u5B9A\u4E49\u63D0\u793A")))), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u52A0\u8F7D\u4E2D\u63D0\u793A",
    className: "demo-jing-image"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Row, null, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 8
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Image, {
    width: "100%",
    height: "27vw",
    src: "x"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "\u9ED8\u8BA4\u63D0\u793A")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 8
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Image, {
    width: "100%",
    height: "27vw",
    src: "x",
    errorIcon: /*#__PURE__*/_react.default.createElement("div", null, "\u52A0\u8F7D\u5931\u8D25")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "\u81EA\u5B9A\u4E49\u63D0\u793A")))));
};
exports.default = _default;