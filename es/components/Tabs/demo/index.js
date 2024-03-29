function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { Tabs } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
import "./index.scss";
export default (function () {
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u7840\u7528\u6CD5",
    padding: "0px",
    className: "demo-jing-tabs"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: value,
    onChange: function onChange(index) {
      index && setValue(index);
    }
  }, /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E1"
  }, "\u5185\u5BB9 1"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E2"
  }, "\u5185\u5BB9 2"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E3"
  }, "\u5185\u5BB9 3"))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u6807\u7B7E\u680F\u6EDA\u52A8",
    padding: "0px",
    className: "demo-jing-tabs"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: value
  }, /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E1"
  }, "\u5185\u5BB9 1"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E2"
  }, "\u5185\u5BB9 2"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E3"
  }, "\u5185\u5BB9 3"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E4"
  }, "\u5185\u5BB9 4"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E5"
  }, "\u5185\u5BB9 5"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E6"
  }, "\u5185\u5BB9 6"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E7"
  }, "\u5185\u5BB9 7"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E8"
  }, "\u5185\u5BB9 8"))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u7701\u7565\u8FC7\u957F\u7684\u6807\u9898\u6587\u5B57",
    padding: "0px",
    className: "demo-jing-tabs"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: value,
    ellipsis: true
  }, /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E1\u6807\u7B7E1\u6807\u7B7E1\u6807\u7B7E1\u6807\u7B7E1"
  }, "\u5185\u5BB9 1"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E2"
  }, "\u5185\u5BB9 2"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E3"
  }, "\u5185\u5BB9 3"))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u7981\u7528\u6807\u7B7E",
    padding: "0px",
    className: "demo-jing-tabs"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: value,
    onChange: function onChange(index) {
      index && setValue(index);
    },
    style: {
      height: '50vh'
    }
  }, /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E1"
  }, "\u5185\u5BB9 1"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E2",
    disabled: true
  }, "\u5185\u5BB9 2"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E3"
  }, "\u5185\u5BB9 3"))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u7C98\u6027\u5E03\u5C40",
    padding: "0px",
    className: "demo-jing-tabs"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: value,
    sticky: true,
    isChangeColor: true,
    style: {
      background: "var(--bg-white)"
    }
  }, /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E1"
  }, "\u5185\u5BB9 1"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E2"
  }, "\u5185\u5BB9 2"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E3"
  }, "\u5185\u5BB9 3"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E4"
  }, "\u5185\u5BB9 4"))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u6837\u5F0F\u98CE\u683C",
    padding: "0px",
    className: "demo-jing-tabs"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: value,
    type: "img",
    onChange: function onChange(index, item) {
      console.log('item', item);
      index && setValue(index);
    }
  }, /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6210\u4EBA\u4FDD\u9669",
    img: "https://prd-public-oss-jingxb.oss-cn-shanghai-finance-1-pub.aliyuncs.com/product/tag/productTag-%E6%88%90%E4%BA%BA%E4%BF%9D%E9%99%A9-01648519947630.png"
  }, "\u6210\u4EBA\u4FDD\u9669"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u8001\u5E74\u4EBA\u4FDD\u9669",
    img: "https://prd-public-oss-jingxb.oss-cn-shanghai-finance-1-pub.aliyuncs.com/product/tag/productTag-\u8001\u5E74\u4EBA\u4FDD\u9669-01648519957686.png"
  }, "\u8001\u5E74\u4EBA\u4FDD\u9669"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u5C11\u513F\u4FDD\u9669",
    img: "https://prd-public-oss-jingxb.oss-cn-shanghai-finance-1-pub.aliyuncs.com/product/tag/productTag-\u5C11\u513F\u4FDD\u9669-01648519970577.png"
  }, "\u5C11\u513F\u4FDD\u9669"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u8D22\u5BCC\u4FDD\u9669",
    img: "https://prd-public-oss-jingxb.oss-cn-shanghai-finance-1-pub.aliyuncs.com/product/tag/productTag-\u8D22\u5BCC\u4FDD\u9669-01648519998957.png"
  }, "\u8D22\u5BCC\u4FDD\u9669"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u573A\u666F\u4FDD\u9669",
    img: "https://prd-public-oss-jingxb.oss-cn-shanghai-finance-1-pub.aliyuncs.com/product/tag/productTag-\u573A\u666F\u4FDD\u9669-01648519980536.png"
  }, "\u573A\u666F\u4FDD\u9669"))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u6ED1\u52A8\u5207\u6362",
    padding: "0px",
    className: "demo-jing-tabs"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: value,
    swipeable: true
  }, /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E1"
  }, "\u5185\u5BB9 1"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E2"
  }, "\u5185\u5BB9 2"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E3"
  }, "\u5185\u5BB9 3"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E4"
  }, "\u5185\u5BB9 4"))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u70B9\u51FB\u4E8B\u4EF6",
    padding: "0px",
    className: "demo-jing-tabs"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: value,
    onChange: function onChange(index) {
      index && setValue(index);
      alert(index);
    }
  }, /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E1"
  }, "\u5185\u5BB9 1"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E2"
  }, "\u5185\u5BB9 2"), /*#__PURE__*/React.createElement(Tabs.Panel, {
    title: "\u6807\u7B7E3"
  }, "\u5185\u5BB9 3"))));
});