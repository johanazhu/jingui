function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect, useCallback, useRef } from 'react';
import classnames from 'classnames';
import { IconCircleDelete } from "../Icon";
import Group from "./group";
import Input from "./base";
var prefixCls = 'jing-input';
function useInputValue(initialValue) {
  var _useState = useState(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var onChange = useCallback(function (val) {
    setValue(val);
  }, []);
  var updateValue = function updateValue(value) {
    setValue(value);
  };
  var clearValue = function clearValue() {
    setValue('');
  };
  return {
    value: value,
    onChange: onChange,
    updateValue: updateValue,
    clearValue: clearValue
  };
}
var Clear = function Clear(props) {
  var className = props.className,
    groupClassName = props.groupClassName,
    style = props.style,
    groupStyle = props.groupStyle,
    placeholder = props.placeholder,
    type = props.type,
    maxLength = props.maxLength,
    minLength = props.minLength,
    disabled = props.disabled,
    value = props.value,
    _onChange = props.onChange,
    onFocus = props.onFocus,
    _onBlur = props.onBlur,
    render = props.render,
    backRender = props.backRender;
  var timer;
  var oInput = useInputValue(value);
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isFocus = _useState4[0],
    setIsFocus = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isShowClear = _useState6[0],
    setIsShowClear = _useState6[1];
  var inputRef = useRef(null);
  useEffect(function () {
    if (oInput.value !== '' && isFocus) {
      setIsShowClear(true);
    } else {
      // setIsShowClear(false);
    }
  }, [oInput.value]);
  useEffect(function () {
    return function () {
      timer = null;
    };
  }, []);
  function onHandleFocus(e) {
    setIsFocus(true);
    onFocus && onFocus(e);
    if (oInput.value !== '') {
      setIsShowClear(true);
    }
  }
  return /*#__PURE__*/React.createElement(Group, {
    className: classnames(groupClassName),
    style: groupStyle
  }, /*#__PURE__*/React.createElement(Input, {
    ref: inputRef,
    className: classnames(className),
    style: style,
    placeholder: placeholder,
    type: type,
    maxLength: maxLength,
    minLength: minLength,
    disabled: disabled,
    value: oInput.value,
    onChange: function onChange(res, e) {
      oInput.onChange(res);
      _onChange && _onChange(res, e);
    },
    onFocus: onHandleFocus,
    onBlur: function onBlur(e) {
      // 小于300毫秒即可，但是要大于100毫秒，不然鼠标点击是反应不过来的
      timer = setTimeout(function () {
        setIsShowClear(false);
      }, 200);
      _onBlur && _onBlur(e);
    }
  }), render, isShowClear && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "--clear"),
    onClick: function onClick() {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
      oInput.clearValue();
      _onChange && _onChange('');
    }
  }, /*#__PURE__*/React.createElement(IconCircleDelete, null)), backRender);
};
Clear.defaultProps = {
  disabled: false,
  error: false
};
export default Clear;