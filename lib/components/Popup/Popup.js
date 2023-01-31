"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _reactTransitionGroup = require("react-transition-group");
var _Overlay = _interopRequireDefault(require("../Overlay"));
var _Portal = _interopRequireDefault(require("./Portal"));
var _Icon = require("../Icon");
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var prefixCls = 'jing-popup';
var globalZIndex = 2000;
var Popup = function Popup(props) {
  var _props$zIndex;
  var className = props.className,
    style = props.style,
    visible = props.visible,
    position = props.position,
    overlay = props.overlay,
    overlayType = props.overlayType,
    duration = props.duration,
    lockScroll = props.lockScroll,
    safeAreaInsetBottom = props.safeAreaInsetBottom,
    closeable = props.closeable,
    closeIconPosition = props.closeIconPosition,
    children = props.children,
    onOpen = props.onOpen,
    onClose = props.onClose,
    onOpened = props.onOpened,
    onClosed = props.onClosed,
    closeOnClickOverlay = props.closeOnClickOverlay,
    onClick = props.onClick,
    onClickCloseIcon = props.onClickCloseIcon,
    mountContainer = props.mountContainer;
  var popupRef = (0, _react.useRef)(null);
  var zIndex = (0, _react.useRef)((_props$zIndex = props.zIndex) !== null && _props$zIndex !== void 0 ? _props$zIndex : globalZIndex);
  var _useState = (0, _react.useState)(visible),
    _useState2 = _slicedToArray(_useState, 2),
    animatedVisible = _useState2[0],
    setAnimatedVisible = _useState2[1];
  (0, _react.useEffect)(function () {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);
  var _style = (0, _react.useMemo)(function () {
    var initStyle = _objectSpread({
      zIndex: zIndex.current
    }, style);
    if ((0, _utils.isDef)(duration)) {
      var key = position === 'center' ? 'animationDuration' : 'transitionDuration';
      initStyle[key] = "".concat(duration, "ms");
    }
    return initStyle;
  }, [zIndex.current, style, duration]);
  var open = function open() {
    if (props.zIndex !== undefined) {
      zIndex.current = +props.zIndex;
    } else {
      zIndex.current = globalZIndex++;
    }
    onOpen === null || onOpen === void 0 ? void 0 : onOpen();
  };
  var onClickOverlay = function onClickOverlay(event) {
    var _props$onClickOverlay;
    (_props$onClickOverlay = props.onClickOverlay) === null || _props$onClickOverlay === void 0 ? void 0 : _props$onClickOverlay.call(props, event);
    if (closeOnClickOverlay) {
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  };
  var OverlayRender = function OverlayRender() {
    if (overlay) {
      return /*#__PURE__*/_react.default.createElement(_Overlay.default, {
        visible: visible,
        lockScroll: lockScroll,
        duration: duration,
        type: overlayType,
        zIndex: zIndex.current,
        onClick: onClickOverlay
      });
    }
    return null;
  };
  var onClickToCloseIcon = function onClickToCloseIcon(event) {
    if (onClickCloseIcon) {
      onClickCloseIcon(event);
    }
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };
  var renderCloseIcon = function renderCloseIcon() {
    if (closeable) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames2.default)("".concat(prefixCls, "__close-icon"), "".concat(prefixCls, "__close-icon--").concat(closeIconPosition)),
        onClick: onClickToCloseIcon
      }, ' ', /*#__PURE__*/_react.default.createElement(_Icon.IconClose, null));
    }
    return null;
  };
  var renderPopup = function renderPopup() {
    var _classnames;
    var classes = (0, _classnames2.default)(className, prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "--").concat(position), position), _defineProperty(_classnames, 'iphonex-extra-height', safeAreaInsetBottom), _classnames));
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: popupRef,
      style: _objectSpread(_objectSpread({}, _style), {}, {
        display: !visible && !animatedVisible ? 'none' : undefined
      }),
      className: classes,
      onClick: onClick
    }, children, renderCloseIcon());
  };
  var renderTransition = function renderTransition() {
    var classname = position === 'center' ? 'jing-fade' : "jing-popup-slide-".concat(position);
    return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
      in: visible,
      nodeRef: popupRef,
      timeout: duration,
      classNames: classname,
      mountOnEnter: true,
      unmountOnExit: true,
      onEnter: open,
      onEntered: onOpened,
      onExited: function onExited() {
        setAnimatedVisible(false);
        onClosed === null || onClosed === void 0 ? void 0 : onClosed();
      }
    }, renderPopup());
  };
  var getComponent = function getComponent() {
    if (!overlay) {
      return renderTransition();
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, OverlayRender(), renderTransition());
  };
  return /*#__PURE__*/_react.default.createElement(_Portal.default, {
    mountContainer: mountContainer
  }, getComponent());
};
Popup.defaultProps = {
  duration: 300,
  overlay: true,
  position: 'center',
  mountContainer: document.body,
  closeOnClickOverlay: true,
  safeAreaInsetBottom: false,
  lockScroll: true,
  overlayType: 'normal',
  closeIconPosition: 'top-right'
};
var _default = /*#__PURE__*/(0, _react.memo)(Popup);
exports.default = _default;