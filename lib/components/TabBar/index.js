"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabBar = void 0;
Object.defineProperty(exports, "TabBarItem", {
  enumerable: true,
  get: function get() {
    return _TabBarItem.default;
  }
});
exports.default = void 0;
require("./style/index.scss");
var _TabBar2 = _interopRequireDefault(require("./TabBar"));
var _TabBarItem = _interopRequireDefault(require("./TabBarItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var TabBar = Object.assign(_TabBar2.default, {
  Item: _TabBarItem.default
});
exports.TabBar = TabBar;
var _default = TabBar;
exports.default = _default;