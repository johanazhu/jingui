"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _input.default;
  }
});
exports.default = void 0;
require("./style/index.scss");
var _input = _interopRequireDefault(require("./input"));
var _group = _interopRequireDefault(require("./group"));
var _verify = _interopRequireDefault(require("./verify"));
var _prefix = _interopRequireDefault(require("./prefix"));
var _suffix = _interopRequireDefault(require("./suffix"));
var _phone = _interopRequireDefault(require("./phone"));
var _password = _interopRequireDefault(require("./password"));
var _search = _interopRequireDefault(require("./search"));
var _clear = _interopRequireDefault(require("./clear"));
var _captcha = _interopRequireDefault(require("./captcha"));
var _keyboard = _interopRequireDefault(require("./keyboard"));
var _textarea = _interopRequireDefault(require("./textarea"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_input.default.Group = _group.default;
_input.default.Verify = _verify.default;
_input.default.Clear = _clear.default;
_input.default.Password = _password.default;
_input.default.Captcha = _captcha.default;
_input.default.KeyBoard = _keyboard.default;
_input.default.Textarea = _textarea.default;
_input.default.Prefix = _prefix.default;
_input.default.Suffix = _suffix.default;
_input.default.Phone = _phone.default;
_input.default.Search = _search.default;
var _default = _input.default;
exports.default = _default;