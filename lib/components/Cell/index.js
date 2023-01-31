"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cell = void 0;
Object.defineProperty(exports, "CellGroup", {
  enumerable: true,
  get: function get() {
    return _Group.default;
  }
});
exports.default = void 0;
require("./style/index.scss");
var _Cell2 = _interopRequireDefault(require("./Cell"));
var _Group = _interopRequireDefault(require("./Group"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Cell = Object.assign(_Cell2.default, {
  Group: _Group.default
});
exports.Cell = Cell;
var _default = Cell;
exports.default = _default;