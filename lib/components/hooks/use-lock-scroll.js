"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var count = 0;
var CLASSNAME = 'jing-overflow-hidden';
function useLockScroll(shouldLock) {
  var lock = function lock() {
    if (shouldLock()) {
      if (!count) {
        document.body.classList.add(CLASSNAME);
      }
      count += 1;
    }
  };
  var unlock = function unlock() {
    if (shouldLock() && count) {
      count -= 1;
      if (!count) {
        document.body.classList.remove(CLASSNAME);
      }
    }
  };
  return [lock, unlock];
}
var _default = useLockScroll;
exports.default = _default;