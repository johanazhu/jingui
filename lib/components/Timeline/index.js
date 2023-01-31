"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = void 0;
Object.defineProperty(exports, "TimelineItem", {
  enumerable: true,
  get: function get() {
    return _TimelineItem.default;
  }
});
exports.default = void 0;
require("./style/index.scss");
var _Timeline2 = _interopRequireDefault(require("./Timeline"));
var _TimelineItem = _interopRequireDefault(require("./TimelineItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Timeline = Object.assign(_Timeline2.default, {
  Item: _TimelineItem.default
});
exports.Timeline = Timeline;
var _default = Timeline;
exports.default = _default;