function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { Cell } from '@jojobo/jing-ui';
import { CSSTransition } from 'react-transition-group';
import { DemoBlock } from "../../../demo";
import "./index.scss";
export default (function () {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    transition = _useState4[0],
    setTransition = _useState4[1];
  var animate = function animate(transitionName) {
    setShow(true);
    setTransition(transitionName);
    setTimeout(function () {
      setShow(false);
    }, 500);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u6587\u5B57\u7701\u7565",
    padding: "",
    className: "demo-style",
    background: ""
  }, /*#__PURE__*/React.createElement("div", {
    className: "jing-ellipsis"
  }, "\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E00\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565"), /*#__PURE__*/React.createElement("div", {
    className: "jing-multi-ellipsis--l2"
  }, "\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E24\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565"), /*#__PURE__*/React.createElement("div", {
    className: "jing-multi-ellipsis--l3"
  }, "\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E24\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565")), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "1px \u8FB9\u6846",
    padding: "",
    className: "demo-style"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jing-hairline--top"
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u52A8\u753B",
    padding: "",
    className: "demo-style"
  }, /*#__PURE__*/React.createElement(Cell, {
    isLink: true,
    title: "Fade",
    onClick: function onClick() {
      return animate('jing-fade');
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    isLink: true,
    title: "Slide Up",
    onClick: function onClick() {
      return animate('jing-slide-up');
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    isLink: true,
    title: "Slide Down",
    onClick: function onClick() {
      return animate('jing-slide-down');
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    isLink: true,
    title: "Slide Left",
    onClick: function onClick() {
      return animate('jing-slide-left');
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    isLink: true,
    title: "Slide Right",
    onClick: function onClick() {
      return animate('jing-slide-right');
    }
  }), /*#__PURE__*/React.createElement(CSSTransition, {
    in: show,
    timeout: 300,
    classNames: transition,
    unmountOnExit: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "demo-animate-block"
  }))));
});