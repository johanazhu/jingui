import React from 'react';
import classnames from 'classnames';
import "./index.scss";
export var DemoBlock = function DemoBlock(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('jing-demo', props.className)
  }, props.title && /*#__PURE__*/React.createElement("div", {
    className: "jing-demo__title"
  }, props.title), /*#__PURE__*/React.createElement("div", {
    className: "jing-demo__content",
    style: {
      padding: props.padding,
      background: props.background,
      border: props.border
    }
  }, props.children));
};
DemoBlock.defaultProps = {
  padding: '10px 16px',
  background: '#ffffff'
};