function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, forwardRef, useRef, useMemo, useImperativeHandle } from 'react';
import classnames from 'classnames';
import { useSetState, useUpdateEffect } from "../hooks";
import { isDef, isFunction, formatNumber, addUnit } from "../../utils";
var prefixCls = 'jing-password-input';
var PasswordInput = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className,
    value = props.value,
    type = props.type,
    mask = props.mask,
    autoFocus = props.autoFocus,
    _props$length = props.length,
    length = _props$length === void 0 ? 6 : _props$length,
    gutter = props.gutter,
    onChange = props.onChange,
    onSubmit = props.onSubmit,
    _onFocus = props.onFocus,
    _onBlur = props.onBlur,
    mode = props.mode;
  var classes = classnames(className, prefixCls);
  var ulClass = classnames("".concat(prefixCls, "__security"), {
    'jing-hairline--surround': !gutter
  });
  var inputRef = useRef(null);
  var innerEffect = useRef(false);
  var _useSetState = useSetState({
      code: value || '',
      focused: autoFocus,
      inputType: type,
      inputMode: 'text'
    }),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    state = _useSetState2[0],
    updateState = _useSetState2[1];
  var codeArr = useMemo(function () {
    var _state$code;
    return (_state$code = state.code) === null || _state$code === void 0 ? void 0 : _state$code.toString().split('');
  }, [state.code]);
  var cursorIndex = useMemo(function () {
    return codeArr.length;
  }, [codeArr.length]);
  useEffect(function () {
    if (state.code.length >= length) {
      var _inputRef$current, _inputRef$current$blu;
      inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : (_inputRef$current$blu = _inputRef$current.blur) === null || _inputRef$current$blu === void 0 ? void 0 : _inputRef$current$blu.call(_inputRef$current);
      onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(state.code);
    }
  }, [length, state.code]);
  useUpdateEffect(function () {
    var _props$value;
    if (innerEffect.current) {
      innerEffect.current = false;
      return;
    }
    formatValue((_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : '');
  }, [value]);
  useUpdateEffect(function () {
    if (type === 'number') {
      updateState({
        inputType: 'tel',
        inputMode: 'numeric'
      });
    } else {
      updateState({
        inputType: 'text'
      });
    }
  }, [type]);
  var focus = function focus() {
    var _inputRef$current2;
    inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.focus();
    updateState({
      focused: true
    });
  };
  var blur = function blur() {
    var _inputRef$current3;
    inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.blur();
    updateState({
      focused: false
    });
  };
  var clear = function clear() {
    updateState({
      code: ''
    });
  };
  var formatValue = function formatValue(val, callback) {
    var _val;
    if (isDef(length) && ((_val = val) === null || _val === void 0 ? void 0 : _val.length) > +length) {
      val = val.slice(0, length);
    }
    if (type === 'number') {
      val = formatNumber(val, false, false);
    }
    updateState({
      code: val
    });
    if (isFunction(callback)) callback(val);
  };
  var handleChange = function handleChange(event) {
    var val = event.target.value || '';
    innerEffect.current = true;
    formatValue(val, onChange);
  };
  var onHandleTouchStart = function onHandleTouchStart(event) {
    if (mode === 'normal') return;
    event.stopPropagation();
    // emit(ctx, 'focus', event);
    updateState({
      focused: true
    });
    _onFocus === null || _onFocus === void 0 ? void 0 : _onFocus();
  };
  useImperativeHandle(ref, function () {
    return {
      focus: focus,
      blur: blur,
      clear: clear
    };
  });
  var renderPoints = function renderPoints() {
    var Points = [];
    for (var i = 0; i < length; i++) {
      var char = codeArr[i];
      var showBorder = i !== 0 && !gutter;
      // const showCursor = state.focused && cursorIndex === i && !char;
      var showCursor = state.focused && i === cursorIndex;
      // console.log('state.focused', state.focused)
      // console.log('cursorIndex', cursorIndex)
      // console.log('showCursor', showCursor)
      var style = void 0;
      if (i !== 0 && gutter) {
        style = {
          marginLeft: addUnit(gutter)
        };
      }
      var liClass = classnames("".concat(prefixCls, "__item"), {
        'jing-hairline--left': showBorder
      });
      Points.push( /*#__PURE__*/React.createElement("li", {
        key: i,
        className: liClass,
        style: style
      }, mask ? /*#__PURE__*/React.createElement("i", {
        style: {
          visibility: char ? 'visible' : 'hidden'
        }
      }) : char, showCursor && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "__cursor")
      })));
    }
    return Points;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement("ul", {
    className: ulClass,
    onTouchStart: onHandleTouchStart
  }, renderPoints(), mode === 'normal' && /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: state.inputType,
    inputMode: state.inputMode,
    pattern: "[0-9]*",
    maxLength: length,
    value: state.code,
    autoComplete: "false",
    autoCorrect: "off",
    autoCapitalize: "off",
    autoFocus: autoFocus,
    spellCheck: "false",
    onChange: handleChange,
    onFocus: function onFocus(e) {
      updateState({
        focused: true
      });
      _onFocus === null || _onFocus === void 0 ? void 0 : _onFocus(e);
    },
    onBlur: function onBlur(e) {
      updateState({
        focused: false
      });
      _onBlur === null || _onBlur === void 0 ? void 0 : _onBlur(e);
    }
  })));
});
PasswordInput.defaultProps = {
  length: 6,
  type: 'text',
  autoFocus: false,
  mask: true,
  mode: 'normal'
};
export default PasswordInput;