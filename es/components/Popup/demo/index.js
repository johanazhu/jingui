function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useRef } from 'react';
import { Popup, Cell } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
export default (function () {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPopup = _useState2[0],
    setShowPopup = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showPopup1 = _useState4[0],
    setShowPopup1 = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showPopup2 = _useState6[0],
    setShowPopup2 = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showPopup3 = _useState8[0],
    setShowPopup3 = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    showPopup4 = _useState10[0],
    setShowPopup4 = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showPopup5 = _useState12[0],
    setShowPopup5 = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showPopup6 = _useState14[0],
    setShowPopup6 = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    showPopup7 = _useState16[0],
    setShowPopup7 = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    showPopup8 = _useState18[0],
    setShowPopup8 = _useState18[1];
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    showPopup9 = _useState20[0],
    setShowPopup9 = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    showPopup10 = _useState22[0],
    setShowPopup10 = _useState22[1];
  var popupRef = useRef();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    padding: "",
    className: "demo-jing-popup"
  }, /*#__PURE__*/React.createElement(Cell, {
    title: "\u5C55\u51FA\u5F39\u51FA\u5C42",
    isLink: true,
    onClick: function onClick() {
      return setShowPopup(true);
    }
  }), /*#__PURE__*/React.createElement(Popup, {
    visible: showPopup,
    onClose: function onClose() {
      return setShowPopup(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 50px'
    }
  }, "\u5185\u5BB9"))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u5F39\u51FA\u4F4D\u7F6E",
    padding: "",
    className: "demo-jing-popup"
  }, /*#__PURE__*/React.createElement(Cell, {
    title: "\u9876\u90E8\u5F39\u51FA",
    isLink: true,
    onClick: function onClick() {
      return setShowPopup1(true);
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u5E95\u90E8\u5F39\u51FA",
    isLink: true,
    onClick: function onClick() {
      return setShowPopup2(true);
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u5DE6\u4FA7\u5F39\u51FA",
    isLink: true,
    onClick: function onClick() {
      return setShowPopup3(true);
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u53F3\u4FA7\u5F39\u51FA",
    isLink: true,
    onClick: function onClick() {
      return setShowPopup4(true);
    }
  }), /*#__PURE__*/React.createElement(Popup, {
    visible: showPopup1,
    position: "top",
    style: {
      height: '30%'
    },
    onClose: function onClose() {
      return setShowPopup1(false);
    }
  }), /*#__PURE__*/React.createElement(Popup, {
    visible: showPopup2,
    position: "bottom"
    // style={{ height: '30%' }}
    ,
    onClose: function onClose() {
      return setShowPopup2(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100px',
      background: '#fff'
    }
  }, "\u5185\u5BB92")), /*#__PURE__*/React.createElement(Popup, {
    visible: showPopup3,
    position: "left",
    style: {
      width: '30%',
      height: '100%'
    },
    onClose: function onClose() {
      return setShowPopup3(false);
    }
  }), /*#__PURE__*/React.createElement(Popup, {
    visible: showPopup4,
    position: "right",
    style: {
      width: '30%',
      height: '100%'
    },
    onClose: function onClose() {
      return setShowPopup4(false);
    }
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u6307\u5B9A\u6302\u8F7D\u8282\u70B9",
    padding: "",
    className: "demo-jing-popup"
  }, /*#__PURE__*/React.createElement(Cell, {
    title: "\u6307\u5B9A\u6302\u8F7D\u8282\u70B9",
    isLink: true,
    onClick: function onClick() {
      return setShowPopup5(true);
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: function ref(_ref) {
      return popupRef;
    },
    style: {
      fontSize: '12px',
      padding: '16px'
    }
  }, "\u53BBF12\u4E2D\u770B dom \u7ED3\u6784"), /*#__PURE__*/React.createElement(Popup, {
    visible: showPopup5,
    mountContainer: popupRef.current,
    onClose: function onClose() {
      return setShowPopup5(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 50px'
    }
  }, "\u5185\u5BB9"))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u4E8B\u4EF6\u5904\u7406",
    padding: "",
    className: "demo-jing-popup"
  }, /*#__PURE__*/React.createElement(Cell, {
    title: "\u4E8B\u4EF6\u5904\u7406",
    isLink: true,
    onClick: function onClick() {
      return setShowPopup6(true);
    }
  }), /*#__PURE__*/React.createElement(Popup, {
    visible: showPopup6,
    mountContainer: popupRef.current,
    onOpen: function onOpen() {
      return console.log('打开时');
    },
    onOpened: function onOpened() {
      return console.log('打开完成');
    },
    onClose: function onClose() {
      setShowPopup6(false);
      console.log('关闭时');
    },
    onClosed: function onClosed() {
      return console.log('关闭完成');
    },
    onClickOverlay: function onClickOverlay() {
      return console.log('点击遮罩关闭弹出层');
    },
    onClick: function onClick() {
      return console.log('点击我本人');
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 50px'
    }
  }, "F12\u770Bconsole"))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u5141\u8BB8\u6ED1\u52A8",
    padding: "",
    className: "demo-jing-popup"
  }, /*#__PURE__*/React.createElement(Cell, {
    title: "\u5141\u8BB8\u6ED1\u52A8",
    isLink: true,
    onClick: function onClick() {
      return setShowPopup7(true);
    }
  }), /*#__PURE__*/React.createElement(Popup, {
    visible: showPopup7,
    lockScroll: false,
    mountContainer: popupRef.current,
    onClose: function onClose() {
      return setShowPopup7(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 50px'
    }
  }, "\u5185\u5BB9"))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u5173\u95ED\u56FE\u6807",
    padding: "",
    className: "demo-jing-popup"
  }, /*#__PURE__*/React.createElement(Cell, {
    title: "\u5173\u95ED\u56FE\u6807",
    isLink: true,
    onClick: function onClick() {
      return setShowPopup8(true);
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u56FE\u6807\u4F4D\u7F6E-\u5DE6\u4E0A",
    isLink: true,
    onClick: function onClick() {
      return setShowPopup9(true);
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u56FE\u6807\u4F4D\u7F6E-\u53F3\u4E0B",
    isLink: true,
    onClick: function onClick() {
      return setShowPopup10(true);
    }
  }), /*#__PURE__*/React.createElement(Popup, {
    visible: showPopup8,
    closeable: true,
    style: {
      height: '30%'
    },
    position: "bottom",
    onClose: function onClose() {
      return setShowPopup8(false);
    }
  }), /*#__PURE__*/React.createElement(Popup, {
    visible: showPopup9,
    closeable: true,
    style: {
      height: '30%'
    },
    position: "bottom",
    closeIconPosition: "top-left",
    onClose: function onClose() {
      return setShowPopup9(false);
    }
  }), /*#__PURE__*/React.createElement(Popup, {
    visible: showPopup10,
    closeable: true,
    style: {
      height: '30%'
    },
    position: "bottom",
    closeIconPosition: "bottom-right",
    onClose: function onClose() {
      return setShowPopup10(false);
    }
  })));
});