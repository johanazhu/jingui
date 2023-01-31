function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo } from 'react';
import classnames from 'classnames';
import Clear from "./clear";
var prefixCls = 'jing-input';
var Captcha = function Captcha(props) {
  var captcha = props.captcha,
    onHandleChangeCaptcha = props.onHandleChangeCaptcha;
  var captchaRender = function captchaRender() {
    return /*#__PURE__*/React.createElement("div", {
      className: classnames("".concat(prefixCls, "__captcha")),
      onClick: function onClick() {
        onHandleChangeCaptcha();
      }
    }, captcha);
  };
  return /*#__PURE__*/React.createElement(Clear, _extends({}, props, {
    groupClassName: "".concat(prefixCls, "__group-captcha"),
    backRender: captchaRender()
  }));
};
export default /*#__PURE__*/memo(Captcha);