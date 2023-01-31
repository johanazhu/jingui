import React, { memo } from 'react';
import classnames from 'classnames';
var prefixCls = 'jing-sticky';
var Sticky = function Sticky(props) {
  var children = props.children,
    style = props.style,
    className = props.className;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(prefixCls, className),
    style: style
  }, children);
};
export default /*#__PURE__*/memo(Sticky);