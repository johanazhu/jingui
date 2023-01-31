"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUnit = addUnit;
exports.getSizeStyle = getSizeStyle;
exports.isNumeric = isNumeric;
var _util = require("../util");
function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val);
}
function addUnit(value) {
  if (!(0, _util.isDef)(value)) {
    return undefined;
  }
  value = String(value);
  return isNumeric(value) ? "".concat(value, "px") : value;
}
function getSizeStyle(originSize) {
  if ((0, _util.isDef)(originSize)) {
    var size = addUnit(originSize);
    return {
      width: size,
      height: size
    };
  }
  return {};
}