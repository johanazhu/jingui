function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { Cell, Input, Button, KeyBoard, Toast, hooks } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
export default (function () {
  var _hooks$useSetState = hooks.useSetState({
      text: '',
      tel: '',
      digit: '',
      num: '',
      password: ''
    }),
    _hooks$useSetState2 = _slicedToArray(_hooks$useSetState, 2),
    state = _hooks$useSetState2[0],
    updateState = _hooks$useSetState2[1];
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    value1 = _useState4[0],
    setValue1 = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isActive = _useState6[0],
    setIsActive = _useState6[1];
  var _hooks$useSetState3 = hooks.useSetState({
      visible: false,
      value: ''
    }),
    _hooks$useSetState4 = _slicedToArray(_hooks$useSetState3, 2),
    state1 = _hooks$useSetState4[0],
    setState1 = _hooks$useSetState4[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u7ED3\u5408\u952E\u76D8\u7684Input",
    padding: ""
  }, /*#__PURE__*/React.createElement(Cell, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Input.KeyBoard, {
    value: state1.value,
    placeholder: "\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801",
    active: isActive,
    onHandleFocus: function onHandleFocus() {
      setIsActive(true);
      setState1({
        visible: true
      });
      console.log('keyboard聚焦时');
    },
    onClearValue: function onClearValue() {
      // setIsActive(false);
      setState1({
        value: ''
      });
      console.log('点击清除图标时');
    },
    maxLength: 20
  })), /*#__PURE__*/React.createElement(KeyBoard, {
    value: state1.value,
    visible: state1.visible,
    maxLength: 10,
    layoutName: "default",
    onBlur: function onBlur() {
      setState1({
        visible: false
      });
    },
    onInput: function onInput(value) {
      setState1({
        value: value
      });
    },
    onSpaceCb: function onSpaceCb() {
      Toast('空格不可用');
    },
    onDoneCb: function onDoneCb() {
      Toast('点击完成');
    }
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u7840\u7528\u6CD5",
    padding: ""
  }, /*#__PURE__*/React.createElement(Cell, null, /*#__PURE__*/React.createElement(Input, {
    value: state.text,
    onChange: function onChange(text) {
      return updateState({
        text: text
      });
    },
    placeholder: "\u8BF7\u8F93\u5165\u6587\u672C"
  })), /*#__PURE__*/React.createElement(Cell, null, /*#__PURE__*/React.createElement(Input, {
    value: state.tel,
    type: "tel",
    onChange: function onChange(tel) {
      return updateState({
        tel: tel
      });
    },
    placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
  })), /*#__PURE__*/React.createElement(Cell, null, /*#__PURE__*/React.createElement(Input, {
    value: state.digit,
    type: "digit",
    onChange: function onChange(digit) {
      return updateState({
        digit: digit
      });
    },
    placeholder: "\u8BF7\u8F93\u5165\u6574\u6570"
  })), /*#__PURE__*/React.createElement(Cell, null, /*#__PURE__*/React.createElement(Input, {
    value: state.num,
    type: "number",
    onChange: function onChange(num) {
      return updateState({
        num: num
      });
    },
    placeholder: "\u8BF7\u8F93\u5165\u6570\u5B57"
  })), /*#__PURE__*/React.createElement(Cell, null, /*#__PURE__*/React.createElement(Input, {
    value: state.password,
    type: "password",
    onChange: function onChange(password) {
      return updateState({
        password: password
      });
    },
    placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
  }))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u6E05\u9664\u6309\u94AE",
    padding: ""
  }, /*#__PURE__*/React.createElement(Cell, null, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u8BF7\u8F93\u5165\u6587\u672C",
    value: value,
    onChange: setValue,
    clearable: true,
    onClear: function onClear() {
      setValue('');
    }
  }))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u63D2\u5165\u5185\u5BB9",
    padding: ""
  }, /*#__PURE__*/React.createElement(Cell, null, /*#__PURE__*/React.createElement(Input, {
    prefix: "\uD83D\uDC81",
    suffix: /*#__PURE__*/React.createElement(Button, {
      size: "small",
      type: "primary"
    }, "\u53D1\u9001"),
    value: value1,
    onChange: setValue1,
    placeholder: "\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801"
  }))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u591A\u884C\u8F93\u5165",
    padding: ""
  }, /*#__PURE__*/React.createElement(Cell, null, /*#__PURE__*/React.createElement(Input.TextArea, {
    placeholder: "\u591A\u884C\u8F93\u5165"
  }))));
});