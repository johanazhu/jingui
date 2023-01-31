function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { Tabs, IndexBar, Cell } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
export default (function () {
  var indexList = [];
  var customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10];
  var charCodeOfA = 'A'.charCodeAt(0);
  for (var i = 0; i < 26; i += 1) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tabs, {
    value: value,
    onChange: function onChange(index) {
      index && setValue(index);
    }
  }, /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u7528\u6CD5\u793A\u4F8B"
  }, /*#__PURE__*/React.createElement(DemoBlock, {
    padding: "",
    background: "transparent"
  }, /*#__PURE__*/React.createElement(IndexBar, null, indexList.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item
    }, /*#__PURE__*/React.createElement(IndexBar.Anchor, {
      index: item
    }), /*#__PURE__*/React.createElement(Cell, {
      title: "\u6587\u672C"
    }), /*#__PURE__*/React.createElement(Cell, {
      title: "\u6587\u672C"
    }), /*#__PURE__*/React.createElement(Cell, {
      title: "\u6587\u672C"
    }));
  })))), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u81EA\u5B9A\u4E49\u7D22\u5F15\u5217\u8868"
  }, /*#__PURE__*/React.createElement(DemoBlock, {
    padding: "",
    background: "transparent"
  }, /*#__PURE__*/React.createElement(IndexBar, {
    indexList: customIndexList
  }, customIndexList.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item
    }, /*#__PURE__*/React.createElement(IndexBar.Anchor, {
      index: item
    }, "\u6807\u9898 ", item), /*#__PURE__*/React.createElement(Cell, {
      title: "\u6587\u672C"
    }), /*#__PURE__*/React.createElement(Cell, {
      title: "\u6587\u672C"
    }), /*#__PURE__*/React.createElement(Cell, {
      title: "\u6587\u672C"
    }));
  }))))));
});