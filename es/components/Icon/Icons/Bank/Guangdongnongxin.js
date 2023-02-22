function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import JqbIcon from "../../JqbIcon";
import guangdongnongxin from "../../svg/bank/GDNX.svg";

// 广东省农村信用社联合社
var GDNX = function GDNX(props) {
  return /*#__PURE__*/React.createElement(JqbIcon, _extends({
    icon: guangdongnongxin
  }, props));
};
export default GDNX;