"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Popup = _interopRequireDefault(require("../Popup"));
var _Loading = _interopRequireDefault(require("../Loading"));
var _Icon = require("../Icon");
var _utils = require("../../utils");
var _lockClick = require("./lock-click");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
  (0, _react.useEffect)(function () {
    toggleClickable();
  }, [visible, forbidClick]);
  var toggleClickable = function toggleClickable() {
    var newValue = visible && forbidClick;
    if (clickable !== newValue) {
      clickable = newValue;
      (0, _lockClick.lockClick)(clickable);
    }
    if (!visible) {
      (0, _lockClick.lockClick)(false);
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
      return typeof icon === 'string' ? type === 'success' ? /*#__PURE__*/_react.default.createElement(_Icon.IconRight, {
        color: "white",
        className: "".concat(prefixCls, "__icon")
      }) : /*#__PURE__*/_react.default.createElement(_Icon.IconClose, {
        color: "white",
        className: "".concat(prefixCls, "__icon")
      }) : icon;
    }
    if (type === 'loading') {
      return /*#__PURE__*/_react.default.createElement(_Loading.default, {
        className: (0, _classnames.default)("".concat(prefixCls, "__loading")),
        type: loadingType
      });
    }
    return null;
  };
  var renderMessage = function renderMessage() {
    if ((0, _utils.isDef)(message) && message !== '') {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)("".concat(prefixCls, "__info"))
      }, message);
    }
    return null;
  };
  var classes = (0, _classnames.default)(className, prefixCls, "".concat(prefixCls, "--").concat(type));
  return /*#__PURE__*/_react.default.createElement(_Popup.default, {
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
var _default = /*#__PURE__*/(0, _react.memo)(Toast);
exports.default = _default;