"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _react = require("react");
var _useLatest = _interopRequireDefault(require("./use-latest"));
var _useUnmount = _interopRequireDefault(require("./use-unmount"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function useDebounceFn(fn, options) {
  var _options$wait;
  var fnRef = (0, _useLatest.default)(fn);
  var wait = (_options$wait = options === null || options === void 0 ? void 0 : options.wait) !== null && _options$wait !== void 0 ? _options$wait : 1000;
  var debounced = (0, _react.useMemo)(function () {
    return (0, _debounce.default)(function () {
      // @ts-ignore
      return fnRef.current.apply(fnRef, arguments);
    }, wait, options);
  }, []);
  (0, _useUnmount.default)(function () {
    debounced.cancel();
  });
  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush
  };
}
var _default = useDebounceFn;
exports.default = _default;