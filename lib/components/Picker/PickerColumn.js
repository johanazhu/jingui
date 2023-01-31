"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _utils = require("../../utils");
var _number = require("../../utils/format/number");
var _hooks = require("../hooks");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var prefixCls = 'jing-picker-column';
var DEFAULT_DURATION = 200;

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动
var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;
function getElementTranslateY(element) {
  var style = window.getComputedStyle(element);
  var transform = style.transform || style.webkitTransform;
  var translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  console.log('translateY', translateY);
  return Number(translateY);
}
function isOptionDisabled(option) {
  return (0, _utils.isObject)(option) && option.disabled;
}
var PickerColumn = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
    children = props.children,
    values = props.values,
    _props$defaultIndex = props.defaultIndex,
    defaultIndex = _props$defaultIndex === void 0 ? 0 : _props$defaultIndex,
    disabled = props.disabled,
    valueKey = props.valueKey,
    _props$itemHeight = props.itemHeight,
    itemHeight = _props$itemHeight === void 0 ? 44 : _props$itemHeight,
    _props$visibleItemCou = props.visibleItemCount,
    visibleItemCount = _props$visibleItemCou === void 0 ? 6 : _props$visibleItemCou,
    _props$swipeDuration = props.swipeDuration,
    swipeDuration = _props$swipeDuration === void 0 ? 1000 : _props$swipeDuration,
    _props$initialOptions = props.initialOptions,
    initialOptions = _props$initialOptions === void 0 ? [] : _props$initialOptions,
    onChange = props.onChange;

  // console.log('props', props)
  // console.log('initialOptions', initialOptions)

  var classes = (0, _classnames2.default)(className, prefixCls);

  // const [offset, setOffset] = useState(0);
  // const [duration, setDuration] = useState(0);
  // const [_options, _setOptions] = useState(deepClone(initialOptions))
  // const [emitChange, setEmitChange] = useState(false)
  // const [currentIndex, setCurrentIndex] = useState(defaultIndex)
  var touch = (0, _hooks.useTouch)();
  var _useSetState = (0, _hooks.useSetState)({
      emitChange: false,
      index: defaultIndex,
      offset: 0,
      duration: 0,
      options: (0, _utils.deepClone)(initialOptions)
    }),
    _useSetState2 = _slicedToArray(_useSetState, 3),
    state = _useSetState2[0],
    updateState = _useSetState2[1],
    stateRef = _useSetState2[2];
  var wrapperRef = (0, _react.useRef)(null);
  var pickerColumnRef = (0, _react.useRef)(null);
  var moving = (0, _react.useRef)(false);
  var startOffset = (0, _react.useRef)(0);
  var touchStartTime = (0, _react.useRef)(0);
  var momentumOffset = (0, _react.useRef)(0);
  var transitionEndTrigger = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setIndex(defaultIndex);
  }, [defaultIndex]);
  (0, _react.useEffect)(function () {
    if (state.emitChange && onChange) {
      onChange(stateRef.current.index);
    }
  }, [state.emitChange, state.index]);
  (0, _hooks.useUpdateEffect)(function () {
    setOptions(initialOptions);
  }, [initialOptions]);
  var setOptions = function setOptions(options) {
    if (JSON.stringify(options) !== JSON.stringify(stateRef.current.options)) {
      updateState({
        options: (0, _utils.deepClone)(options)
      });
      setIndex(defaultIndex);
    }
  };
  var count = (0, _react.useMemo)(function () {
    return state.options.length;
  }, [state.options.length]);
  var baseOffset = (0, _react.useMemo)(function () {
    return itemHeight * (+visibleItemCount - 1) / 2;
  }, [itemHeight, visibleItemCount]);
  var adjustIndex = function adjustIndex(index) {
    index = (0, _number.range)(index, 0, count);
    for (var i = index; i < count; i++) {
      if (!isOptionDisabled(state.options[i])) return i;
    }
    for (var _i2 = index - 1; _i2 >= 0; _i2--) {
      if (!isOptionDisabled(state.options[_i2])) return _i2;
    }
  };
  var setIndex = function setIndex(index, emitChange) {
    index = adjustIndex(index) || 0;
    var offset = -index * itemHeight;
    var trigger = function trigger() {
      if (index !== state.index) {
        updateState({
          index: index,
          emitChange: emitChange
        });
      }
    };
    if (moving.current && offset !== state.offset) {
      transitionEndTrigger.current = trigger;
    } else {
      trigger();
    }
    updateState({
      offset: offset
    });
  };
  var onClickItem = function onClickItem(index) {
    if (moving.current) {
      return;
    }
    transitionEndTrigger.current = null;
    updateState({
      duration: DEFAULT_DURATION
    });
    setIndex(index, true);
  };
  var getOptionText = function getOptionText(option) {
    if ((0, _utils.isObject)(option) && valueKey in option) {
      // @ts-ignore
      return option[valueKey];
    }
    return option;
  };
  var getIndexByOffset = function getIndexByOffset(offset) {
    return (0, _number.range)(Math.round(-offset / itemHeight), 0, count - 1);
  };
  var momentum = function momentum(distance, duration) {
    var speed = Math.abs(distance / duration);
    distance = state.offset + speed / 0.003 * (distance < 0 ? -1 : 1);
    var index = getIndexByOffset(distance);
    updateState({
      duration: +swipeDuration
    });
    setIndex(index, true);
  };
  var stopMomentum = function stopMomentum() {
    moving.current = false;
    updateState({
      duration: 0
    });
    if (transitionEndTrigger.current) {
      transitionEndTrigger === null || transitionEndTrigger === void 0 ? void 0 : transitionEndTrigger.current();
      transitionEndTrigger.current = null;
    }
  };
  var onHandleStart = function onHandleStart(event) {
    touch.start(event);
    var offset = state.offset;
    if (moving.current) {
      if (wrapperRef.current) {
        var translateY = getElementTranslateY(wrapperRef.current);
        offset = Math.min(0, translateY - baseOffset);
        startOffset.current = offset;
      }
    } else {
      startOffset.current = state.offset;
    }
    updateState({
      duration: 0,
      offset: offset
    });
    touchStartTime.current = Date.now();
    momentumOffset.current = startOffset.current;
    transitionEndTrigger.current = null;
  };
  var onHandleMove = function onHandleMove(event) {
    touch.move(event);
    if (touch.isVertical()) {
      moving.current = true;
    }
    var offset = (0, _number.range)(startOffset.current + touch.deltaY.current, -(count * itemHeight), itemHeight);
    updateState({
      offset: offset
    });
    var now = Date.now();
    if (now - touchStartTime.current > MOMENTUM_LIMIT_TIME) {
      touchStartTime.current = now;
      momentumOffset.current = offset;
    }
  };
  var onHandleEnd = function onHandleEnd(event) {
    // console.log('onHandleEnd offset', offset)
    var distance = state.offset - momentumOffset.current;
    var duration = Date.now() - touchStartTime.current;
    var allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

    // console.log('onHandleEnd allowMomentum', allowMomentum)

    if (allowMomentum) {
      momentum(distance, duration);
      return;
    }
    var index = getIndexByOffset(state.offset);
    updateState({
      duration: DEFAULT_DURATION
    });
    setIndex(index, true);

    // 用 setTimeout 跳过 touchstart 后发出的点击事件
    setTimeout(function () {
      moving.current = false;
    }, 0);
  };
  var getValue = function getValue() {
    // console.log('getvalue', stateRef.current.options[stateRef.current.index])
    return stateRef.current.options[stateRef.current.index];
  };
  // useEventListener('touchmove', onHandleMove as EventListener, {
  //     target: pickerColumnRef.current,
  //     depends: [touch.deltaY],
  // });

  var setValue = function setValue(value) {
    var options = stateRef.current.options;
    for (var i = 0; i < options.length; i += 1) {
      if (getOptionText(options[i]) === value) {
        return setIndex(i);
      }
    }
    return null;
  };
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      state: stateRef.current,
      setIndex: setIndex,
      getValue: getValue,
      setValue: setValue,
      setOptions: setOptions,
      stopMomentum: stopMomentum
    };
  });
  var renderOptions = function renderOptions() {
    var optionStyle = {
      height: "".concat(itemHeight, "px")
    };
    return state.options.map(function (option, index) {
      var _classnames;
      var text = getOptionText(option);
      var disabled = isOptionDisabled(option);
      var itemClass = (0, _classnames2.default)(className, "".concat(prefixCls, "__item"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "__item--selected"), index === state.index), _defineProperty(_classnames, "".concat(prefixCls, "__item--disabled"), disabled), _classnames));
      var data = {
        className: itemClass,
        style: optionStyle,
        role: 'button',
        tabIndex: disabled ? -1 : 0,
        onClick: function onClick() {
          return onClickItem(index);
        },
        key: index
      };
      return /*#__PURE__*/_react.default.createElement("li", data, /*#__PURE__*/_react.default.createElement("div", {
        className: "jing-ellipsis"
      }, text));
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes,
    onTouchStart: onHandleStart,
    onTouchMove: onHandleMove,
    onTouchEnd: onHandleEnd,
    onTouchCancel: onHandleEnd,
    ref: pickerColumnRef
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "".concat(prefixCls, "__wrapper"),
    ref: wrapperRef,
    style: {
      transform: "translate3d(0, ".concat(state.offset + baseOffset, "px, 0)"),
      transitionDuration: "".concat(state.duration, "ms"),
      transitionProperty: state.duration ? 'all' : 'none'
    },
    onTransitionEnd: stopMomentum
  }, renderOptions()));
});
PickerColumn.defaultProps = {
  defaultIndex: 0,
  itemHeight: 44,
  visibleItemCount: 6,
  swipeDuration: 1000
};
var _default = /*#__PURE__*/(0, _react.memo)(PickerColumn);
exports.default = _default;