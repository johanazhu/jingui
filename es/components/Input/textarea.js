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
import React, { useState, useEffect, useCallback, useRef } from 'react';
import classnames from 'classnames';
var prefixCls = 'jing-textarea';
function useInputValue(initialValue) {
  var _useState = useState(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var onChange = useCallback(function (e) {
    setValue(e.currentTarget.value);
  }, []);
  var updateValue = function updateValue(value) {
    setValue(value);
  };
  return {
    value: value,
    onChange: onChange,
    updateValue: updateValue
  };
}
function Textarea(props) {
  var placeholder = props.placeholder,
    error = props.error,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    className = props.className,
    style = props.style,
    _onChange = props.onChange,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    disabled = props.disabled,
    maxLength = props.maxLength,
    minLength = props.minLength,
    rows = props.rows;
  var textareaRef = useRef(null);
  var oInput = useInputValue(value);
  var _useState3 = useState(disabled),
    _useState4 = _slicedToArray(_useState3, 2),
    isBan = _useState4[0],
    setIsBan = _useState4[1];
  var _useState5 = useState(error),
    _useState6 = _slicedToArray(_useState5, 2),
    isError = _useState6[0],
    setIsError = _useState6[1];
  useEffect(function () {
    oInput.updateValue(value);
  }, [value]);
  useEffect(function () {
    setIsBan(disabled);
  }, [disabled]);
  useEffect(function () {
    setIsError(error);
  }, [isError]);
  useEffect(function () {
    if (rows && textareaRef.current) {
      // @ts-ignore
      textareaRef.current.style.height = "".concat(
      // @ts-ignore
      textareaRef.current.scrollHeight * rows, "px");
    }
  }, [rows]);
  return /*#__PURE__*/React.createElement("textarea", {
    ref: textareaRef,
    value: oInput.value,
    style: style,
    className: classnames(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "--error"), isError)),
    rows: rows,
    disabled: isBan,
    placeholder: placeholder,
    maxLength: maxLength,
    minLength: minLength,
    onChange: function onChange(e) {
      oInput.onChange(e);
      _onChange && _onChange(e.target.value);
    },
    onFocus: onFocus,
    onBlur: onBlur
  });
}
export default Textarea;