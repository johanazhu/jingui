function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { TabBar, IconHome, IconFinancial, IconUser, IconMall, IconMallBlack, IconFind, IconFindBlack, IconMy, IconMyBlack } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
export default (function () {
  var _useState = useState('home'),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var _useState3 = useState('mall'),
    _useState4 = _slicedToArray(_useState3, 2),
    activeKey1 = _useState4[0],
    setActiveKey1 = _useState4[1];
  var _useState5 = useState('home'),
    _useState6 = _slicedToArray(_useState5, 2),
    activeKey2 = _useState6[0],
    setActiveKey2 = _useState6[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    padding: "",
    className: "demo-jing-tabbar"
  }, /*#__PURE__*/React.createElement(TabBar, {
    activeKey: activeKey,
    onChange: function onChange(key) {
      setActiveKey(key);
    }
  }, /*#__PURE__*/React.createElement(TabBar.Item, {
    itemKey: "home",
    title: "\u4E3B\u9875",
    icon: /*#__PURE__*/React.createElement(IconHome, null)
  }), /*#__PURE__*/React.createElement(TabBar.Item, {
    itemKey: "financial",
    title: "\u7406\u8D22",
    icon: /*#__PURE__*/React.createElement(IconFinancial, null)
  }), /*#__PURE__*/React.createElement(TabBar.Item, {
    itemKey: "user",
    title: "\u6211\u7684",
    icon: /*#__PURE__*/React.createElement(IconUser, null)
  }))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD52",
    padding: "",
    className: "demo-jing-tabbar"
  }, /*#__PURE__*/React.createElement(TabBar, {
    activeKey: activeKey1,
    onChange: function onChange(key) {
      setActiveKey1(key);
    }
  }, /*#__PURE__*/React.createElement(TabBar.Item, {
    itemKey: "mall",
    title: "\u9CB8\u9009\u4FDD\u9669",
    icon: /*#__PURE__*/React.createElement(IconMall, null),
    greyIcon: /*#__PURE__*/React.createElement(IconMallBlack, null)
  }), /*#__PURE__*/React.createElement(TabBar.Item, {
    itemKey: "find",
    title: "\u53D1\u73B0",
    icon: /*#__PURE__*/React.createElement(IconFind, null),
    greyIcon: /*#__PURE__*/React.createElement(IconFindBlack, null)
  }), /*#__PURE__*/React.createElement(TabBar.Item, {
    itemKey: "my",
    title: "\u6211\u7684",
    icon: /*#__PURE__*/React.createElement(IconMy, null),
    greyIcon: /*#__PURE__*/React.createElement(IconMyBlack, null)
  }))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u76D1\u542C\u5207\u6362\u6807\u7B7E\u524D\u7684\u56DE\u8C03\u51FD\u6570",
    padding: "",
    className: "demo-jing-tabbar"
  }, /*#__PURE__*/React.createElement(TabBar, {
    activeKey: activeKey2,
    beforeChange: function beforeChange(value) {
      if (value === 'user') {
        console.log('点击我的不能打印');
        return false;
      } else {
        return new Promise(function (resolve) {
          setTimeout(function () {
            console.log('1秒后打印');
            resolve(true);
          }, 1000);
        });
      }
    },
    onChange: function onChange(key) {
      setActiveKey2(key);
    }
  }, /*#__PURE__*/React.createElement(TabBar.Item, {
    itemKey: "home",
    title: "\u4E3B\u9875",
    icon: /*#__PURE__*/React.createElement(IconHome, null)
  }), /*#__PURE__*/React.createElement(TabBar.Item, {
    itemKey: "financial",
    title: "\u7406\u8D22",
    icon: /*#__PURE__*/React.createElement(IconFinancial, null)
  }), /*#__PURE__*/React.createElement(TabBar.Item, {
    itemKey: "user",
    title: "\u6211\u7684",
    icon: /*#__PURE__*/React.createElement(IconUser, null)
  }))));
});