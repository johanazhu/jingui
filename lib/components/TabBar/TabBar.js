"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  var onChildChange = function onChildChange(value) {
    if ((0, _utils.isFunction)(beforeChange)) {
      var canClick = beforeChange(value);
      if (canClick) {
        canClick.then(function () {
          if (typeof onChange === 'function') {
            onChange(value);
          }
        });
      }
      return;
    }
    if ((0, _utils.isFunction)(onChange)) {
      onChange(value);
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
  var items = _react.default.Children.map(children, function (element, index) {
    if (! /*#__PURE__*/_react.default.isValidElement(element)) return null;
    return /*#__PURE__*/_react.default.cloneElement(element, {
      key: index,
      // @ts-ignore
      title: element.props.title,
      icon: element.props.icon,
      greyIcon: element.props.greyIcon,
      itemKey: element.props.itemKey || index,
      className: element.props.className,
      style: element.props.style,
      selected: getSelected(index, element.props.itemKey),
      onChange: function onChange() {
        return onChildChange(element.props.itemKey);
      }
    });
  });
  if (enableSafeArea()) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)("".concat(prefixCls, "-container"))
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(prefixCls, className)
    }, items), /*#__PURE__*/_react.default.createElement("div", {
      className: "jing-iphonex-extra-height"
    }));
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(prefixCls, className)
  }, items);
};
TabBar.defaultProps = {
  fixed: true,
  defaultActiveKey: 0
};
var _default = TabBar;
exports.default = _default;