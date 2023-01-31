import React, { memo } from 'react';
import classnames from 'classnames';
var prefixCls = 'jing-typography';
var Typography = function Typography(props) {
  var children = props.children,
    className = props.className,
    innerHtml = props.innerHtml;
  if (innerHtml) {
    return /*#__PURE__*/React.createElement("div", {
      className: classnames(prefixCls, className),
      dangerouslySetInnerHTML: {
        __html: innerHtml
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(prefixCls, className)
  }, children);
};
export default /*#__PURE__*/memo(Typography);