"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _Icon = require("../Icon");
var _utils = require("../../utils");
var _utils2 = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MIN_DISTANCE = 10;
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}
var prefixCls = 'jing-keyboard-key';
var Key = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _classnames;
  var className = props.className,
    type = props.type,
    text = props.text,
    active = props.active,
    touchStart = props.touchStart,
    touchMove = props.touchMove,
    touchEnd = props.touchEnd,
    onPress = props.onPress;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setIsActive = _useState2[1];
  var keyRef = (0, _react.useRef)(null);
  var longPressRef = (0, _react.useRef)(null);
  var textRef = (0, _react.useRef)(text);
  var classes = (0, _classnames2.default)(prefixCls, className);
  (0, _react.useEffect)(function () {
    var _keyRef$current;
    keyRef === null || keyRef === void 0 ? void 0 : (_keyRef$current = keyRef.current) === null || _keyRef$current === void 0 ? void 0 : _keyRef$current.addEventListener('touchstart', onHandleTouchStart, {
      passive: false
    });
    return function () {
      var _keyRef$current2;
      keyRef === null || keyRef === void 0 ? void 0 : (_keyRef$current2 = keyRef.current) === null || _keyRef$current2 === void 0 ? void 0 : _keyRef$current2.removeEventListener('touchstart', onHandleTouchStart);
    };
  }, []);
  (0, _react.useEffect)(function () {
    textRef.current = text;
  }, [text]);
  var wrapperClass = (0, _classnames2.default)("".concat(prefixCls, "__wrapper"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "__wrapper-active"), active && !(0, _utils2.getCantActive)(type)), _defineProperty(_classnames, "".concat(prefixCls, "__wrapper-delete-active"), isActive && type === 'delete'), _defineProperty(_classnames, "".concat(prefixCls, "__wrapper-special-active"), isActive && (0, _utils2.getCantActive)(type)), _classnames));
  var startX = 0,
    startY = 0,
    deltaX = 0,
    deltaY = 0,
    offsetX = 0,
    offsetY = 0,
    direction = '0';
  var resetTouchStatus = function resetTouchStatus() {
    direction = '';
    deltaX = 0;
    deltaY = 0;
    offsetX = 0;
    offsetY = 0;
  };
  var dispatchValue = function dispatchValue() {
    onPress === null || onPress === void 0 ? void 0 : onPress(text, type);
  };
  var onLongPressIn = function onLongPressIn() {
    dispatchValue();
    longPressRef.current = setTimeout(function () {
      longPressRef.current = setInterval(function () {
        dispatchValue();
      }, 150);
    }, 750);
  };
  var onLongPressOut = function onLongPressOut() {
    clearTimeout(longPressRef.current);
    longPressRef.current = null;
  };
  var onHandleTouchStart = function onHandleTouchStart(event) {
    if (type === 'delete') {
      onLongPressIn();
    }
    touchStart === null || touchStart === void 0 ? void 0 : touchStart(textRef.current);
    setIsActive(true);
    resetTouchStatus();
    // startX = event?.touches[0].clientX;
    // startY = event?.touches[0].clientY;
  };

  var onTouchMove = function onTouchMove(event) {
    touchMove === null || touchMove === void 0 ? void 0 : touchMove(event);
    var touch = event.touches[0];
    deltaX = touch.clientX - startX;
    deltaY = touch.clientY - startY;
    offsetX = Math.abs(deltaX);
    offsetY = Math.abs(deltaY);
    direction = direction || getDirection(offsetX, offsetY);
    if (direction) {
      setIsActive(false);
    }
  };
  var onTouchEnd = function onTouchEnd(event) {
    event.preventDefault();
    setIsActive(false);
    if (type === 'delete') {
      onLongPressOut();
    } else {
      dispatchValue();
    }
  };

  // useImperativeHandle(ref, () => ({}));

  var renderText = function renderText() {
    var isEmty = type === 'emty';
    var isDelete = type === 'delete';
    if (isDelete) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Icon.IconKeyboardDelete, {
        className: "".concat(prefixCls, "__delete-icon"),
        style: {
          display: isActive === true ? 'block' : 'none'
        },
        color: "black",
        onClick: function onClick(e) {
          (0, _utils.stopPropagation)(e);
        }
      }), /*#__PURE__*/_react.default.createElement(_Icon.IconKeyboardDeleteLine, {
        className: "".concat(prefixCls, "__delete-icon"),
        style: {
          display: isActive === true ? 'none' : 'block'
        },
        color: "black",
        onClick: function onClick(e) {
          (0, _utils.stopPropagation)(e);
        }
      }));
    }
    if (isEmty) {
      return '';
    }
    return text;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClass,
    ref: ref,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onTouchCancel: onTouchEnd
  }, /*#__PURE__*/_react.default.createElement("div", {
    role: "button",
    tabIndex: 0,
    className: classes,
    ref: keyRef
  }, renderText()));
});
var _default = /*#__PURE__*/(0, _react.memo)(Key);
exports.default = _default;