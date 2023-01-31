function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { useEffect } from 'react';
import { inBrowser } from "../../utils";
import { getTargetElement } from "../../utils/dom/getTargetElement";

// https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#使用_passive_改善的滚屏性能
var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    // @ts-ignore
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}
function useEventListener(type, listener) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (!inBrowser) {
    return;
  }
  var _options$target = options.target,
    target = _options$target === void 0 ? window : _options$target,
    _options$passive = options.passive,
    passive = _options$passive === void 0 ? false : _options$passive,
    _options$capture = options.capture,
    capture = _options$capture === void 0 ? false : _options$capture,
    _options$depends = options.depends,
    depends = _options$depends === void 0 ? [] : _options$depends;
  var attached;
  var add = function add() {
    var element = getTargetElement(target);
    if (element && !attached) {
      element.addEventListener(type, listener, supportsPassive ? {
        capture: capture,
        passive: passive
      } : capture);
      attached = true;
    }
  };
  var remove = function remove() {
    var element = getTargetElement(target);
    if (element && attached) {
      element.removeEventListener(type, listener, capture);
      attached = false;
    }
  };

  // https://stackoverflow.com/questions/55265255/react-usestate-hook-event-handler-using-initial-state
  useEffect(function () {
    add();
    return function () {
      return remove();
    };
  }, [target].concat(_toConsumableArray(depends)));
}
export default useEventListener;