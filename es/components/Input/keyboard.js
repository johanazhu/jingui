function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect, memo, forwardRef, useImperativeHandle, useRef } from 'react';
import classnames from 'classnames';
import { IconCircleDelete, IconEyeCloseTwo, IconEyeOpenTwo } from "../Icon";
import { stopPropagation } from "../../utils";
var prefixCls = 'jing-keyboardinput';
function useInputValue(initialValue) {
  var _useState = useState(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState(initialValue),
    _useState4 = _slicedToArray(_useState3, 2),
    cacheValue = _useState4[0],
    setCacheValue = _useState4[1];
  var updateValue = function updateValue(v) {
    setValue(v);
  };
  var updateCacheValue = function updateCacheValue(v) {
    setCacheValue(v);
  };
  var clearValue = function clearValue() {
    setValue('');
  };
  var clearCacheValue = function clearCacheValue() {
    setCacheValue('');
  };
  return {
    value: value,
    cacheValue: cacheValue,
    updateValue: updateValue,
    updateCacheValue: updateCacheValue,
    clearValue: clearValue,
    clearCacheValue: clearCacheValue
  };
}
function changeValue(value) {
  var tempVal = '';
  for (var i = 0, length = value.length; i < length; i++) {
    tempVal += '●';
  }
  return tempVal;
}
var KeyboardInput = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classnames;
  var className = props.className,
    style = props.style,
    value = props.value,
    placeholder = props.placeholder,
    active = props.active,
    maxLength = props.maxLength,
    onClearValue = props.onClearValue,
    onHandleFocus = props.onHandleFocus,
    onClick = props.onClick;
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isShowClear = _useState6[0],
    setIsShowClear = _useState6[1];
  var _useState7 = useState(active),
    _useState8 = _slicedToArray(_useState7, 2),
    isFocus = _useState8[0],
    setIsFocus = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    visible = _useState10[0],
    setIsVisible = _useState10[1];
  var _useState11 = useState(placeholder),
    _useState12 = _slicedToArray(_useState11, 2),
    placeHolderValue = _useState12[0],
    setPlaceHolderValue = _useState12[1];
  var clearRef = useRef();
  var focusRef = useRef();
  var oInput = useInputValue(value);
  useEffect(function () {
    if (visible) {
      if (maxLength) {
        if (value.length >= maxLength) {
          oInput.updateValue(value.substring(0, maxLength));
        } else {
          oInput.updateValue(value);
        }
      } else {
        oInput.updateValue(value);
      }
    } else {
      if (maxLength) {
        if (value.length >= maxLength) {
          oInput.updateCacheValue(value.substring(0, maxLength));
          oInput.updateValue(changeValue(value.substring(0, maxLength)));
        } else {
          oInput.updateCacheValue(value);
          oInput.updateValue(changeValue(value));
        }
      } else {
        oInput.updateCacheValue(value);
        oInput.updateValue(changeValue(value));
      }
    }
  }, [value]);
  useEffect(function () {
    if (isFocus) {
      setIsShowClear(true);
    } else {
      setIsShowClear(false);
    }
    if (oInput.value !== '') {
      setPlaceHolderValue('');
    } else {
      setPlaceHolderValue(placeholder);
    }
  }, [oInput.value, isFocus]);
  useEffect(function () {
    setIsFocus(active);
  }, [active]);
  useImperativeHandle(ref, function () {
    return {
      // @ts-ignore
      get clearElement() {
        return clearRef.current;
      },
      // @ts-ignore
      get focusElement() {
        return focusRef.current;
      }
    };
  });
  function onFocusClick() {
    console.log('点击1', isFocus);
    setIsFocus(true);
    onHandleFocus === null || onHandleFocus === void 0 ? void 0 : onHandleFocus();
  }
  function onEyeClick(e) {
    // e.preventDefault()
    stopPropagation(e);
    if (visible) {
      oInput.updateCacheValue(oInput.value);
      oInput.updateValue(changeValue(oInput.value));
      setIsVisible(false);
    } else {
      oInput.updateValue(oInput.cacheValue);
      setIsVisible(true);
    }
  }
  function onClearClick(e) {
    // e.preventDefault();
    stopPropagation(e);
    oInput.clearValue();
    oInput.clearCacheValue();
    setIsShowClear(false);
    onClearValue === null || onClearValue === void 0 ? void 0 : onClearValue();
  }
  var renderClear = function renderClear() {
    if (isShowClear) {
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "__clear"),
        onClick: onClearClick,
        ref: clearRef
      }, /*#__PURE__*/React.createElement(IconCircleDelete, null));
    }
    return null;
  };
  var renderFocus = function renderFocus() {
    if (isFocus) {
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "__focus"),
        onClick: onEyeClick,
        ref: focusRef
      }, visible ? /*#__PURE__*/React.createElement(IconEyeOpenTwo, {
        className: "".concat(prefixCls, "__focus-open")
      }) : /*#__PURE__*/React.createElement(IconEyeCloseTwo, {
        className: "".concat(prefixCls, "__focus-close")
      }));
    }
    return null;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(prefixCls, className),
    style: style,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames("".concat(prefixCls, "__control"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "__control-active"), isFocus), _defineProperty(_classnames, "".concat(prefixCls, "__control-small"), !visible), _classnames)),
    onClick: onFocusClick
  }, oInput.value), /*#__PURE__*/React.createElement("sub", null, placeHolderValue), renderClear(), renderFocus());
});
export default /*#__PURE__*/memo(KeyboardInput);