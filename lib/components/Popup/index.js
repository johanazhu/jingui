"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Popup", {
  enumerable: true,
  get: function get() {
    return _Popup.default;
  }
});
Object.defineProperty(exports, "Portal", {
  enumerable: true,
  get: function get() {
    return _Portal.default;
  }
});
exports.default = void 0;
require("./style/index.scss");
var _Popup = _interopRequireDefault(require("./Popup"));
var _Portal = _interopRequireDefault(require("./Portal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _Popup.default;
exports.default = _default;