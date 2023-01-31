import React, { Children } from 'react';
import classnames from 'classnames';
import CardBoxHeader from "./Header";
import CardBoxFooter from "./Footer";
import { Row } from "../Layout";
var prefixCls = 'jing-cardbox';
var CardBox = function CardBox(props) {
  var children = props.children,
    className = props.className;
  var cardChildren = Children.map(children, function (child, i) {
    return child;
  });
  return /*#__PURE__*/React.createElement(Row, {
    className: classnames(prefixCls, className)
  }, cardChildren);
};
CardBox.Header = CardBoxHeader;
CardBox.Footer = CardBoxFooter;
export default CardBox;