function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { SortBar } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
export default (function () {
  var _useState = useState('annualized'),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    padding: ""
  }, /*#__PURE__*/React.createElement(SortBar, {
    activeKey: activeKey,
    onChange: function onChange(key, status) {
      setActiveKey(key);
    },
    onClick: function onClick() {
      console.log('点击筛选');
    }
  }, /*#__PURE__*/React.createElement(SortBar.Item, {
    title: "\u5E74\u5316",
    itemKey: "annualized"
  }), /*#__PURE__*/React.createElement(SortBar.Item, {
    title: "\u671F\u9650",
    itemKey: "term"
  }), /*#__PURE__*/React.createElement(SortBar.Item, {
    title: "\u4EF7\u683C",
    itemKey: "price"
  }))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u7C7B\u578B-\u7985\u6A21\u5F0F\uFF08\u56FA\u5B9A\u5BBD\u5EA6\uFF09",
    padding: ""
  }, /*#__PURE__*/React.createElement(SortBar, {
    activeKey: activeKey,
    onChange: function onChange(key, status) {
      setActiveKey(key);
    },
    type: "chan",
    onClick: function onClick() {
      console.log('点击筛选');
    }
  }, /*#__PURE__*/React.createElement(SortBar.Item, {
    title: "\u7ED3\u675F\u65F6\u95F4",
    itemKey: "time"
  }), /*#__PURE__*/React.createElement(SortBar.Item, {
    title: "\u4FDD\u8D39\u91D1\u989D",
    itemKey: "price1"
  }))));
});