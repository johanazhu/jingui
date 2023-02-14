function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { PasswordInput, KeyBoard, Toast, hooks } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
import "./index.scss";
export default (function () {
  var _hooks$useSetState = hooks.useSetState({
      visible: false,
      value: ''
    }),
    _hooks$useSetState2 = _slicedToArray(_hooks$useSetState, 2),
    state = _hooks$useSetState2[0],
    setState = _hooks$useSetState2[1];
  var onSubmit = function onSubmit(val) {
    console.log('onSubmit val', val);
    Toast("\u8F93\u5165\u503C\u4E3A\uFF1A".concat(val));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    padding: "",
    className: "demo-jing-password-input"
  }, /*#__PURE__*/React.createElement(PasswordInput, {
    autoFocus: true,
    onSubmit: onSubmit
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u81EA\u5B9A\u4E49\u957F\u5EA6",
    padding: "",
    className: "demo-jing-password-input"
  }, /*#__PURE__*/React.createElement(PasswordInput, {
    length: 4,
    onSubmit: onSubmit
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u683C\u5B50\u95F4\u8DDD",
    padding: "",
    className: "demo-jing-password-input"
  }, /*#__PURE__*/React.createElement(PasswordInput, {
    gutter: 10,
    onSubmit: onSubmit
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u8BBE\u7F6E\u5706\u89D2\u5927\u5C0F",
    padding: "",
    className: "demo-jing-password-input"
  }, /*#__PURE__*/React.createElement(PasswordInput, {
    gutter: 10,
    radius: "4",
    onSubmit: onSubmit
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u660E\u6587\u5C55\u793A",
    padding: "",
    className: "demo-jing-password-input"
  }, /*#__PURE__*/React.createElement(PasswordInput, {
    value: "123",
    mask: false,
    onSubmit: onSubmit
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u53EA\u5141\u8BB8\u6570\u5B57",
    padding: "",
    className: "demo-jing-password-input"
  }, /*#__PURE__*/React.createElement(PasswordInput, {
    type: "number",
    value: "123",
    mask: false,
    onSubmit: onSubmit
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u4E0E\u952E\u76D8\u8054\u52A8",
    padding: "",
    className: "demo-jing-password-input demo-jing-password-input-keyboard"
  }, /*#__PURE__*/React.createElement(PasswordInput, {
    mode: "keyboard",
    value: state.value,
    autoFocus: state.visible,
    onFocus: function onFocus() {
      return setState({
        visible: true
      });
    },
    onSubmit: onSubmit
  }), /*#__PURE__*/React.createElement(KeyBoard, {
    visible: state.visible,
    theme: "number",
    onBlur: function onBlur() {
      setState({
        visible: false
      });
    },
    onInput: function onInput(value) {
      console.log('value', value);
      setState({
        value: state.value + value
      });
    }
  })));
});