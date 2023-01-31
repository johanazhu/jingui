import React from 'react';
import { Loading } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
export default (function () {
  return /*#__PURE__*/React.createElement("div", {
    className: "demo-loading"
  }, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u52A0\u8F7D\u7C7B\u578B",
    padding: "",
    className: "demo-jing-loading"
  }, /*#__PURE__*/React.createElement(Loading, null), /*#__PURE__*/React.createElement(Loading, {
    type: "spinner"
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u81EA\u5B9A\u4E49\u989C\u8272",
    padding: "",
    className: "demo-jing-loading"
  }, /*#__PURE__*/React.createElement(Loading, {
    color: "#4664D2"
  }), /*#__PURE__*/React.createElement(Loading, {
    type: "spinner",
    color: "#4664D2"
  }), /*#__PURE__*/React.createElement(Loading, {
    type: "spinner",
    color: "#FF6414"
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u81EA\u5B9A\u4E49\u5927\u5C0F",
    padding: "",
    className: "demo-jing-loading"
  }, /*#__PURE__*/React.createElement(Loading, {
    size: "24"
  }), /*#__PURE__*/React.createElement(Loading, {
    type: "spinner",
    size: "24"
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u52A0\u8F7D\u6587\u6848",
    padding: "",
    className: "demo-jing-loading"
  }, /*#__PURE__*/React.createElement(Loading, {
    size: "24"
  }, "\u52A0\u8F7D\u4E2D..")), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u5782\u76F4\u6392\u5217",
    padding: "",
    className: "demo-jing-loading"
  }, /*#__PURE__*/React.createElement(Loading, {
    size: "24",
    vertical: true
  }, "\u52A0\u8F7D\u4E2D..")), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u81EA\u5B9A\u4E49\u6587\u6848\u989C\u8272",
    padding: "",
    className: "demo-jing-loading"
  }, /*#__PURE__*/React.createElement(Loading, {
    size: "24",
    vertical: true,
    color: "#4664D2",
    textColor: "#4664D2"
  }, "\u52A0\u8F7D\u4E2D.."), /*#__PURE__*/React.createElement(Loading, {
    size: "24",
    vertical: true,
    color: "#FF6414",
    textColor: "#FF6414"
  }, "\u52A0\u8F7D\u4E2D..")));
});