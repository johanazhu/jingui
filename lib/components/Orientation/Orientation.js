"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Portal = _interopRequireDefault(require("../Popup/Portal"));
var _Icon = require("../Icon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Orientation = function Orientation() {
  return /*#__PURE__*/_react.default.createElement(_Portal.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "Orientation"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Orientation__inner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Orientation__inner-icon"
  }, /*#__PURE__*/_react.default.createElement(_Icon.IconFZ, {
    size: "auto"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "Orientation__inner-desc"
  }, "\u4E3A\u4E86\u66F4\u597D\u7684\u4F53\u9A8C"), /*#__PURE__*/_react.default.createElement("div", {
    className: "Orientation__inner-desc"
  }, "\u8BF7\u7AD6\u5411\u4F7F\u7528\u60A8\u7684\u624B\u673A"))));
};
var _default = /*#__PURE__*/(0, _react.memo)(Orientation);
exports.default = _default;