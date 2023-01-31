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
export default useLockScroll;