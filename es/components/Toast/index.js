function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import BaseToast from "./Toast";
import { lockClick } from "./lock-click";
import { isObject } from "../../utils";
import { resolveContainer } from "../../utils/dom/getContainer";
import "./style/index.scss";
var defaultOptions = {
  icon: '',
  message: '',
  type: 'info',
  duration: 2000,
  loadingType: 'circular',
  overlay: false,
  forbidClick: false,
  mountContainer: function mountContainer() {
    return document.body;
  }
};
var toastArray = [];
var allowMultiple = false;
var currentOptions = Object.assign({}, defaultOptions);
var defaultOptionsMap = new Map();
function syncClear() {
  var fn = toastArray.pop();
  while (fn) {
    fn();
    fn = toastArray.pop();
  }
}
// 针对 toast 还没弹出来就立刻销毁的情况，将销毁放到下一个 event loop 中，避免销毁失败。
function nextTickClear() {
  setTimeout(syncClear);
}
var Toast = function Toast(p) {
  var props = parseOptions(p);
  var update = {
    config: function config() {},
    clear: function clear() {
      return null;
    }
  };
  var timer = 0;
  var onClose = props.onClose,
    mountContainer = props.mountContainer;
  var container = document.createElement('div');
  var bodyContainer = resolveContainer(mountContainer);
  bodyContainer.appendChild(container);
  var TempToast = function TempToast() {
    var options = _objectSpread({
      duration: 2000
    }, props);
    var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];
    var _useState3 = useState(_objectSpread({}, options)),
      _useState4 = _slicedToArray(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];
    var internalOnClosed = useCallback(function () {
      if (state.forbidClick) {
        lockClick(false);
      }
      var unmountResult = ReactDOM.unmountComponentAtNode(container);
      if (unmountResult && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }, [container]);
    var destroy = useCallback(function () {
      setVisible(false);
      if (onClose) onClose();
    }, []);
    update.clear = internalOnClosed;
    update.config = useCallback(function (nextState) {
      setState(function (prev) {
        return typeof nextState === 'function' ? _objectSpread(_objectSpread({}, prev), nextState(prev)) : _objectSpread(_objectSpread({}, prev), nextState);
      });
    }, [setState]);
    useEffect(function () {
      setVisible(true);
      if (!allowMultiple) syncClear();
      toastArray.push(internalOnClosed);
      if (state.duration !== 0 && 'duration' in state) {
        //@ts-ignore
        timer = window.setTimeout(destroy, +state.duration);
      }
      return function () {
        if (timer !== 0) {
          window.clearTimeout(timer);
        }
      };
    }, []);
    return /*#__PURE__*/React.createElement(BaseToast, _extends({}, state, {
      visible: visible,
      mountContainer: function mountContainer() {
        return container;
      },
      onClose: destroy,
      onClosed: internalOnClosed
    }));
  };
  ReactDOM.render( /*#__PURE__*/React.createElement(TempToast, null), container);
  return update;
};
function parseOptions(message) {
  if (isObject(message)) {
    return message;
  }
  return {
    message: message
  };
}
var createMethod = function createMethod(type) {
  return function (options) {
    return Toast(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, currentOptions), defaultOptionsMap.get(type)), parseOptions(options)), {}, {
      type: type
    }));
  };
};
['info', 'loading', 'success', 'fail'].forEach(function (method) {
  //@ts-ignore
  Toast[method] = createMethod(method);
});
Toast.allowMultiple = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  allowMultiple = value;
};
Toast.clear = nextTickClear;
export default Toast;