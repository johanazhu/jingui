import React from 'react';
import classnames from 'classnames';
var prefixCls = 'jing-cardbox';
var CardBoxFooter = function CardBoxFooter(props) {
  var children = props.children,
    className = props.className;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames("".concat(prefixCls, "__footer"), className)
  }, children);
};
export default CardBoxFooter;