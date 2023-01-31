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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var prefixCls = 'jing-image';
var Image = function Image(props) {
  var className = props.className,
    style = props.style,
    width = props.width,
    height = props.height,
    src = props.src,
    alt = props.alt,
    fit = props.fit,
    round = props.round,
    radius = props.radius,
    showLoading = props.showLoading,
    showError = props.showError,
    loadingIcon = props.loadingIcon,
    errorIcon = props.errorIcon,
    children = props.children,
    onClick = props.onClick,
    onPropsLoad = props.onLoad,
    onPropsError = props.onError;
  var _useState = (0, _react.useState)({
      loading: true,
      error: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    status = _useState2[0],
    setStatus = _useState2[1];
  var imgRef = (0, _react.useRef)(null);
  var classes = (0, _classnames2.default)(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "--round"), !!round));
  var _style = (0, _react.useMemo)(function () {
    var internalStyle = _objectSpread({}, style);
    if ((0, _utils.isDef)(width)) {
      // @ts-ignore
      internalStyle.width = (0, _utils.addUnit)(width);
    }
    if ((0, _utils.isDef)(height)) {
      // @ts-ignore
      internalStyle.height = (0, _utils.addUnit)(height);
    }
    if ((0, _utils.isDef)(radius)) {
      // @ts-ignore
      internalStyle.overflow = 'hidden';
      // @ts-ignore
      internalStyle.borderRadius = (0, _utils.addUnit)(radius);
    }
    return internalStyle;
  }, [style]);
  (0, _react.useEffect)(function () {
    var payload = {
      error: false,
      loading: true
    };
    if (imgRef.current) {
      if (imgRef.current.complete) {
        payload.loading = false;
      } else {
        payload.loading = true;
      }
    }
    setStatus(payload);
  }, [src]);
  var onLoad = function onLoad(e) {
    setStatus({
      loading: false,
      error: false
    });
    onPropsLoad === null || onPropsLoad === void 0 ? void 0 : onPropsLoad(e);
  };
  var onError = function onError(e) {
    setStatus({
      loading: false,
      error: true
    });
    onPropsError === null || onPropsError === void 0 ? void 0 : onPropsError(e);
  };
  var renderLoadingIcon = function renderLoadingIcon() {
    if (loadingIcon) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loadingIcon);
    return /*#__PURE__*/_react.default.createElement(_Icon.IconPhoto, {
      size: "lg"
    });
  };
  var renderErrorIcon = function renderErrorIcon() {
    if (errorIcon) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, errorIcon);
    return /*#__PURE__*/_react.default.createElement(_Icon.IconPhotoFail, {
      size: "lg"
    });
  };
  var renderImage = function renderImage() {
    if (status.error || !src) {
      return null;
    }
    var attrs = {
      className: (0, _classnames2.default)("".concat(prefixCls, "__img")),
      style: {
        objectFit: fit
      }
    };
    return /*#__PURE__*/_react.default.createElement("img", _extends({
      ref: imgRef,
      src: src,
      alt: alt || 'img',
      onLoad: onLoad,
      onError: onError
    }, attrs));
  };
  var renderPlaceholder = function renderPlaceholder() {
    if (status.loading && showLoading) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "__loading")
      }, renderLoadingIcon());
    }
    if (status.error && showError) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "__error")
      }, renderErrorIcon());
    }
    return null;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes,
    style: _style,
    onClick: onClick
  }, renderImage(), renderPlaceholder(), children);
};
Image.defaultProps = {
  fit: 'fill',
  round: false,
  showLoading: true,
  showError: true
};
var _default = /*#__PURE__*/(0, _react.memo)(Image);
exports.default = _default;