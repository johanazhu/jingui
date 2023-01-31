"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stepline = void 0;
Object.defineProperty(exports, "SteplineItem", {
  enumerable: true,
  get: function get() {
    return _Item.default;
  }
});
exports.default = void 0;
require("./style/index.scss");
var _Stepline2 = _interopRequireDefault(require("./Stepline"));
var _Item = _interopRequireDefault(require("./Item"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Stepline = Object.assign(_Stepline2.default, {
  Item: _Item.default
});
exports.Stepline = Stepline;
var _default = Stepline;
exports.default = _default;