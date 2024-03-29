function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
import React, { useState, useMemo, useRef, forwardRef, memo } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Overlay from "../Overlay";
import Portal from "./Portal";
import { IconClose } from "../Icon";
import { isDef } from "../../utils";
import { useIsomorphicLayoutEffect } from "../hooks";
var prefixCls = 'jing-popup';
var globalZIndex = 2000;
var Popup = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$zIndex;
  var className = props.className,
    style = props.style,
    position = props.position,
    overlay = props.overlay,
    overlayType = props.overlayType,
    duration = props.duration,
    round = props.round,
    title = props.title,
    destroyOnClose = props.destroyOnClose,
    lockScroll = props.lockScroll,
    safeAreaInsetBottom = props.safeAreaInsetBottom,
    closeable = props.closeable,
    closeIconPosition = props.closeIconPosition,
    children = props.children,
    customHeader = props.customHeader,
    onOpen = props.onOpen,
    onClose = props.onClose,
    onOpened = props.onOpened,
    onClosed = props.onClosed,
    closeOnClickOverlay = props.closeOnClickOverlay,
    onClick = props.onClick,
    onClickCloseIcon = props.onClickCloseIcon,
    mountContainer = props.mountContainer;
  var opened = useRef(false);
  var popupRef = useRef(null);
  var zIndex = useRef((_props$zIndex = props.zIndex) !== null && _props$zIndex !== void 0 ? _props$zIndex : globalZIndex);
  var _useState = useState(props.visible),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = useState(visible),
    _useState4 = _slicedToArray(_useState3, 2),
    animatedVisible = _useState4[0],
    setAnimatedVisible = _useState4[1];
  useIsomorphicLayoutEffect(function () {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);
  useIsomorphicLayoutEffect(function () {
    setVisible(props.visible);
  }, [props.visible]);
  var _style = useMemo(function () {
    var initStyle = _objectSpread({
      zIndex: zIndex.current
    }, style);
    if (isDef(duration)) {
      var key = position === 'center' ? 'animationDuration' : 'transitionDuration';
      initStyle[key] = "".concat(duration, "ms");
    }
    return initStyle;
  }, [zIndex.current, position, style, duration]);
  var renderTitle = function renderTitle() {
    if (customHeader) {
      return customHeader;
    }
    if (title) {
      return /*#__PURE__*/React.createElement("div", {
        className: classnames("".concat(prefixCls, "__title"))
      }, title);
    }
    return null;
  };
  var open = function open() {
    if (props.zIndex !== undefined) {
      zIndex.current = +props.zIndex;
    } else {
      zIndex.current = globalZIndex++;
    }
    opened.current = true;
    onOpen === null || onOpen === void 0 ? void 0 : onOpen();
  };
  var onClickOverlay = function onClickOverlay(event) {
    var _props$onClickOverlay;
    (_props$onClickOverlay = props.onClickOverlay) === null || _props$onClickOverlay === void 0 ? void 0 : _props$onClickOverlay.call(props, event);
    if (closeOnClickOverlay) {
      opened.current = false;
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  };
  var renderOverlay = function renderOverlay() {
    if (overlay) {
      return /*#__PURE__*/React.createElement(Overlay, {
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
      return /*#__PURE__*/React.createElement("div", {
        className: classnames("".concat(prefixCls, "__close-icon"), "".concat(prefixCls, "__close-icon--").concat(closeIconPosition)),
        onClick: onClickToCloseIcon
      }, ' ', /*#__PURE__*/React.createElement(IconClose, null));
    }
    return null;
  };
  var renderPopup = function renderPopup() {
    var _classnames;
    var classes = classnames(className, prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "--").concat(position), position), _defineProperty(_classnames, "".concat(prefixCls, "--round"), round), _defineProperty(_classnames, 'iphonex-extra-height', safeAreaInsetBottom), _classnames));
    return /*#__PURE__*/React.createElement("div", {
      ref: popupRef,
      style: _objectSpread(_objectSpread({}, _style), {}, {
        display: !visible && !animatedVisible ? 'none' : undefined
      }),
      className: classes,
      onClick: onClick
    }, renderTitle(), children, renderCloseIcon());
  };
  var renderTransition = function renderTransition() {
    var name = position === 'center' ? 'jing-fade' : "jing-popup-slide-".concat(position);
    return /*#__PURE__*/React.createElement(CSSTransition, {
      in: visible,
      nodeRef: popupRef,
      timeout: duration || 300,
      classNames: name,
      mountOnEnter: true,
      unmountOnExit: destroyOnClose,
      onEnter: open,
      onEntered: onOpened,
      onExited: function onExited() {
        setAnimatedVisible(false);
        onClosed === null || onClosed === void 0 ? void 0 : onClosed();
      }
    }, renderPopup())
    //     <CSSTransition
    //     in={visible}
    //     /**
    //      * https://github.com/reactjs/react-transition-group/pull/559
    //      */
    //     nodeRef={popupRef}
    //     timeout={duration}
    //     classNames={transition || name}
    //     mountOnEnter={!forceRender}
    //     unmountOnExit={destroyOnClose}
    //     onEnter={open}
    //     onEntered={props.onOpened}
    //     onExited={() => {
    //       setAnimatedVisible(false)
    //       props.onClosed?.()
    //     }}
    //   >
    //     {renderPopup()}
    //   </CSSTransition>
    ;
  };

  var getComponent = function getComponent() {
    if (!overlay) {
      return renderTransition();
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, renderOverlay(), renderTransition());
  };
  return /*#__PURE__*/React.createElement(Portal, {
    mountContainer: mountContainer
  }, getComponent());
});
Popup.defaultProps = {
  duration: 300,
  overlay: true,
  position: 'center',
  round: false,
  mountContainer: document.body,
  closeOnClickOverlay: true,
  safeAreaInsetBottom: false,
  destroyOnClose: false,
  lockScroll: true,
  overlayType: 'normal',
  closeIconPosition: 'top-right'
};
export default /*#__PURE__*/memo(Popup);