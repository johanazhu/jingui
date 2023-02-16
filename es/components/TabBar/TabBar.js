import React from 'react';
import classnames from 'classnames';
import { isFunction } from "../../utils";
var prefixCls = 'jing-tabbar';
var TabBar = function TabBar(props) {
  var className = props.className,
    activeKey = props.activeKey,
    defaultActiveKey = props.defaultActiveKey,
    safeAreaInsetBottom = props.safeAreaInsetBottom,
    fixed = props.fixed,
    children = props.children,
    onChange = props.onChange,
    beforeChange = props.beforeChange;
  var onPageChange = function onPageChange(value, pagePath) {
    if (isFunction(beforeChange)) {
      var canClick = beforeChange(value);
      if (canClick) {
        canClick.then(function () {
          if (typeof onChange === 'function') {
            onChange(value, pagePath);
          }
        });
      }
      return;
    }
    if (isFunction(onChange)) {
      onChange(value, pagePath);
    }
  };
  var getSelected = function getSelected(index, itemKey) {
    if (!activeKey) {
      if (!defaultActiveKey && index === 0) {
        return true;
      }
      return defaultActiveKey === itemKey;
    }
    return activeKey === itemKey;
  };
  var enableSafeArea = function enableSafeArea() {
    return safeAreaInsetBottom !== null && safeAreaInsetBottom !== void 0 ? safeAreaInsetBottom : fixed;
  };
  var items = React.Children.map(children, function (element, index) {
    if (! /*#__PURE__*/React.isValidElement(element)) return null;
    return /*#__PURE__*/React.cloneElement(element, {
      key: index,
      // @ts-ignore
      pagePath: element.props.pagePath,
      text: element.props.text,
      icon: element.props.icon,
      selectedIcon: element.props.selectedIcon,
      className: element.props.className,
      style: element.props.style,
      selected: getSelected(index, element.props.itemKey),
      onChange: function onChange(pagePath) {
        return onPageChange(element.props.itemKey, pagePath);
      }
    });
  });
  if (enableSafeArea()) {
    return /*#__PURE__*/React.createElement("div", {
      className: classnames("".concat(prefixCls, "-container"))
    }, /*#__PURE__*/React.createElement("div", {
      className: classnames(prefixCls, className)
    }, items), /*#__PURE__*/React.createElement("div", {
      className: "jing-iphonex-extra-height"
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(prefixCls, className)
  }, items);
};
TabBar.defaultProps = {
  fixed: true,
  defaultActiveKey: 0
};
export default TabBar;