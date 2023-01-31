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
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_jingUi.Tabs, {
    value: value,
    sticky: true,
    onChange: function onChange(index) {
      index && setValue(index);
    }
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Tabs.Panel, {
    title: "\u7528\u6CD5\u793A\u4F8B"
  }, /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u57FA\u7840\u7528\u6CD5",
    className: "demo-jing-icon",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Row, {
    justify: "start",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconUser, null)), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconPhone, null)))), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u56FE\u6807\u989C\u8272",
    className: "demo-jing-icon",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Row, {
    justify: "start",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconUser, {
    color: "blue"
  })), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconUser, {
    color: "grey"
  })), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6,
    style: {
      background: '#ddd'
    }
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconUser, {
    color: "white"
  })), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconUser, {
    color: "black"
  })), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconUser, {
    color: "red"
  })), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconUser, {
    color: "orange"
  })), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconUser, {
    color: "shy-blue"
  })))), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u56FE\u6807\u5927\u5C0F",
    className: "demo-jing-icon",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Row, {
    justify: "start",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconCall, {
    size: "sm"
  })), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconCall, {
    size: "md"
  })), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconCall, {
    size: "lg"
  })), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconCall, {
    size: "auto"
  })))), /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    title: "\u4FDD\u6301\u539F\u6765\u989C\u8272",
    className: "demo-jing-icon",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Row, {
    justify: "start",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconPdf, null)), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconCustomer, null)), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconXiaojinguang, null)), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconZanOver, null))))), /*#__PURE__*/_react.default.createElement(_jingUi.Tabs.Panel, {
    title: "\u57FA\u7840\u56FE\u6848",
    className: "demo-jing-icon"
  }, /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    className: "demo-jing-icon",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Row, {
    justify: "start",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconEyeClose, null), /*#__PURE__*/_react.default.createElement("span", null, "\u95ED\u773C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconEyeOpen, null), /*#__PURE__*/_react.default.createElement("span", null, "\u7741\u773C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconEyeCloseTwo, null), /*#__PURE__*/_react.default.createElement("span", null, "\u95ED\u773C2")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconEyeOpenTwo, null), /*#__PURE__*/_react.default.createElement("span", null, "\u7741\u773C2")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconUser, null), /*#__PURE__*/_react.default.createElement("span", null, "\u7528\u6237")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconCircleDelete, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5220\u9664\u5706")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconRadioEmpty, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5355\u9009\u4E3A\u7A7A")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconRadioOk, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5355\u9009\u9009\u62E9")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconPhone, null), /*#__PURE__*/_react.default.createElement("span", null, "\u624B\u673A")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconEmail, null), /*#__PURE__*/_react.default.createElement("span", null, "\u90AE\u7BB1")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconMedal, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5A92\u4F53")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconEdit, null), /*#__PURE__*/_react.default.createElement("span", null, "\u7F16\u8F91")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconPassword, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5BC6\u7801")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconCall, null), /*#__PURE__*/_react.default.createElement("span", null, "\u7535\u8BDD")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconArrow, null), /*#__PURE__*/_react.default.createElement("span", null, "\u7BAD\u5934")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconRight, null), /*#__PURE__*/_react.default.createElement("span", null, "\u6253\u52FE")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconClose, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5173\u95ED")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconCircleOk, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5708\u5708\u6253\u52FE")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconRmb, null), /*#__PURE__*/_react.default.createElement("span", null, "\u4EBA\u540D\u5E01\uFFE5")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconAuthen, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5B8C\u6210\u72B6\u6001")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconBack, null), /*#__PURE__*/_react.default.createElement("span", null, "\u8FD4\u56DE")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconCalendar, null), /*#__PURE__*/_react.default.createElement("span", null, "\u65E5\u5386")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconCallcenter, null), /*#__PURE__*/_react.default.createElement("span", null, "\u8BA1\u7B97\u5668")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconCoin2, null), /*#__PURE__*/_react.default.createElement("span", null, "\u8D44\u4EA7-\u9009\u62E9")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconTrash, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5783\u573E\u6876")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconFace, null), /*#__PURE__*/_react.default.createElement("span", null, "\u4EBA\u8138")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconFinger, null), /*#__PURE__*/_react.default.createElement("span", null, "\u6307\u7EB9")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconGesture, null), /*#__PURE__*/_react.default.createElement("span", null, "\u624B\u52BF\u5BC6\u7801")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconHelp, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5E2E\u52A9")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconSoundOn, null), /*#__PURE__*/_react.default.createElement("span", null, "\u58F0\u97F3\u5F00")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconSoundOff, null), /*#__PURE__*/_react.default.createElement("span", null, "\u58F0\u97F3\u5173")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconIdCard, null), /*#__PURE__*/_react.default.createElement("span", null, "\u8EAB\u4EFD\u8BC1")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconIttype, null), /*#__PURE__*/_react.default.createElement("span", null, "\u6388\u6743\u8FC7\u7684\u8EAB\u4EFD")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconMagezine, null), /*#__PURE__*/_react.default.createElement("span", null, "\u6742\u5FD7")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconMoney, null), /*#__PURE__*/_react.default.createElement("span", null, "\u94B1")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconMore, null), /*#__PURE__*/_react.default.createElement("span", null, "\u66F4\u591A")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconMore2, null), /*#__PURE__*/_react.default.createElement("span", null, "\u7B49\u5F85\u4E2D")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconPaper, null), /*#__PURE__*/_react.default.createElement("span", null, "\u7EB8")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconRefresh, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5237\u65B0")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconSecurity, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5B89\u5168-\u952E\u76D8")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconWaiting, null), /*#__PURE__*/_react.default.createElement("span", null, "\u7B49\u5F85")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconCheckboxEmpty, null), /*#__PURE__*/_react.default.createElement("span", null, "\u9009\u62E9-\u7A7A")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconCheckboxOk, null), /*#__PURE__*/_react.default.createElement("span", null, "\u9009\u62E9-\u6253\u52FE")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconMoneyPlus, null), /*#__PURE__*/_react.default.createElement("span", null, "\u8D27\u5E01+")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconMoneyPlusFull, null), /*#__PURE__*/_react.default.createElement("span", null, "\u8D27\u5E01+2")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconExclamation, null), /*#__PURE__*/_react.default.createElement("span", null, "\u611F\u53F9")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconCustomer, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5BA2\u670D")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconNotice, null), /*#__PURE__*/_react.default.createElement("span", null, "\u6CE8\u610F")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconFZ, null), /*#__PURE__*/_react.default.createElement("span", null, "\u7FFB\u8F6C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconXiaojinguang, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5C0F\u91D1\u7F50")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconZan, null), /*#__PURE__*/_react.default.createElement("span", null, "\u70B9\u8D5E")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconZanOver, null), /*#__PURE__*/_react.default.createElement("span", null, "\u70B9\u8D5E-\u7A7A")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconPhoto, null), /*#__PURE__*/_react.default.createElement("span", null, "\u56FE\u7247")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconPhotoFail, null), /*#__PURE__*/_react.default.createElement("span", null, "\u56FE\u7247\u88C2\u5F00")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconShare, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5206\u4EAB")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconPdf, null), /*#__PURE__*/_react.default.createElement("span", null, "PDF")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconOfficeExcel, null), /*#__PURE__*/_react.default.createElement("span", null, "Excel")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconOfficePpt, null), /*#__PURE__*/_react.default.createElement("span", null, "PPT")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconOfficeWord, null), /*#__PURE__*/_react.default.createElement("span", null, "Word"))))), /*#__PURE__*/_react.default.createElement(_jingUi.Tabs.Panel, {
    title: "\u94F6\u884C\u5361"
  }, /*#__PURE__*/_react.default.createElement(_demo.DemoBlock, {
    className: "demo-jing-icon",
    padding: ""
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Row, {
    justify: "start",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconBJBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5317\u4EAC\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconBHBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5317\u4EAC\u519C\u6751\u5546\u4E1A\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconBJRCBBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u6E24\u6D77\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconGSBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5DE5\u5546\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconGDBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5149\u5927\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconGDNXBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5E7F\u4E1C\u519C\u4FE1")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconGFBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5E7F\u53D1\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconGZRCBBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5E7F\u5DDE\u519C\u6751\u5546\u4E1A\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconHFBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u6052\u4E30\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconHXBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u534E\u590F\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconJSUBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u6C5F\u82CF\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconJXBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u6C5F\u897F\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconJSHBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5EFA\u8BBE\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconJTBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u4EA4\u901A\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconMSBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u6C11\u751F\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconNJBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5357\u4EAC\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconNBBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5B81\u6CE2\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconNYBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u519C\u4E1A\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconPABank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5E73\u5B89\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconPFBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u6D66\u53D1\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconQDBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u9752\u5C9B\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconSHBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u4E0A\u6D77\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconXYBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u5174\u4E1A\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconYZBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u90AE\u653F\u50A8\u84C4")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconZSBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u62DB\u5546\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconZGBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u4E2D\u56FD\u94F6\u884C")), /*#__PURE__*/_react.default.createElement(_jingUi.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement(_jingUi.IconZXBank, null), /*#__PURE__*/_react.default.createElement("span", null, "\u4E2D\u4FE1\u94F6\u884C")))))));
};
exports.default = _default;