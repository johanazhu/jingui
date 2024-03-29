function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { Cell, Input, KeyBoard, Toast, hooks } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
import { customLetterLayout, customNumberLayout } from "./data";
import "./index.scss";
export default (function () {
  var _useState = useState('default'),
    _useState2 = _slicedToArray(_useState, 2),
    layoutName = _useState2[0],
    setLayoutName = _useState2[1];
  var _hooks$useSetState = hooks.useSetState({
      v1: false,
      v2: false,
      v3: false,
      v4: false,
      v5: false,
      v6: false,
      v7: false
    }),
    _hooks$useSetState2 = _slicedToArray(_hooks$useSetState, 2),
    state = _hooks$useSetState2[0],
    setState = _hooks$useSetState2[1];
  var _hooks$useSetState3 = hooks.useSetState({
      visible: false,
      value: ''
    }),
    _hooks$useSetState4 = _slicedToArray(_hooks$useSetState3, 2),
    state1 = _hooks$useSetState4[0],
    setState1 = _hooks$useSetState4[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isActive = _useState4[0],
    setIsActive = _useState4[1];
  var handleShift = function handleShift() {
    console.log('是 shift', layoutName);
    var shiftToggle = layoutName === 'default' ? 'shift' : 'default';
    setLayoutName(shiftToggle);
  };
  var handleSymbol = function handleSymbol() {
    console.log('是 另一种模式');
    var shiftToggle = layoutName === 'default' ? 'symbol' : 'default';
    setLayoutName(shiftToggle);
  };
  var onHandleClose = function onHandleClose() {
    Toast('关闭');
  };
  var onHandlePress = function onHandlePress(text, type) {
    console.log('点的是什么', text, type);
    if (typeof text === 'string') {
      Toast(text);
    }
  };
  var onHandleDelete = function onHandleDelete() {
    Toast('删除');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    padding: "",
    className: "demo-jing-keyboard"
  }, /*#__PURE__*/React.createElement(Cell, {
    title: "\u5F39\u51FA\u9ED8\u8BA4\u952E\u76D8",
    isLink: true,
    onClick: function onClick() {
      setState({
        v1: true
      });
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u5F39\u51FA\u6570\u5B57\u952E\u76D8",
    isLink: true,
    onClick: function onClick() {
      setState({
        v2: true
      });
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u5F39\u51FA\u6570\u989D\u952E\u76D8",
    isLink: true,
    onClick: function onClick() {
      setState({
        v3: true
      });
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u5F39\u51FA\u8EAB\u4EFD\u8BC1\u53F7\u952E\u76D8",
    isLink: true,
    onClick: function onClick() {
      setState({
        v4: true
      });
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u5F39\u51FA\u5E26\u6807\u9898\u7684\u952E\u76D8",
    isLink: true,
    onClick: function onClick() {
      setState({
        v5: true
      });
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u81EA\u5B9A\u4E49\u5B57\u6BCD\u952E\u76D8\u5E03\u5C40",
    isLink: true,
    onClick: function onClick() {
      setState({
        v6: true
      });
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u81EA\u5B9A\u4E49\u6570\u5B57\u952E\u76D8\u5E03\u5C40",
    isLink: true,
    onClick: function onClick() {
      setState({
        v7: true
      });
    }
  }), /*#__PURE__*/React.createElement(Input.KeyBoard, {
    value: state1.value,
    placeholder: "\u53CC\u5411\u7ED1\u5B9A",
    active: isActive,
    onHandleFocus: function onHandleFocus() {
      setIsActive(true);
      setState1({
        visible: true
      });
    },
    onClearValue: function onClearValue() {
      setState1({
        value: ''
      });
    },
    maxLength: 20
  }), /*#__PURE__*/React.createElement(KeyBoard, {
    visible: state.v1,
    layoutName: layoutName,
    onBlur: function onBlur() {
      setState({
        v1: false
      });
    },
    onClose: onHandleClose,
    onPress: onHandlePress,
    onDelete: onHandleDelete
  }), /*#__PURE__*/React.createElement(KeyBoard, {
    visible: state.v2,
    theme: "number",
    onBlur: function onBlur() {
      setState({
        v2: false
      });
    },
    onClose: onHandleClose,
    onPress: onHandlePress,
    onDelete: onHandleDelete
  }), /*#__PURE__*/React.createElement(KeyBoard, {
    visible: state.v3,
    theme: "price",
    onBlur: function onBlur() {
      setState({
        v3: false
      });
    },
    onClose: onHandleClose,
    onPress: onHandlePress,
    onDelete: onHandleDelete
  }), /*#__PURE__*/React.createElement(KeyBoard, {
    visible: state.v4,
    theme: "id",
    onBlur: function onBlur() {
      setState({
        v4: false
      });
    },
    onClose: onHandleClose,
    onPress: onHandlePress,
    onDelete: onHandleDelete
  }), /*#__PURE__*/React.createElement(KeyBoard, {
    visible: state.v5,
    title: "\u5F39\u51FA\u5E26\u6807\u9898\u7684\u952E\u76D8",
    onBlur: function onBlur() {
      setState({
        v5: false
      });
    },
    onClose: onHandleClose,
    onPress: onHandlePress,
    onDelete: onHandleDelete
  }), /*#__PURE__*/React.createElement(KeyBoard, {
    visible: state.v6,
    title: "\u81EA\u5B9A\u4E49\u5B57\u6BCD\u952E\u76D8\u5E03\u5C40",
    theme: "custom-letter",
    layout: customLetterLayout,
    onBlur: function onBlur() {
      setState({
        v6: false
      });
    },
    onClose: onHandleClose,
    onPress: onHandlePress,
    onDelete: onHandleDelete
  }), /*#__PURE__*/React.createElement(KeyBoard, {
    visible: state.v7,
    title: "\u81EA\u5B9A\u4E49\u6570\u5B57\u952E\u76D8\u5E03\u5C40",
    theme: "custom-number",
    layout: customNumberLayout,
    onBlur: function onBlur() {
      setState({
        v7: false
      });
    },
    onClose: onHandleClose,
    onPress: onHandlePress,
    onDelete: onHandleDelete
  }), /*#__PURE__*/React.createElement(KeyBoard, {
    value: state1.value,
    visible: state1.visible,
    maxLength: 10,
    layoutName: layoutName,
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
  })));
});