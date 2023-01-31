function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import JqbIcon from "../JqbIcon";
import back from "../svg/back.svg";
var Back = function Back(props) {
  return /*#__PURE__*/React.createElement(JqbIcon, _extends({
    icon: back,
    color: "grey"
  }, props));
};
export default Back;