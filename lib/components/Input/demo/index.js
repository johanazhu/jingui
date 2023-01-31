"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _jingUi = require("@jojobo/jing-ui");
var _demo = require("../../../demo");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _default = function _default() {
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    title2 = _useState4[0],
    setTitle2 = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    iserror = _useState6[0],
    setIsError = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    text = _useState8[0],
    setText = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    value = _useState10[0],
    setValue = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isActive = _useState12[0],
    setIsActive = _useState12[1];
  (0, _react.useEffect)(function () {
    if (title2.length > 3) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [title2]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u57FA\u7840\u7528\u6CD5",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Input, {
    placeholder: "\u8BF7\u8F93\u5165",
    value: title,
    onChange: function onChange(value) {
      setTitle(value);
    },
    onBlur: function onBlur(value) {
      return console.log("onBlur: ".concat(value));
    }
  }), /*#__PURE__*/_react.default.createElement(_jingUi.Space, {
    style: {
      backgroundColor: 'grey'
    }
  }), /*#__PURE__*/_react.default.createElement(_jingUi.Input, {
    placeholder: "\u8BF7\u8F93\u5165\u8D85\u8FC73\u4E2A\u5B57\u62A5\u9519",
    value: title2,
    error: iserror,
    onChange: function onChange(value) {
      setTitle2(value);
    }
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u5E26\u524D\u7F00\u7684\u8F93\u5165\u6846",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Input.Prefix, {
    value: value,
    placeholder: "\u5E26\u524D\u7F00\u7684\u8F93\u5165\u6846",
    icon: /*#__PURE__*/_react.default.createElement(_jingUi.IconUser, null)
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u5E26\u540E\u7F00\u7684\u8F93\u5165\u6846",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Input.Suffix, {
    value: value,
    placeholder: "\u5E26\u540E\u7F00\u7684\u8F93\u5165\u6846",
    icon: /*#__PURE__*/_react.default.createElement(_jingUi.IconArrow, null)
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u5E26\u5BC6\u7801\u7684\u8F93\u5165\u6846",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Input.Password, {
    value: value,
    placeholder: "\u5E26\u5BC6\u7801\u7684\u8F93\u5165\u6846"
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u5E26\u6E05\u9664\u7684\u8F93\u5165\u6846",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Input.Clear, {
    value: value,
    placeholder: "\u5E26\u6E05\u9664\u7684\u8F93\u5165\u6846"
  }), /*#__PURE__*/_react.default.createElement(_jingUi.Space, {
    style: {
      backgroundColor: 'grey'
    }
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u5E26\u53D1\u9001\u9A8C\u8BC1\u7801\u7684\u8F93\u5165\u6846",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Input.Verify, {
    value: value,
    placeholder: "\u5E26\u53D1\u9001\u9A8C\u8BC1\u7801\u7684\u8F93\u5165\u6846",
    onHandleSendMessage: function onHandleSendMessage() {
      console.log('调接口');
    }
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "KeyBoard\u8F93\u5165\u6846",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Input.KeyBoard, {
    value: value,
    placeholder: "\u5177\u4F53\u53EF\u53BB\u952E\u76D8\u7EC4\u4EF6\u67E5\u770Bdemo",
    active: isActive,
    onHandleFocus: function onHandleFocus() {
      setIsActive(true);
      console.log('keyboard聚焦时');
    },
    onClearValue: function onClearValue() {
      setIsActive(false);
      console.log('点击清除图标时');
    },
    maxLength: 20
  })), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u591A\u884C\u6587\u672C",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Input.Textarea, {
    rows: 3,
    placeholder: "\u8BF7\u8F93\u5165",
    value: text,
    onChange: function onChange(value) {
      setText(value);
      console.log("onChange: ".concat(value));
    },
    onBlur: function onBlur(value) {
      return console.log("onBlur: ".concat(value));
    }
  })));
};
exports.default = _default;