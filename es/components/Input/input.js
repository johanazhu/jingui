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
import React, { useState, useEffect, useCallback, forwardRef, memo, useMemo, useRef, useImperativeHandle } from 'react';
import classnames from 'classnames';
import { isDef, formatNumber, resetScroll } from "../../utils";
import { IconCircleDelete } from "../Icon";
var prefixCls = 'jing-input';
function useInputValue(initialValue) {
  var _useState = useState(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var onChange = useCallback(function (e) {
    setValue(e.currentTarget.value);
  }, []);
  var updateValue = function updateValue(v) {
    setValue(v);
  };
  return {
    value: value,
    onChange: onChange,
    updateValue: updateValue
  };
}
var Input = /*#__PURE__*/forwardRef(function (props, ref) {
  var type = props.type,
    style = props.style,
    value = props.value,
    align = props.align,
    className = props.className,
    minLength = props.minLength,
    maxLength = props.maxLength,
    placeholder = props.placeholder,
    disabled = props.disabled,
    readOnly = props.readOnly,
    clearable = props.clearable,
    clearIcon = props.clearIcon,
    prefix = props.prefix,
    suffix = props.suffix,
    autoFocus = props.autoFocus,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onChange = props.onChange,
    onOverlimit = props.onOverlimit,
    onClear = props.onClear,
    onClick = props.onClick;
  var oInput = useInputValue(value || '');
  var _useState3 = useState(disabled),
    _useState4 = _slicedToArray(_useState3, 2),
    isBan = _useState4[0],
    setIsBan = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    inputFocus = _useState6[0],
    setInputFocus = _useState6[1];
  var inputRef = useRef();
  // const [value, setValue] = useState(value)

  useEffect(function () {
    oInput.updateValue(value);
  }, [value]);
  useEffect(function () {
    setIsBan(disabled);
  }, [disabled]);
  var focus = function focus() {
    if (inputRef !== null && inputRef !== void 0 && inputRef.current) {
      inputRef.current.focus();
    }
  };
  var blur = function blur() {
    if (inputRef !== null && inputRef !== void 0 && inputRef.current) {
      inputRef.current.blur();
    }
  };
  useImperativeHandle(ref, function () {
    return {
      clear: function clear() {
        oInput.onChange('');
      },
      focus: focus,
      blur: blur,
      // @ts-ignore
      get nativeElement() {
        return inputRef.current;
      }
    };
  });
  var showClear = useMemo(function () {
    if (clearable && !readOnly) {
      return value !== '';
    }
    return false;
  }, [value, inputFocus]);
  var handleChange = function handleChange(e) {
    var _e$currentTarget;
    var inputValue = e === null || e === void 0 ? void 0 : (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.value;
    var finalValue = inputValue;
    if (isDef(maxLength) && finalValue.length > +maxLength) {
      finalValue = finalValue.slice(0, maxLength);
      onOverlimit === null || onOverlimit === void 0 ? void 0 : onOverlimit();
    }
    if (type === 'number' || type === 'digit') {
      var isNumber = type === 'number';
      finalValue = formatNumber(finalValue, isNumber, isNumber);
    }
    // console.log('finalValue', finalValue)
    // oInput.onChange(e);
    oInput.updateValue(finalValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(finalValue, e);
  };
  var handleClear = function handleClear(e) {
    // setValue('')
    oInput.updateValue('');
    onClear === null || onClear === void 0 ? void 0 : onClear(e);
  };
  var handleFocus = function handleFocus(e) {
    setInputFocus(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);

    // readOnly not work in legacy mobile safari
    if (readOnly) {
      blur();
    }
  };
  var handleBulr = function handleBulr(e) {
    setInputFocus(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    resetScroll();
  };
  var renderInput = function renderInput() {
    var inputType = type;
    var inputMode;

    // type="number" is weired in iOS, and can't prevent dot in Android
    // so use inputmode to set keyboard in mordern browers
    if (type === 'number') {
      inputType = 'text';
      inputMode = 'decimal';
    }
    if (type === 'digit') {
      inputType = 'tel';
      inputMode = 'numeric';
    }
    return /*#__PURE__*/React.createElement("input", {
      // @ts-ignore
      ref: inputRef,
      type: inputType
      // 写死，ios 端小写
      ,
      autoComplete: "off"
      // @ts-ignore
      ,
      inputMode: inputMode,
      value: oInput.value,
      className: "".concat(prefixCls, "__control"),
      disabled: isBan,
      placeholder: placeholder || '',
      maxLength: maxLength,
      minLength: minLength,
      autoFocus: autoFocus,
      onBlur: handleBulr,
      onFocus: handleFocus,
      onChange: handleChange,
      onClick: onClick
    });
  };
  var renderPrefix = function renderPrefix() {
    var showDesc = isDef(prefix);
    if (showDesc) {
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "__prefix")
      }, prefix);
    }
    return null;
  };
  var renderClear = function renderClear() {
    if (showClear) {
      return /*#__PURE__*/React.cloneElement(clearIcon, {
        className: "".concat(prefixCls, "__clear"),
        onClick: handleClear
      });
    }
    return null;
  };
  var renderSuffix = function renderSuffix() {
    var showDesc = isDef(suffix);
    if (showDesc) {
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "__suffix")
      }, suffix);
    }
    return null;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "--").concat(align), !!align)),
    style: style
  }, renderPrefix(), renderInput(), renderClear(), renderSuffix());
});
Input.defaultProps = {
  disabled: false,
  readOnly: false,
  clearable: false,
  clearIcon: /*#__PURE__*/React.createElement(IconCircleDelete, null)
};
export default /*#__PURE__*/memo(Input);