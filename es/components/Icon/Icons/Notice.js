function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import JqbIcon from "../JqbIcon";
import notice from "../svg/notice.svg";
var Notice = function Notice(props) {
  return /*#__PURE__*/React.createElement(JqbIcon, _extends({
    icon: notice,
    fill: "#de3813"
  }, props));
};
export default Notice;