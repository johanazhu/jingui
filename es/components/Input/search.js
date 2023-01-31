function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo } from 'react';
import Input from "./base";
import Prefix from "./prefix";
// 不适用，没有搜索图标
var Search = function Search(props) {
  var value = props.value,
    icon = props.icon,
    className = props.className;
  return /*#__PURE__*/React.createElement(Prefix, {
    icon: icon,
    className: className
  }, /*#__PURE__*/React.createElement(Input, _extends({
    value: value
  }, props)));
};
export default /*#__PURE__*/memo(Search);