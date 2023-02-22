function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import JqbIcon from "../JqbIcon";
import password from "../svg/password.svg";
var Password = function Password(props) {
  return /*#__PURE__*/React.createElement(JqbIcon, _extends({
    icon: password,
    fill: "#26a4a4"
  }, props));
};
export default Password;