import React from 'react';
import { Panel } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
export default (function () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    background: ""
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "\u6807\u9898",
    more: /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: function onClick() {
        return alert('click more');
      }
    }, "\u66F4\u591A")
  }, /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: {
      padding: '1rem'
    }
  }, "\u5185\u5BB9"))));
});