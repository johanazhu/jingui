"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _throttle = _interopRequireDefault(require("lodash/throttle"));
var _react = require("react");
var _useLatest = _interopRequireDefault(require("./use-latest"));
var _useUnmount = _interopRequireDefault(require("./use-unmount"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function useThrottleFn(fn, options) {
  var _options$wait;
  var fnRef = (0, _useLatest.default)(fn);
  var wait = (_options$wait = options === null || options === void 0 ? void 0 : options.wait) !== null && _options$wait !== void 0 ? _options$wait : 1000;
  var throttled = (0, _react.useMemo)(function () {
    return (0, _throttle.default)(function () {
      // @ts-ignore
      return fnRef.current.apply(fnRef, arguments);
    }, wait, options);
  }, []);
  (0, _useUnmount.default)(function () {
    throttled.cancel();
  });
  return {
    run: throttled,
    cancel: throttled.cancel,
    flush: throttled.flush
  };
}
var _default = useThrottleFn;
exports.default = _default;