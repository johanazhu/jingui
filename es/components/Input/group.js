import * as React from 'react';
import classnames from 'classnames';
var prefixCls = 'jing-input';
var Group = function Group(props) {
  var className = props.className,
    children = props.children,
    style = props.style;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames("".concat(prefixCls, "__group"), className),
    style: style
  }, children);
};
export default Group;