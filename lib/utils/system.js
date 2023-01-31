"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var system = function system() {
  var p = navigator.platform.toLowerCase();
  var userAgent = navigator.userAgent.toLowerCase();
  var isIosDevice = !!userAgent.match(/\(i[^;]+;( u;)? cpu.+mac os x/);
  var isAndroidDevice = userAgent.indexOf('android') > -1 || userAgent.indexOf('linux') > -1;
  return {
    win: p === 'win32' || p === 'win64' || p === 'windows',
    mac: p === 'mac68k' || p === 'macppc' || p === 'macintosh' || p === 'macintel',
    linux: p === 'linux' || p === 'x11',
    ios: isIosDevice,
    android: isAndroidDevice
  };
};
var _default = system;
exports.default = _default;