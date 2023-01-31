"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Scroll", {
  enumerable: true,
  get: function get() {
    return _BetterScroll.default;
  }
});
exports.default = void 0;
require("./style/index.scss");
var _BetterScroll = _interopRequireDefault(require("./BetterScroll"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _BetterScroll.default;
exports.default = _default;