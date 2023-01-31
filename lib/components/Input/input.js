"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _base = _interopRequireDefault(require("./base"));
var _group = _interopRequireDefault(require("./group"));
var _prefix = _interopRequireDefault(require("./prefix"));
var _suffix = _interopRequireDefault(require("./suffix"));
var _phone = _interopRequireDefault(require("./phone"));
var _password = _interopRequireDefault(require("./password"));
var _search = _interopRequireDefault(require("./search"));
var _verify = _interopRequireDefault(require("./verify"));
var _clear = _interopRequireDefault(require("./clear"));
var _captcha = _interopRequireDefault(require("./captcha"));
var _keyboard = _interopRequireDefault(require("./keyboard"));
var _textarea = _interopRequireDefault(require("./textarea"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Input = function Input(props) {
  return /*#__PURE__*/React.createElement(_base.default, props);
};
Input.Group = _group.default;
Input.Verify = _verify.default;
Input.Prefix = _prefix.default;
Input.Suffix = _suffix.default;
Input.Phone = _phone.default;
Input.Password = _password.default;
Input.Search = _search.default;
Input.Clear = _clear.default;
Input.Captcha = _captcha.default;
Input.KeyBoard = _keyboard.default;
Input.Textarea = _textarea.default;
var _default = Input;
exports.default = _default;