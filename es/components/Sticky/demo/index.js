import React from 'react';
import { Sticky, Button } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
import "./index.scss";
export default (function () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    className: "demo-jing-sticky",
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /*#__PURE__*/React.createElement(Sticky, null, /*#__PURE__*/React.createElement(Button, {
    type: "primary"
  }, "\u57FA\u7840\u7528\u6CD5"))));
});