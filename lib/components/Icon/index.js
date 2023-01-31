"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
require("./style/index.scss");
var _Icons = require("./Icons");
Object.keys(_Icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Icons[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Icons[key];
    }
  });
});