"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
Object.defineProperty(exports, "useDebounce", {
  enumerable: true,
  get: function get() {
    return _useDebounce.default;
  }
});
Object.defineProperty(exports, "useDebounceFn", {
  enumerable: true,
  get: function get() {
    return _useDebounceFn.default;
  }
});
Object.defineProperty(exports, "useEventListener", {
  enumerable: true,
  get: function get() {
    return _useEventListener.default;
  }
});
Object.defineProperty(exports, "useHeight", {
  enumerable: true,
  get: function get() {
    return _useHeight.default;
  }
});
Object.defineProperty(exports, "useRefState", {
  enumerable: true,
  get: function get() {
    return _useRefState.default;
  }
});
Object.defineProperty(exports, "useRefs", {
  enumerable: true,
  get: function get() {
    return _useRefs.default;
  }
});
Object.defineProperty(exports, "useSetState", {
  enumerable: true,
  get: function get() {
    return _useSetState.default;
  }
});
Object.defineProperty(exports, "useThrottle", {
  enumerable: true,
  get: function get() {
    return _useThrottle.default;
  }
});
Object.defineProperty(exports, "useThrottleFn", {
  enumerable: true,
  get: function get() {
    return _useThrottleFn.default;
  }
});
Object.defineProperty(exports, "useTouch", {
  enumerable: true,
  get: function get() {
    return _useTouch.default;
  }
});
Object.defineProperty(exports, "useUpdateEffect", {
  enumerable: true,
  get: function get() {
    return _useUpdateEffect.default;
  }
});
var _useDebounce = _interopRequireDefault(require("./useDebounce"));
var _useDebounceFn = _interopRequireDefault(require("./useDebounceFn"));
var _useThrottle = _interopRequireDefault(require("./useThrottle"));
var _useThrottleFn = _interopRequireDefault(require("./useThrottleFn"));
var _useTouch = _interopRequireDefault(require("./useTouch"));
var _useRefState = _interopRequireDefault(require("./useRefState"));
var _useSetState = _interopRequireDefault(require("./useSetState"));
var _useRefs = _interopRequireDefault(require("./useRefs"));
var _useHeight = _interopRequireDefault(require("./useHeight"));
var _useUpdateEffect = _interopRequireDefault(require("./useUpdateEffect"));
var _useEventListener = _interopRequireDefault(require("./useEventListener"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import useRect from './useRect';
var _default = {
  // useRect,
  useDebounce: _useDebounce.default,
  useDebounceFn: _useDebounceFn.default,
  useThrottle: _useThrottle.default,
  useThrottleFn: _useThrottleFn.default,
  useTouch: _useTouch.default,
  useRefState: _useRefState.default,
  useSetState: _useSetState.default,
  useRefs: _useRefs.default,
  useHeight: _useHeight.default,
  useUpdateEffect: _useUpdateEffect.default,
  useEventListener: _useEventListener.default
};
exports.default = _default;