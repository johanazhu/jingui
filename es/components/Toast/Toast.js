import React, { useEffect, memo } from 'react';
import classnames from 'classnames';
import { Popup } from "../Popup";
import Loading from "../Loading";
import { IconRight, IconClose } from "../Icon";
import { isDef } from "../../utils";
import { lockClick } from "./lock-click";
var prefixCls = 'jing-toast';
var Toast = function Toast(props) {
  var className = props.className,
    style = props.style,
    visible = props.visible,
    type = props.type,
    message = props.message,
    icon = props.icon,
    loadingType = props.loadingType,
    overlay = props.overlay,
    forbidClick = props.forbidClick,
    closeOnClickOverlay = props.closeOnClickOverlay,
    closeOnClick = props.closeOnClick,
    onClose = props.onClose,
    onClosed = props.onClosed,
    onOpened = props.onOpened;
  var clickable = false;
  useEffect(function () {
    toggleClickable();
  }, [visible, forbidClick]);
  var toggleClickable = function toggleClickable() {
    var newValue = visible && forbidClick;
    if (clickable !== newValue) {
      clickable = newValue;
      lockClick(clickable);
    }
    if (!visible) {
      lockClick(false);
    }
  };
  var onClick = function onClick() {
    if (closeOnClick) {
      props.onClick();
    }
  };
  var renderIcon = function renderIcon() {
    var hasIcon = icon || type === 'success' || type === 'fail';
    if (hasIcon) {
      return typeof icon === 'string' ? type === 'success' ? /*#__PURE__*/React.createElement(IconRight, {
        color: "white",
        className: "".concat(prefixCls, "__icon")
      }) : /*#__PURE__*/React.createElement(IconClose, {
        color: "white",
        className: "".concat(prefixCls, "__icon")
      }) : icon;
    }
    if (type === 'loading') {
      return /*#__PURE__*/React.createElement(Loading, {
        className: classnames("".concat(prefixCls, "__loading")),
        type: loadingType
      });
    }
    return null;
  };
  var renderMessage = function renderMessage() {
    if (isDef(message) && message !== '') {
      return /*#__PURE__*/React.createElement("div", {
        className: classnames("".concat(prefixCls, "__info"))
      }, message);
    }
    return null;
  };
  var classes = classnames(className, prefixCls, "".concat(prefixCls, "--").concat(type));
  return /*#__PURE__*/React.createElement(Popup, {
    className: classes,
    style: style,
    visible: visible,
    overlay: overlay,
    lockScroll: false,
    onClick: onClick,
    onClose: onClose,
    onClosed: onClosed,
    onOpened: onOpened,
    closeOnClickOverlay: closeOnClickOverlay
  }, renderIcon(), renderMessage());
};
Toast.defaultProps = {
  type: 'info',
  duration: 2000,
  loadingType: 'circular',
  overlay: false,
  forbidClick: false,
  mountContainer: function mountContainer() {
    return document.body;
  }
};
export default /*#__PURE__*/memo(Toast);