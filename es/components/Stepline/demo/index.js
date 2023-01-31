import React from 'react';
import { Stepline } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
import "./index.scss";
export default (function () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /*#__PURE__*/React.createElement(Stepline, {
    percent: "90%",
    color: "#3264c8"
  }, /*#__PURE__*/React.createElement(Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F01"
  }, "1"), /*#__PURE__*/React.createElement(Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F02"
  }, "2"), /*#__PURE__*/React.createElement(Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F03"
  }, "3"))), /*#__PURE__*/React.createElement(DemoBlock, {
    className: "demo-jing-stepline",
    title: "\u7701\u7565\u53F7\u6A21\u5F0F"
  }, /*#__PURE__*/React.createElement(Stepline, {
    percent: "61%",
    type: "ellipsis"
  }, /*#__PURE__*/React.createElement(Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F01"
  }, "1"), /*#__PURE__*/React.createElement(Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F02"
  }, "2"), /*#__PURE__*/React.createElement(Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F03"
  }, "3")), /*#__PURE__*/React.createElement(Stepline, {
    percent: "90%",
    type: "ellipsis"
  }, /*#__PURE__*/React.createElement(Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F01"
  }, "1"), /*#__PURE__*/React.createElement(Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F02"
  }, "2"), /*#__PURE__*/React.createElement(Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F03"
  }, "3"), /*#__PURE__*/React.createElement(Stepline.Item, {
    footer: "\u6B65\u9AA4\u540D\u79F04"
  }, "3"))));
});