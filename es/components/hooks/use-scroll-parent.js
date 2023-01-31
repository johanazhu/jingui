function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useState, useEffect } from 'react';
import { inBrowser } from "../../utils";
import { getTargetElement } from "../../utils/dom/getTargetElement";
var overflowScrollReg = /scroll|auto/i;
var defaultRoot = inBrowser ? window : undefined;
function isElement(node) {
  var ELEMENT_NODE_TYPE = 1;
  return node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === ELEMENT_NODE_TYPE;
}
export function getScrollParent(el) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRoot;
  if (root === undefined) {
    root = window;
  }
  var node = el;
  while (node && node !== root && isElement(node)) {
    var _window$getComputedSt = window.getComputedStyle(node),
      overflowY = _window$getComputedSt.overflowY;
    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      }
      var htmlOverflowY = window.getComputedStyle(node.parentNode).overflowY;
      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }
    node = node.parentNode;
  }
  return root;
}
function useScrollParent(el) {
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    scrollParent = _useState2[0],
    setScrollParent = _useState2[1];
  useEffect(function () {
    if (el) {
      var element = getTargetElement(el);
      setScrollParent(getScrollParent(element));
    }
  }, []);
  // @ts-ignore
  return scrollParent;
}
export default useScrollParent;