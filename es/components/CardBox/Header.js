import React from 'react';
import classnames from 'classnames';
var prefixCls = 'jing-cardbox';
var CardBoxHeader = function CardBoxHeader(props) {
  var children = props.children,
    className = props.className;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames("".concat(prefixCls, "__header"), className)
  }, children);
};
export default CardBoxHeader;