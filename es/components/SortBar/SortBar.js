import React, { cloneElement } from 'react';
import classnames from 'classnames';
import Sticky from "../Sticky";
import Filter from "./Filter";
var prefixCls = 'jing-sortbar';
var SortBar = function SortBar(props) {
  var className = props.className,
    style = props.style,
    activeKey = props.activeKey,
    type = props.type,
    title = props.title,
    sticky = props.sticky,
    children = props.children,
    onClick = props.onClick,
    onChange = props.onChange;
  var onHandleClick = function onHandleClick(key, status) {
    onChange && onChange(key, status);
  };
  var items = React.Children.map(children, function (element, index) {
    if (! /*#__PURE__*/React.isValidElement(element)) return null;
    return /*#__PURE__*/cloneElement(element, {
      key: index,
      // @ts-ignore
      title: element.props.title,
      itemKey: element.props.itemKey || index,
      selected: activeKey === element.props.itemKey,
      onClick: function onClick(status) {
        return onHandleClick(element.props.itemKey, status);
      }
    });
  });
  var classes = classnames(prefixCls, className, "".concat(prefixCls, "--").concat(type));
  var Content = /*#__PURE__*/React.createElement("div", {
    className: classes,
    style: style
  }, items, /*#__PURE__*/React.createElement(Filter, {
    title: title,
    onClick: onClick
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, sticky ? /*#__PURE__*/React.createElement(Sticky, null, " ", Content, " ") : Content);
};
SortBar.defaultProps = {
  sticky: true,
  type: 'normal'
};
export default SortBar;