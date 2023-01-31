import React from 'react';
import { Timeline } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
export default (function () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u7840\u64CD\u4F5C"
  }, /*#__PURE__*/React.createElement(Timeline, {
    percent: "15%",
    color: "#4666D8"
  }, /*#__PURE__*/React.createElement(Timeline.Item, {
    header: "\u6295\u8D44\u6210\u529F",
    footer: "2021-07-12"
  }), /*#__PURE__*/React.createElement(Timeline.Item, {
    header: "\u8D77\u606F\u65E5\u671F",
    footer: "2021-07-13"
  }), /*#__PURE__*/React.createElement(Timeline.Item, {
    header: "\u9884\u8BA1\u5230\u671F",
    footer: "2022-07-12"
  }), /*#__PURE__*/React.createElement(Timeline.Item, {
    header: "\u9884\u8BA1\u5230\u8D26",
    footer: "1~5\u4E2A\u5DE5\u4F5C\u65E5",
    dashed: true
  }))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "100%\u7206\u53D1\u6D41"
  }, /*#__PURE__*/React.createElement(Timeline, {
    percent: "100%"
  }, /*#__PURE__*/React.createElement(Timeline.Item, {
    header: "\u6295\u8D44\u6210\u529F",
    footer: "2021-07-12"
  }), /*#__PURE__*/React.createElement(Timeline.Item, {
    header: "\u8D77\u606F\u65E5\u671F",
    footer: "2021-07-13"
  }), /*#__PURE__*/React.createElement(Timeline.Item, {
    header: "\u9884\u8BA1\u5230\u671F",
    footer: "2022-07-12"
  }), /*#__PURE__*/React.createElement(Timeline.Item, {
    header: "\u9884\u8BA1\u5230\u8D26",
    footer: "1~5\u4E2A\u5DE5\u4F5C\u65E5"
  }))));
});