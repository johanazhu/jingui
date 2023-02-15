import React, { memo } from 'react';
import Portal from "../Popup/Portal";
import classnames from 'classnames';
import { IconFZ } from "../Icon";
var prefixCls = 'jing-orientation';
var Orientation = function Orientation(props) {
  console.log('props', props);
  var className = props.className,
    style = props.style;
  var classes = classnames(className, prefixCls);
  return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement("div", {
    className: classes,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__inner")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__inner-icon")
  }, /*#__PURE__*/React.createElement(IconFZ, {
    size: "auto"
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__inner-desc")
  }, "\u4E3A\u4E86\u66F4\u597D\u7684\u4F53\u9A8C"), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__inner-desc")
  }, "\u8BF7\u7AD6\u5411\u4F7F\u7528\u60A8\u7684\u624B\u673A"))));
};
export default /*#__PURE__*/memo(Orientation);