function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { memo } from 'react';
import classnames from 'classnames';
var prefixCls = 'jing-tabbar__item';
var TabBarItem = function TabBarItem(props) {
  var itemKey = props.itemKey,
    style = props.style,
    pagePath = props.pagePath,
    text = props.text,
    icon = props.icon,
    selectedIcon = props.selectedIcon,
    selected = props.selected,
    onChange = props.onChange;
  var change = function change() {
    if (typeof onChange === 'function') {
      onChange(pagePath);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classnames("".concat(prefixCls), _defineProperty({}, "".concat(prefixCls, "--active"), selected)),
    style: style,
    key: itemKey,
    onClick: change
  }, icon && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "--icon")
  }, selected ? selectedIcon : icon), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "--title")
  }, text));
};
export default /*#__PURE__*/memo(TabBarItem);