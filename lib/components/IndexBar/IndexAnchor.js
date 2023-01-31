"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.INDEX_ANCHORE_KEY = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _PropType = require("./PropType");
var _IndexBarContext = _interopRequireDefault(require("./IndexBarContext"));
var _useRect = require("../hooks/useRect");
var _hooks = require("../hooks");
var _scroll = require("../../utils/dom/scroll");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var INDEX_ANCHORE_KEY = Symbol('index-anchor');
exports.INDEX_ANCHORE_KEY = INDEX_ANCHORE_KEY;
var prefixCls = 'jing-index-anchor';
var IndexAnchor = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _classnames;
  var className = props.className,
    style = props.style,
    index = props.index,
    children = props.children,
    onClick = props.onClick;
  var root = (0, _react.useRef)();
  var height = (0, _hooks.useHeight)(root);
  var context = (0, _react.useContext)(_IndexBarContext.default);
  var _useSetState = (0, _hooks.useSetState)({
      top: 0,
      left: 0,
      rect: {
        top: 0,
        height: 0
      },
      width: 0,
      active: false
    }),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    state = _useSetState2[0],
    updateState = _useSetState2[1];
  var _useState = (0, _react.useState)({
      top: 0,
      height: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    rect = _useState2[0],
    setRect = _useState2[1];
  var isSticky = (0, _react.useCallback)(function () {
    return state.active && context.sticky;
  }, [state.active, context.sticky]);
  var anchorStyle = (0, _react.useMemo)(function () {
    var zIndex = context.zIndex,
      highlightColor = context.highlightColor;
    if (isSticky()) {
      return {
        zIndex: "".concat(zIndex),
        left: state.left ? "".concat(state.left, "px") : null,
        width: state.width ? "".concat(state.width, "px") : null,
        transform: state.top ? "translate3d(0, ".concat(state.top, "px, 0)") : null,
        color: highlightColor
      };
    }
    return null;
  }, [isSticky(), state.width, state.left, state.top]);
  var getRect = function getRect(scrollParent, scrollParentRect) {
    // @ts-ignore
    var rootRect = (0, _useRect.getRect)(root === null || root === void 0 ? void 0 : root.current);
    var newState = _objectSpread({}, state);
    newState.rect.height = rootRect.height;
    if (scrollParent === window || scrollParent === document.body) {
      newState.rect.top = rootRect.top + (0, _scroll.getRootScrollTop)();
    } else {
      newState.rect.top = rootRect.top + (0, _scroll.getScrollTop)(scrollParent) - scrollParentRect.top;
    }
    updateState(newState);
    return newState.rect;
  };
  (0, _react.useEffect)(function () {
    setRect({
      top: rect.top,
      height: height
    });
  }, [height]);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      getRect: getRect,
      state: state,
      updateState: updateState,
      root: root
    };
  });
  var sticky = isSticky();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
    // @ts-ignore
    ,
    ref: root,
    style: _objectSpread(_objectSpread({}, style), {}, {
      height: sticky ? "".concat(state.rect.height, "px") : undefined
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames2.default)(prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "--sticky"), sticky), _defineProperty(_classnames, 'jing-hairline--bottom', sticky), _classnames)),
    onClick: onClick
  }, children || index));
});

// @ts-ignore
IndexAnchor[_PropType.COMPONENT_TYPE_KEY] = INDEX_ANCHORE_KEY;
var _default = IndexAnchor;
exports.default = _default;