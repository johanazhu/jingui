import * as React from 'react';
var prefixCls = 'jing-detaillist';
var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__header")
  }, props.title);
};
var Body = function Body(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__content")
  }, props.children);
};
var Line = function Line() {
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__line")
  });
};
var Item = function Item(props) {
  var leftText = props.leftText,
    rightChildren = props.rightChildren,
    customChildren = props.customChildren,
    leftStyle = props.leftStyle;
  if (!customChildren) {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__content--item")
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__content--item__left"),
      style: leftStyle
    }, leftText), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__content--item__right")
    }, rightChildren));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__content--item")
    }, customChildren);
  }
};
var DetailList = function DetailList(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: prefixCls
  }, props.children);
};
DetailList.Header = Header;
DetailList.Body = Body;
DetailList.Item = Item;
DetailList.Line = Line;
export default DetailList;