function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect, useRef, memo, useMemo, forwardRef, useImperativeHandle } from 'react';
import classnames from 'classnames';
import { useRefs, useEventListener } from "../hooks";
import { preventDefault } from "../../utils";
import Loading from "../Loading";
import Column from "./PickerColumn";
var prefixCls = 'jing-picker';
var Picker = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className,
    columns = props.columns,
    _props$defaultIndex = props.defaultIndex,
    defaultIndex = _props$defaultIndex === void 0 ? 0 : _props$defaultIndex,
    title = props.title,
    confirmButtonText = props.confirmButtonText,
    cancelButtonText = props.cancelButtonText,
    loading = props.loading,
    showToolbar = props.showToolbar,
    _props$itemHeight = props.itemHeight,
    itemHeight = _props$itemHeight === void 0 ? 44 : _props$itemHeight,
    _props$visibleItemCou = props.visibleItemCount,
    visibleItemCount = _props$visibleItemCou === void 0 ? 6 : _props$visibleItemCou,
    _props$swipeDuration = props.swipeDuration,
    swipeDuration = _props$swipeDuration === void 0 ? 1000 : _props$swipeDuration,
    onConfirm = props.onConfirm,
    onCancel = props.onCancel,
    onChange = props.onChange;
  var classes = classnames(className, prefixCls);
  var titleClass = classnames("".concat(prefixCls, "__title"), 'jing-ellipsis');
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    formattedColumns = _useState2[0],
    setFormattedColumns = _useState2[1];
  var _useRefs = useRefs(),
    _useRefs2 = _slicedToArray(_useRefs, 3),
    refs = _useRefs2[0],
    setRefs = _useRefs2[1],
    resetRefs = _useRefs2[2];
  var columnsRef = useRef(null);
  // const columnRef = useRef<any>([]);
  // const formattedColumns = useRef<PickerObjectColumn[]>([])

  useEffect(function () {
    if (JSON.stringify(columns) !== JSON.stringify(formattedColumns)) {
      resetRefs === null || resetRefs === void 0 ? void 0 : resetRefs();
      format();
    }
  }, [columns]);
  var dataType = useMemo(function () {
    var firstColumn = columns[0] || {};
    if (_typeof(firstColumn) === 'object') {
      // @ts-ignore
      if (firstColumn.children) {
        return 'cascade';
      }
      if (firstColumn.values) {
        return 'object';
      }
    }
    return 'plain';
  }, [columns]);
  var format = function format() {
    if (dataType === 'plain') {
      setFormattedColumns([{
        text: 'text',
        values: columns
        // children: 'children',
      }]);
    } else if (dataType === 'cascade') {
      formatCascade();
    } else {
      setFormattedColumns(columns);
    }
  };
  var formatCascade = function formatCascade() {
    var formatted = [];
    var cursor = {
      children: columns
    };
    while (cursor && cursor.children) {
      var _cursor$defaultIndex;
      var children = cursor.children;
      var defaultIndexCursor = (_cursor$defaultIndex = cursor.defaultIndex) !== null && _cursor$defaultIndex !== void 0 ? _cursor$defaultIndex : +defaultIndex;
      while (children[defaultIndexCursor] && children[defaultIndexCursor].disabled) {
        if (defaultIndexCursor < children.length - 1) {
          defaultIndexCursor++;
        } else {
          defaultIndexCursor = 0;
          break;
        }
      }
      formatted.push({
        // @ts-ignore
        values: cursor.children,
        className: cursor.className,
        defaultIndex: defaultIndex
      });
      cursor = children[defaultIndexCursor];
    }
    setFormattedColumns(formatted);
  };
  var handleAction = function handleAction(event) {
    if (dataType === 'plain') {
      event(getColumnValue(0), getColumnIndex(0));
    } else {
      event(getValues(), getIndexes());
    }
  };

  // const getChild = (index: number) => columnRef.current[index];
  var getChild = function getChild(index) {
    return refs[index];
  };
  var getColumnValue = function getColumnValue(index) {
    var column = getChild(index);
    return column === null || column === void 0 ? void 0 : column.getValue();
  };
  var getColumnIndex = function getColumnIndex(index) {
    var column = getChild(index);
    return column === null || column === void 0 ? void 0 : column.state.index;
  };
  var setColumnIndex = function setColumnIndex(columnIndex, optionIndex) {
    var column = getChild(columnIndex);
    if (column) {
      column.setIndex(optionIndex);
      if (dataType === 'cascade') {
        onCascadeChange(columnIndex);
      }
    }
  };
  var getValues = function getValues() {
    return refs.map(function (_ref) {
      return _ref.getValue();
    });
  };
  var setValues = function setValues(values) {
    values.forEach(function (value, index) {
      setColumnValues(index, value);
    });
  };
  var getIndexes = function getIndexes() {
    return refs.map(function (_ref) {
      return _ref.state.index;
    });
  };
  var setIndexes = function setIndexes(indexes) {
    indexes.forEach(function (optionIndex, columnIndex) {
      setColumnIndex(columnIndex, optionIndex);
    });
  };
  var onHandleCancel = function onHandleCancel() {
    console.log('取消');
    onCancel && handleAction(onCancel);
  };
  var onHandleConfirm = function onHandleConfirm() {
    console.log('确认');
    refs.forEach(function (_ref) {
      return _ref.stopMomentum();
    });
    onConfirm && handleAction(onConfirm);
  };
  var onHandleChange = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(columnIndex) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(dataType === 'cascade')) {
              _context.next = 3;
              break;
            }
            _context.next = 3;
            return onCascadeChange(columnIndex);
          case 3:
            if (dataType === 'plain') {
              onChange === null || onChange === void 0 ? void 0 : onChange(getColumnValue(0), getColumnIndex(0));
            } else {
              onChange === null || onChange === void 0 ? void 0 : onChange(getValues(), columnIndex);
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onHandleChange(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var onCascadeChange = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(columnIndex) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve) {
              var cursor = {
                children: columns
              };
              var indexes = getIndexes();
              for (var i = 0; i <= columnIndex; i += 1) {
                // @ts-ignore
                cursor = cursor.children[indexes[i]];
              }
              while (cursor && cursor.children) {
                var _cursor$children;
                columnIndex += 1;
                setColumnValues(columnIndex, cursor.children);
                cursor = (_cursor$children = cursor.children) === null || _cursor$children === void 0 ? void 0 : _cursor$children[cursor.defaultIndex || 0];
              }
              resolve(true);
            }));
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function onCascadeChange(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var setColumnValues = function setColumnValues(index, options) {
    // const column = columnRef.current[index]
    var column = refs[index];
    if (column) {
      column.setOptions(options);
    }
  };
  var setColumnValue = function setColumnValue(index, value) {
    var column = getChild(index);
    if (column) {
      column.setValue(value);
      if (dataType === 'cascade') {
        onCascadeChange(index);
      }
    }
  };
  var getColumnValues = function getColumnValues(index) {
    var column = getChild(index);
    return column === null || column === void 0 ? void 0 : column.getValue();
  };
  useEventListener('touchmove', preventDefault, {
    target: columnsRef.current
  });
  useImperativeHandle(ref, function () {
    return {
      confirm: confirm,
      getValues: getValues,
      setValues: setValues,
      getIndexes: getIndexes,
      setIndexes: setIndexes,
      getColumnIndex: getColumnIndex,
      setColumnIndex: setColumnIndex,
      getColumnValue: getColumnValue,
      setColumnValue: setColumnValue,
      getColumnValues: getColumnValues,
      setColumnValues: setColumnValues
    };
  });
  var renderToolbar = function renderToolbar() {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__toolbar")
    }, /*#__PURE__*/React.createElement("button", {
      className: "".concat(prefixCls, "__cancel"),
      onClick: onHandleCancel
    }, cancelButtonText), /*#__PURE__*/React.createElement("div", {
      className: titleClass
    }, title), /*#__PURE__*/React.createElement("button", {
      className: "".concat(prefixCls, "__confirm"),
      onClick: onHandleConfirm
    }, confirmButtonText));
  };
  var renderColumnItems = function renderColumnItems() {
    // console.log('formattedColumns.current', formattedColumns)

    return /*#__PURE__*/React.createElement(React.Fragment, null, formattedColumns.map(function (item, columnIndex) {
      var _item$defaultIndex;
      // console.log('item', item)
      // console.log('columnIndex', columnIndex)
      return /*#__PURE__*/React.createElement(Column, {
        key: columnIndex
        // ref={(el) => (columnRef.current[columnIndex] = el)}
        ,
        ref: setRefs(columnIndex),
        valueKey: item.text || 'text',
        className: item.className,
        itemHeight: itemHeight,
        defaultIndex: (_item$defaultIndex = item.defaultIndex) !== null && _item$defaultIndex !== void 0 ? _item$defaultIndex : +defaultIndex,
        swipeDuration: swipeDuration,
        visibleItemCount: visibleItemCount,
        initialOptions: item.values,
        onChange: function onChange() {
          onHandleChange(columnIndex);
        }
      });
    }));
  };
  var renderColumns = function renderColumns() {
    var wrapHeight = itemHeight * +visibleItemCount;
    var columnsStyle = {
      height: "".concat(wrapHeight, "px")
    };
    var frameStyle = {
      height: "".concat(itemHeight, "px")
    };
    var maskStyle = {
      backgroundSize: "100% ".concat((wrapHeight - itemHeight) / 2, "px")
    };
    var frameClass = classnames("".concat(prefixCls, "__frame"), "jing-hairline-unset--top-bottom");
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__columns"),
      ref: columnsRef,
      style: columnsStyle
    }, renderColumnItems(), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__mask"),
      style: maskStyle
    }), /*#__PURE__*/React.createElement("div", {
      className: frameClass,
      style: frameStyle
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, showToolbar && renderToolbar(), loading && /*#__PURE__*/React.createElement(Loading, {
    className: "".concat(prefixCls, "__loading")
  }), renderColumns());
});
Picker.defaultProps = {
  columns: [],
  defaultIndex: 0,
  title: '标题',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  loading: false,
  showToolbar: true,
  itemHeight: 44,
  visibleItemCount: 6,
  swipeDuration: 1000
};
export default /*#__PURE__*/memo(Picker);