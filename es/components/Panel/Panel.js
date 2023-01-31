import React from 'react';
import classnames from 'classnames';
var prefixCls = 'jing-panel';
var Panel = function Panel(props) {
  var className = props.className,
    children = props.children,
    title = props.title,
    more = props.more;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(prefixCls, className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__header")
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__header-title")
  }, title), more && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__header-more")
  }, more)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__body")
  }, children));
};
export default Panel;