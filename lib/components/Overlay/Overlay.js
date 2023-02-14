"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _reactTransitionGroup = require("react-transition-group");
var _utils = require("../../utils");
var _useLockScroll3 = _interopRequireDefault(require("../hooks/use-lock-scroll"));
require("./style/index.scss");
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
var prefixCls = 'jing-overlay';

// defaultProps 已经生效，但 props 需设置 any，暂无解决方案
var Overlay = function Overlay(props) {
  var className = props.className,
    zIndex = props.zIndex,
    duration = props.duration,
    type = props.type,
    visible = props.visible,
    style = props.style,
    customStyle = props.customStyle,
    onClick = props.onClick;
  var _useLockScroll = (0, _useLockScroll3.default)(function () {
      return props.lockScroll;
    }),
    _useLockScroll2 = _slicedToArray(_useLockScroll, 2),
    lockScroll = _useLockScroll2[0],
    unlockScroll = _useLockScroll2[1];
  var nodeRef = (0, _react.useRef)(null);
  var innerLockRef = (0, _react.useRef)(false);
  var preventTouchMove = function preventTouchMove(event) {
    // preventDefault(event, true);
    event.stopPropagation();
  };
  (0, _react.useEffect)(function () {
    if (!props.lockScroll) return;
    if (visible) {
      lockScroll();
      innerLockRef.current = true;
    }
    if (!visible && innerLockRef.current) {
      unlockScroll();
      innerLockRef.current = false;
    }
  }, [visible]);
  (0, _react.useEffect)(function () {
    return function () {
      if (props.lockScroll) unlockScroll();
    };
  }, []);
  var renderOverlay = function renderOverlay() {
    var _style = _objectSpread(_objectSpread({
      zIndex: zIndex !== undefined ? +zIndex : undefined
    }, style), customStyle);
    var classes = (0, _classnames2.default)(className, prefixCls, _defineProperty({}, "".concat(prefixCls, "--").concat(type), !!type));
    if ((0, _utils.isDef)(duration)) {
      // @ts-ignore
      _style.animationDuration = "".concat(duration, "ms");
    }
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: nodeRef,
      style: _style,
      className: classes,
      onClick: onClick,
      onTouchMove: props.lockScroll ? preventTouchMove : _utils.noop
    }, props.children);
  };
  return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    nodeRef: nodeRef,
    mountOnEnter: true,
    unmountOnExit: true,
    in: visible,
    timeout: duration,
    classNames: "jing-fade"
  }, renderOverlay());
};
Overlay.defaultProps = {
  type: 'normal',
  visible: false,
  lockScroll: true,
  duration: 300
};
var _default = /*#__PURE__*/(0, _react.memo)(Overlay);
exports.default = _default;