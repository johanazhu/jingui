function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useRef } from 'react';
import { Picker, Popup, Cell, Toast } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
import { normalColumns, disabledColumns, multipleColumns, cascadeColumns } from "./data";
export default (function () {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPopup = _useState2[0],
    setShowPopup = _useState2[1];
  var pickerRef = useRef(null);
  var _useState3 = useState('选择城市'),
    _useState4 = _slicedToArray(_useState3, 2),
    city = _useState4[0],
    setCity = _useState4[1];
  var cities = {
    浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    福建: ['福州', '厦门', '莆田', '三明', '泉州']
  };
  var onConfirm = function onConfirm(value, index) {
    Toast("\u5F53\u524D\u503C: ".concat(value, ", \u5F53\u524D\u7D22\u5F15: ").concat(index));
  };
  var onCancel = function onCancel() {
    return Toast('取消');
  };
  var onChange = function onChange(value, index) {
    console.log('value', value);
    Toast("\u5F53\u524D\u503C: ".concat(value, ", \u5F53\u524D\u7D22\u5F15: ").concat(index));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    padding: "",
    className: "demo-jing-picker"
  }, /*#__PURE__*/React.createElement(Picker, {
    title: "\u57FA\u672C\u7528\u6CD5",
    columns: normalColumns,
    onConfirm: onConfirm,
    onCancel: onCancel,
    onChange: onChange
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u9ED8\u8BA4\u9009\u4E2D\u9879",
    padding: "",
    className: "demo-jing-picker"
  }, /*#__PURE__*/React.createElement(Picker, {
    title: "\u9ED8\u8BA4\u9009\u4E2D\u9879",
    columns: normalColumns,
    defaultIndex: 2,
    onChange: onChange
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u7981\u7528\u9009\u9879",
    padding: "",
    className: "demo-jing-picker"
  }, /*#__PURE__*/React.createElement(Picker, {
    title: "\u7981\u7528\u9009\u9879",
    columns: disabledColumns
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u591A\u5217\u9009\u62E9",
    padding: "",
    className: "demo-jing-picker"
  }, /*#__PURE__*/React.createElement(Picker, {
    title: "\u591A\u5217\u9009\u62E9",
    columns: multipleColumns
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u7EA7\u8054\u9009\u62E9",
    padding: "",
    className: "demo-jing-picker"
  }, /*#__PURE__*/React.createElement(Picker, {
    title: "\u7EA7\u8054\u9009\u62E9",
    columns: cascadeColumns,
    onChange: function onChange(value, index) {
      console.log('value', value);
    }
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u52A8\u6001\u8BBE\u7F6E\u9009\u9879",
    padding: "",
    className: "demo-jing-picker"
  }, /*#__PURE__*/React.createElement(Picker, {
    ref: pickerRef,
    title: "\u52A8\u6001\u8BBE\u7F6E\u9009\u9879",
    columns: [{
      values: Object.keys(cities)
    }, {
      values: cities['浙江'],
      defaultIndex: 2
    }],
    onChange: function onChange(values) {
      pickerRef.current.setColumnValues(1, cities[values[0]]);
    }
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u52A0\u8F7D\u72B6\u6001",
    padding: "",
    className: "demo-jing-picker"
  }, /*#__PURE__*/React.createElement(Picker, {
    title: "\u52A0\u8F7D\u72B6\u6001",
    loading: true,
    columns: multipleColumns
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528",
    padding: "",
    className: "demo-jing-picker"
  }, /*#__PURE__*/React.createElement(Cell, {
    title: "\u57CE\u5E02",
    value: city,
    isLink: true,
    onClick: function onClick() {
      setShowPopup(true);
    }
  }), /*#__PURE__*/React.createElement(Popup, {
    visible: showPopup,
    position: "bottom",
    onClose: function onClose() {
      return setShowPopup(false);
    }
  }, /*#__PURE__*/React.createElement(Picker, {
    title: "\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528",
    columns: normalColumns,
    onConfirm: function onConfirm() {
      return setShowPopup(false);
    },
    onCancel: function onCancel() {
      return setShowPopup(false);
    },
    onChange: function onChange(value, index) {
      console.log('value', value);
      setCity(value);
    }
  }))));
});