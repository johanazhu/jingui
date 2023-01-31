function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useRef } from 'react';
import { Scroll, hooks } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
import "./index.scss";
export default (function () {
  var _hooks$useSetState = hooks.useSetState({
      v1: false,
      v2: false,
      v3: false
      // v4: false,
      // v5: false,
      // v6: false,
      // v7: false,
    }),
    _hooks$useSetState2 = _slicedToArray(_hooks$useSetState, 2),
    state = _hooks$useSetState2[0],
    setState = _hooks$useSetState2[1];
  var scrollRef = useRef(null);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var onPullingUp = function onPullingUp() {};
  var onPullingDown = function onPullingDown() {};
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    padding: "",
    className: "demo-jing-scroll"
  }, /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("ul", null, new Array(20).fill(1).map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "item"
    }, index);
  })))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    padding: "",
    className: "demo-jing-scroll"
  }, /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("ul", null, new Array(20).fill(1).map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "item"
    }, index);
  })))));
});