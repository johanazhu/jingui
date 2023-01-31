"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _color = _interopRequireDefault(require("color"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// 皮肤概念要解决 2022.10.11
var setPrimaryColor = function setPrimaryColor(color) {
  document.documentElement.style.setProperty('$primary-color', color);
  document.documentElement.style.setProperty('$primary-color-light', (0, _color.default)(color).alpha(0.8).string());
  document.documentElement.style.setProperty('$primary-color-dark', (0, _color.default)(color).darken(0.05).string());
  document.documentElement.style.setProperty('$primary-color-lighter', (0, _color.default)(color).lightness(95).string());
  document.documentElement.style.setProperty('--button-primary-shadow-color', (0, _color.default)(color).alpha(0.3).string());
};
var _default = setPrimaryColor;
exports.default = _default;