import React from 'react';
import { Button } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
export default (function () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u7C7B\u578B",
    className: "demo-jing-button",
    padding: "10px 16px 0"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary"
  }, "\u4E3B\u8272\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, {
    type: "second-primary"
  }, "\u6B21\u8272\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, null, "\u9ED8\u8BA4\u6309\u94AE")), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u6734\u7D20\u6309\u94AE",
    className: "demo-jing-button",
    padding: "10px 16px 0"
  }, /*#__PURE__*/React.createElement(Button, {
    plain: true,
    type: "primary"
  }, "\u6734\u7D20\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, {
    plain: true,
    type: "second-primary"
  }, "\u6734\u7D20\u6309\u94AE")), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u7981\u7528\u72B6\u6001",
    className: "demo-jing-button",
    padding: "10px 16px 0"
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: true,
    type: "primary"
  }, "\u7981\u7528\u72B6\u6001"), /*#__PURE__*/React.createElement(Button, {
    disabled: true,
    type: "second-primary"
  }, "\u7981\u7528\u72B6\u6001")), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u52A0\u8F7D\u72B6\u6001",
    className: "demo-jing-button",
    padding: "10px 16px 0"
  }, /*#__PURE__*/React.createElement(Button, {
    loading: true,
    type: "primary"
  }), /*#__PURE__*/React.createElement(Button, {
    loading: true,
    type: "second-primary"
  }, "\u52A0\u8F7D\u72B6\u6001")), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u6309\u94AE\u5F62\u72B6",
    className: "demo-jing-button",
    padding: "10px 16px 0"
  }, /*#__PURE__*/React.createElement(Button, {
    round: true,
    type: "primary"
  }, "\u5706\u5F62\u6309\u94AE")), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u6309\u94AE\u5C3A\u5BF8",
    className: "demo-jing-button",
    padding: "10px 16px 0"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    size: "large"
  }, "\u5927\u53F7\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    size: "normal"
  }, "\u4E2D\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    size: "small"
  }, "\u5C0F\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    size: "mini",
    round: true
  }, "\u8FF7\u4F60\u6309\u94AE")), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u5757\u7EA7\u5143\u7D20",
    className: "demo-jing-button",
    padding: "10px 16px 0"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    block: true
  }, "\u5757\u7EA7\u5143\u7D20")), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u81EA\u5B9A\u4E49\u989C\u8272",
    className: "demo-jing-button",
    padding: "10px 16px 0"
  }, /*#__PURE__*/React.createElement(Button, {
    color: "#7232dd"
  }, "\u5355\u8272\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, {
    color: "#7232dd",
    plain: true
  }, "\u5355\u8272\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, {
    color: "linear-gradient(to right, #ff6034, #ee0a24)"
  }, "\u6E10\u53D8\u6309\u94AE")), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u70B9\u51FB\u4E8B\u4EF6",
    className: "demo-jing-button",
    padding: "10px 16px 0"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    block: true,
    onClick: function onClick() {
      return alert('我错了');
    }
  }, "\u6709\u672C\u4E8B\u5C31\u6765\u70B9\u6211\u554A")));
});