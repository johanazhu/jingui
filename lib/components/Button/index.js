"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
Object.defineProperty(exports, "ButtonGroup", {
  enumerable: true,
  get: function get() {
    return _Group.default;
  }
});
exports.default = void 0;
require("./style/index.scss");
var _Button2 = _interopRequireDefault(require("./Button"));
var _Group = _interopRequireDefault(require("./Group"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Button = Object.assign(_Button2.default, {
  Group: _Group.default
});
exports.Button = Button;
var _default = Button;
exports.default = _default;