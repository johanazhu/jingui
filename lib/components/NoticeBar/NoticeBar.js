"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _useRect = require("../hooks/useRect");
var _utils = require("../../utils");
var _Icon = require("../Icon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var prefixCls = 'jing-notice-bar';
var NoticeBar = function NoticeBar(props) {
  var text = props.text,
    center = props.center,
    duration = props.duration,
    scrollable = props.scrollable,
    mode = props.mode,
    onClick = props.onClick,
    onClose = props.onClose;
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isShow = _useState2[0],
    setIsShow = _useState2[1];
  var _useState3 = (0, _react.useState)({
      offset: 0,
      duration: 0
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    state = _useState4[0],
    setState = _useState4[1];
  var wrapRef = (0, _react.useRef)(null);
  var contentRef = (0, _react.useRef)(null);
  var wrapWidth = (0, _react.useRef)(0);
  var contentWidth = (0, _react.useRef)(0);
  var startTimer = (0, _react.useRef)(null);
  var reset = function reset() {
    // const ms = isDef(duration)
    wrapWidth.current = 0;
    contentWidth.current = 0;
    setState({
      offset: 0,
      duration: 0
    });
    clearTimeout(startTimer.current);
    startTimer.current = setTimeout(function () {
      if (!wrapRef.current || !contentRef.current || scrollable === false) {
        return;
      }
      var wrapRefWidth = (0, _useRect.getRect)(wrapRef.current).width;
      var contentRefWidth = (0, _useRect.getRect)(contentRef.current).width;
      if (scrollable || contentRefWidth > wrapRefWidth) {
        (0, _utils.doubleRaf)(function () {
          wrapWidth.current = wrapRefWidth;
          contentWidth.current = contentRefWidth;
          setState({
            offset: -contentWidth.current,
            duration: duration || contentRefWidth / wrapRefWidth * 15
          });
        });
      }
    }, duration);
  };
  (0, _react.useEffect)(function () {
    reset();
  }, [text, scrollable]);
  var onHandleClose = function onHandleClose(e) {
    e.stopPropagation();
    setIsShow(false);
    onClose && onClose();
  };
  var renderLeftIcon = function renderLeftIcon() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefixCls, "__left")
    }, /*#__PURE__*/_react.default.createElement(_Icon.IconNotice, {
      color: "orange",
      size: "sm"
    }));
  };
  var onTransitionEnd = function onTransitionEnd() {
    setState({
      offset: wrapWidth.current,
      duration: 0
    });
    (0, _utils.raf)(function () {
      (0, _utils.doubleRaf)(function () {
        setState({
          offset: -contentWidth.current,
          duration: duration || contentWidth.current / wrapWidth.current * 15
        });
      });
    });
  };
  var renderMarquee = function renderMarquee() {
    var contentClass = (0, _classnames.default)("".concat(prefixCls, "__content"), {
      'jing-ellipsis': scrollable === false
    });
    var _style = {
      transform: state.offset ? "translateX(".concat(state.offset, "px)") : '',
      transitionDuration: "".concat(state.duration, "s")
    };
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefixCls, "__wrap"),
      style: {
        justifyContent: center ? 'center' : 'flex-start'
      },
      ref: wrapRef
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: contentClass,
      ref: contentRef,
      style: _style,
      onTransitionEnd: onTransitionEnd
    }, text));
  };
  var renderRightIcon = function renderRightIcon() {
    if (mode === 'closeable') {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "__close"),
        onClick: onHandleClose
      }, /*#__PURE__*/_react.default.createElement(_Icon.IconClose, {
        color: "orange",
        size: "sm"
      }));
    } else if (mode === 'link') {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "__link")
      }, /*#__PURE__*/_react.default.createElement(_Icon.IconArrow, {
        color: "orange",
        size: "sm"
      }));
    } else {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "__normal")
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isShow ? /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls,
    onClick: onClick
  }, renderLeftIcon(), renderMarquee(), renderRightIcon()) : null);
};
NoticeBar.defaultProps = {
  mode: 'normal'
};
var _default = NoticeBar;
exports.default = _default;