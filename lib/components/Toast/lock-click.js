"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lockClick = lockClick;
var lockCount = 0;
function lockClick(lock) {
  if (lock) {
    if (!lockCount) {
      document.body.classList.add('jing-toast-unclickable');
    }
    lockCount += 1;
  } else if (lockCount) {
    lockCount -= 1;
    if (!lockCount) {
      document.body.classList.remove('jing-toast-unclickable');
    }
  }
}