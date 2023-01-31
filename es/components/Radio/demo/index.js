import React from 'react';
import { Space } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
export default (function () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5"
  }, /*#__PURE__*/React.createElement(Space, {
    style: {
      backgroundColor: 'red'
    }
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u7A7A\u884C\u5C3A\u5BF8"
  }, /*#__PURE__*/React.createElement(Space, {
    scale: 1,
    style: {
      backgroundColor: 'blue'
    }
  }), /*#__PURE__*/React.createElement(Space, {
    scale: 2,
    style: {
      backgroundColor: 'red'
    }
  }), /*#__PURE__*/React.createElement(Space, {
    scale: 3,
    style: {
      backgroundColor: 'yellow'
    }
  }), /*#__PURE__*/React.createElement(Space, {
    scale: 4,
    style: {
      backgroundColor: 'green'
    }
  })));
});