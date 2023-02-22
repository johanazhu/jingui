function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect, useRef, useLayoutEffect, useMemo, forwardRef, useImperativeHandle } from 'react';
import BScroll from '@better-scroll/core';
import IconPullupImg from "../../assets/icon-pullup.png";
import IconLoadingImg from "../../assets/icon-loading.png";
import { debounce } from "../../utils";
var TIME_BOUNCE = 800;
var TIME_STOP = 600;
var prefixCls = 'jing-scroll';
var BetterScroll = /*#__PURE__*/forwardRef(function (props, ref) {
  var pullUpLoading = props.pullUpLoading,
    pullUpCb = props.pullUpCb,
    pullingUpStatus = props.pullingUpStatus,
    onScroll = props.onScroll,
    bottom = props.bottom,
    top = props.top,
    children = props.children,
    bounceTop = props.bounceTop,
    bounceBottom = props.bounceBottom;
  var scrollContainerRef = useRef(null);
  var pullupRef = useRef(null);
  var isPullingUpToggle = useRef(null);
  // const offsetHeight = scrollContainerRef.current?.offsetHeight;
  // console.log('offsetHeight', offsetHeight);

  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    bScroll = _useState2[0],
    setbScroll = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isShowPullingUp = _useState4[0],
    setIsShowPullingUp = _useState4[1]; // 是否显示上拉
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    thePullingUpStatus = _useState6[0],
    setThePullingUpStatus = _useState6[1]; // 下拉数据是否展示完毕
  var _useState7 = useState('上拉加载更多'),
    _useState8 = _slicedToArray(_useState7, 2),
    pullupText = _useState8[0],
    setPullupText = _useState8[1];
  // const scrollContainerRef = useRef<HTMLDivElement>(null);

  var pullUpCbDebounce = useMemo(function () {
    if (!pullUpCb) return;
    return debounce(pullUpCb, 500);
  }, [pullUpCb]);
  useEffect(function () {
    if (scrollContainerRef.current) {
      var bs = new BScroll(scrollContainerRef.current, {
        scrollY: true,
        // 得知滚动的位置
        probeType: 3,
        // 设置回弹动画的动画时长
        bounceTime: TIME_BOUNCE,
        click: true,
        // https://github.com/ustbhuangyi/better-scroll/issues/580
        // 是否开启：防止iphone微信滑动卡顿
        // useTransition: false,
        bounce: {
          top: bounceTop,
          bottom: bounceBottom
        }
      });
      setbScroll(bs);
    }
    return function () {
      setbScroll(null);
    };
  }, []);
  useEffect(function () {
    setThePullingUpStatus(pullingUpStatus);
  }, [pullingUpStatus]);
  useLayoutEffect(function () {
    if (!bScroll) return;
    var scrollHandler = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(pos) {
        var scrollUp, pullup;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (scrollContainerRef.current) {
                scrollUp = scrollContainerRef.current.children[0].children[1];
                pullup = pullupRef.current; // console.log('scrollContainerRef.current', scrollContainerRef.current);
                // console.log('scrollUp', scrollUp);
                if (scrollUp && pullup) {
                  // console.log('差值', Math.abs(pos.y) - Math.abs(bScroll.maxScrollY));
                  if (Math.abs(pos.y) - Math.abs(bScroll.maxScrollY) > 20) {
                    setPullupText('松开刷新');
                    // @ts-ignore
                    pullup.children[0].children[0].style.cssText = "\n                            -webkit-transform: rotate(-180deg);\n                            -moz-transform: rotate(-180deg);\n                            -ms-transform: rotate(-180deg);\n                            -o-transform: rotate(-180deg);\n                            transform: rotate(-180deg);\n                        ";
                  } else {
                    if (isPullingUpToggle.current && isPullingUpToggle.current === true) {
                      // @ts-ignore
                      pullup.children[0].children[0].style.cssText = '';
                      setIsShowPullingUp(true);
                    } else {
                      // console.log('上拉加载更多');
                      setIsShowPullingUp(false);
                      setPullupText('上拉加载更多');
                      // @ts-ignore
                      pullup.children[0].children[0].style.cssText = "\n                                -webkit-transform: rotate(0);\n                                -moz-transform: rotate(0);\n                                -ms-transform: rotate(0);\n                                -o-transform: rotate(0);\n                                transform: rotate(0);\n                             ";
                    }
                  }
                }
              }
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function scrollHandler(_x2) {
        return _ref.apply(this, arguments);
      };
    }();
    bScroll.on('scroll', scrollHandler);
    return function () {
      bScroll.off('scroll', scrollHandler);
    };
  }, [bScroll]);
  useEffect(function () {
    if (!bScroll || !pullUpCb) return;
    var handlePullUp = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(Math.abs(bScroll.y) >= Math.abs(bScroll.maxScrollY) + 20)) {
                _context2.next = 9;
                break;
              }
              // console.log('touchEnd');
              isPullingUpToggle.current = true;
              if (pullingUpStatus) {
                _context2.next = 9;
                break;
              }
              _context2.t0 = pullUpCbDebounce;
              if (!_context2.t0) {
                _context2.next = 7;
                break;
              }
              _context2.next = 7;
              return pullUpCbDebounce();
            case 7:
              _context2.next = 9;
              return finishPullUp();
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function handlePullUp() {
        return _ref2.apply(this, arguments);
      };
    }();
    bScroll.on('touchEnd', handlePullUp);
    return function () {
      bScroll.off('touchEnd', handlePullUp);
    };
  }, [bScroll, pullUpCb, pullUpCbDebounce, pullingUpStatus]);
  function finishPullUp() {
    return _finishPullUp.apply(this, arguments);
  }
  function _finishPullUp() {
    _finishPullUp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return new Promise(function (resolve) {
              setTimeout(function () {
                setIsShowPullingUp(false);
                // @ts-ignore
                resolve();
              }, TIME_STOP);
            });
          case 2:
            setTimeout(function () {
              isPullingUpToggle.current = false;
              bScroll.refresh();
            }, TIME_BOUNCE);
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _finishPullUp.apply(this, arguments);
  }
  useImperativeHandle(ref, function () {
    return {
      refresh: function refresh() {
        if (bScroll) {
          bScroll.refresh();
          bScroll.scrollTo(0, 0);
        }
      },
      getBScroll: function getBScroll() {
        if (bScroll) {
          return bScroll;
        }
      }
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    className: prefixCls,
    style: {
      bottom: "".concat(bottom, "px"),
      top: "".concat(top, "px")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__pulldown"),
    ref: scrollContainerRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__pulldown--scroller")
  }, children, pullUpLoading && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__pullup"),
    ref: pullupRef
  }, thePullingUpStatus ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__pullup--after")
  }, /*#__PURE__*/React.createElement("span", null, " \u6CA1\u6709\u66F4\u591A\u4E86 ")) : isShowPullingUp ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__pullup--loading")
  }, /*#__PURE__*/React.createElement("img", {
    src: IconLoadingImg
  }), /*#__PURE__*/React.createElement("span", null, " \u52A0\u8F7D\u4E2D... ")) : /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__pullup--before")
  }, /*#__PURE__*/React.createElement("img", {
    src: IconPullupImg
  }), /*#__PURE__*/React.createElement("span", null, pullupText))))));
});
BetterScroll.defaultProps = {
  pullUpLoading: false,
  bounceTop: true,
  bounceBottom: true
};
export default BetterScroll;