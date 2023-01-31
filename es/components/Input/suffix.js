import * as React from 'react';
import classnames from 'classnames';
import Group from "./group";
import Clear from "./clear";
var prefixCls = 'jing-input';
export default (function (props) {
  var className = props.className,
    style = props.style,
    icon = props.icon;
  return /*#__PURE__*/React.createElement(Group, {
    className: classnames("".concat(prefixCls, "__group-suffix"), className),
    style: style
  }, /*#__PURE__*/React.createElement(Clear, props), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__group-suffix-icon")
  }, icon));
});