function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["className", "style", "title", "visible", "message", "messageAlign", "width", "closeOnClickOverlay", "footer", "children", "showCancelButton", "showConfirmButton", "cancelButtonText", "confirmButtonText", "cancelButtonColor", "confirmButtonColor", "cancelProps", "confirmProps", "onClose", "onClosed", "onCancel", "onConfirm"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import classnames from 'classnames';
import { Popup } from "../Popup";
import Button from "../Button";
import { addUnit, noop, BORDER_TOP, BORDER_LEFT } from "../../utils";
var prefixCls = 'jing-modal';
var Modal = function Modal(props) {
  var className = props.className,
    style = props.style,
    title = props.title,
    visible = props.visible,
    message = props.message,
    _props$messageAlign = props.messageAlign,
    messageAlign = _props$messageAlign === void 0 ? 'center' : _props$messageAlign,
    width = props.width,
    closeOnClickOverlay = props.closeOnClickOverlay,
    footer = props.footer,
    children = props.children,
    showCancelButton = props.showCancelButton,
    _props$showConfirmBut = props.showConfirmButton,
    showConfirmButton = _props$showConfirmBut === void 0 ? true : _props$showConfirmBut,
    cancelButtonText = props.cancelButtonText,
    _props$confirmButtonT = props.confirmButtonText,
    confirmButtonText = _props$confirmButtonT === void 0 ? '确定' : _props$confirmButtonT,
    cancelButtonColor = props.cancelButtonColor,
    confirmButtonColor = props.confirmButtonColor,
    cancelProps = props.cancelProps,
    confirmProps = props.confirmProps,
    onClose = props.onClose,
    onClosed = props.onClosed,
    onCancel = props.onCancel,
    onConfirm = props.onConfirm,
    others = _objectWithoutProperties(props, _excluded);
  var classes = classnames(prefixCls, className);
  var renderTitle = function renderTitle() {
    if (title) {
      return /*#__PURE__*/React.createElement("div", {
        className: classnames("".concat(prefixCls, "__header"), 'jing-hairline--bottom', _defineProperty({}, "".concat(prefixCls, "__header-isolated"), !message && !children))
      }, ' ', title);
    }
    return null;
  };
  var renderContent = function renderContent() {
    if (children) {
      return /*#__PURE__*/React.createElement("div", {
        className: classnames("".concat(prefixCls, "__content"))
      }, children);
    }
    if (message) {
      var _classnames3;
      return /*#__PURE__*/React.createElement("div", {
        className: classnames("".concat(prefixCls, "__content"), _defineProperty({}, "".concat(prefixCls, "__content-isolated"), !title))
      }, /*#__PURE__*/React.createElement("div", {
        className: classnames("".concat(prefixCls, "__message"), (_classnames3 = {}, _defineProperty(_classnames3, "".concat(prefixCls, "__message-has-title"), title), _defineProperty(_classnames3, "".concat(prefixCls, "__message-").concat(messageAlign), messageAlign), _classnames3))
      }, message));
    }
    return null;
  };
  var renderFooter = function renderFooter() {
    var _props$cancelProps, _props$cancelProps2, _props$cancelProps3, _props$confirmProps, _props$confirmProps2, _props$confirmProps3;
    if (footer) return footer;
    return /*#__PURE__*/React.createElement("div", {
      className: classnames("".concat(prefixCls, "__footer"), BORDER_TOP)
    }, showCancelButton && /*#__PURE__*/React.createElement(Button, {
      size: "large",
      text: cancelButtonText || '取消',
      className: "".concat(prefixCls, "__cancel"),
      style: {
        color: cancelButtonColor
      },
      loading: (_props$cancelProps = props.cancelProps) === null || _props$cancelProps === void 0 ? void 0 : _props$cancelProps.loading,
      disabled: (_props$cancelProps2 = props.cancelProps) === null || _props$cancelProps2 === void 0 ? void 0 : _props$cancelProps2.disabled,
      onClick: (_props$cancelProps3 = props.cancelProps) !== null && _props$cancelProps3 !== void 0 && _props$cancelProps3.loading ? noop : onCancel
    }), showConfirmButton && /*#__PURE__*/React.createElement(Button, {
      size: "large",
      text: confirmButtonText || '确认',
      className: classnames("".concat(prefixCls, "__confirm"), BORDER_LEFT),
      style: {
        color: confirmButtonColor
      },
      loading: (_props$confirmProps = props.confirmProps) === null || _props$confirmProps === void 0 ? void 0 : _props$confirmProps.loading,
      disabled: (_props$confirmProps2 = props.confirmProps) === null || _props$confirmProps2 === void 0 ? void 0 : _props$confirmProps2.disabled,
      onClick: (_props$confirmProps3 = props.confirmProps) !== null && _props$confirmProps3 !== void 0 && _props$confirmProps3.loading ? noop : onConfirm
    }));
  };
  return /*#__PURE__*/React.createElement(Popup, _extends({
    visible: visible,
    className: classes,
    style: {
      width: addUnit(width)
    },
    "aria-labelledby": title || message,
    closeOnClickOverlay: closeOnClickOverlay,
    onClose: onClose,
    onClosed: onClosed
  }, others), renderTitle(), renderContent(), renderFooter());
};
Modal.defaultProps = {
  messageAlign: 'center',
  showConfirmButton: true,
  confirmButtonText: '确定',
  closeOnPopstate: true
};
export default Modal;