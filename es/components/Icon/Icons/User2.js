function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import JqbIcon from "../JqbIcon";
import user2 from "../svg/user2.svg";
var User2 = function User2(props) {
  return /*#__PURE__*/React.createElement(JqbIcon, _extends({
    icon: user2,
    color: "grey"
  }, props));
};
export default User2;