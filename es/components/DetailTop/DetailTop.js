import React from 'react';
import classnames from 'classnames';
var prefixCls = 'jing-detailtop';
var DetailTop = function DetailTop(props) {
  var bigText = props.bigText,
    text = props.text,
    desc = props.desc,
    bigTextStyle = props.bigTextStyle,
    className = props.className,
    descClassName = props.descClassName,
    color = props.color;
  return /*#__PURE__*/React.createElement("div", {
    className: prefixCls
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames('DetailTop-bigtext', className, "DetailTop-bigtext-".concat(color)),
    style: bigTextStyle
  }, ' ', bigText), /*#__PURE__*/React.createElement("div", {
    className: "DetailTop-text"
  }, " ", text), /*#__PURE__*/React.createElement("div", {
    className: classnames('DetailTop-desc', descClassName)
  }, ' ', desc));
};
DetailTop.defaultProps = {
  bigText: '',
  text: '',
  desc: ''
};
export default DetailTop;