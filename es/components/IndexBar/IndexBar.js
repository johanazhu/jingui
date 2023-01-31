function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useRef, useState, useEffect, useMemo } from 'react';
import classnames from 'classnames';
import IndexBarContext from "./IndexBarContext";
import { isDef, preventDefault } from "../../utils";
import IndexAnchor from "./IndexAnchor";
import { getRect } from "../hooks/useRect";
import { useTouch, useRefs, useEventListener } from "../hooks";
import useScrollParent from "../hooks/use-scroll-parent";
import { getScrollTop, getRootScrollTop, setRootScrollTop } from "../../utils/dom/scroll";
import { COMPONENT_TYPE_KEY } from "./PropType";
import { INDEX_ANCHORE_KEY } from "./IndexAnchor";
var prefixCls = 'jing-index-bar';
var IndexBar = function IndexBar(props) {
  var className = props.className,
    style = props.style,
    _props$zIndex = props.zIndex,
    zIndex = _props$zIndex === void 0 ? 1 : _props$zIndex,
    _props$indexList = props.indexList,
    indexList = _props$indexList === void 0 ? genAlphabet() : _props$indexList,
    sticky = props.sticky,
    _props$stickyOffsetTo = props.stickyOffsetTop,
    stickyOffsetTop = _props$stickyOffsetTo === void 0 ? 0 : _props$stickyOffsetTo,
    highlightColor = props.highlightColor,
    children = props.children,
    onChange = props.onChange,
    onSelect = props.onSelect;
  var classes = classnames(prefixCls, className, {});
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    activeAnchor = _useState2[0],
    setActiveAnchor = _useState2[1];
  var root = useRef(null);
  var sidebar = useRef(null);
  var touchActiveIndex = useRef(null);
  var touch = useTouch();
  var scrollParent = useScrollParent(root);
  var _useRefs = useRefs(),
    _useRefs2 = _slicedToArray(_useRefs, 2),
    refs = _useRefs2[0],
    setRefs = _useRefs2[1];
  var sidebarStyle = useMemo(function () {
    if (isDef(zIndex)) {
      return {
        zIndex: +zIndex + 1
      };
    }
    return {};
  }, [zIndex]);
  var highlightStyle = useMemo(function () {
    if (highlightColor) {
      return {
        color: highlightColor
      };
    }
    return {};
  }, [highlightColor]);
  useEffect(function () {
    setTimeout(onScroll, 0);
  }, []);
  useEffect(function () {
    if (onChange && typeof onChange === 'function') {
      onChange(activeAnchor);
    }
  }, [activeAnchor]);
  var getScrollerRect = function getScrollerRect() {
    // @ts-ignore
    if (scrollParent.getBoundingClientRect) {
      return getRect(scrollParent);
    }
    return {
      top: 0,
      left: 0
    };
  };
  var getActiveAnchor = function getActiveAnchor(scrollTop, rects) {
    for (var i = rects.length - 1; i >= 0; i -= 1) {
      var prevHeight = i > 0 ? rects[i - 1].height : 0;
      var reachTop = props.sticky ? prevHeight + stickyOffsetTop : 0;
      if (scrollTop + reachTop >= rects[i].top) {
        return i;
      }
    }
    return -1;
  };
  var onScroll = function onScroll() {
    if (!root.current || !scrollParent) {
      return;
    }
    var scrollTop = getScrollTop(scrollParent);
    var scrollParentRect = getScrollerRect();
    var rects = Object.values(refs).map(function (anchor) {
      return anchor.getRect(scrollParent, scrollParentRect);
    });
    var active = getActiveAnchor(scrollTop, rects);
    setActiveAnchor(indexList[active]);
    if (sticky) {
      Object.values(refs).forEach(function (item, index) {
        var updateState = item.updateState;
        if (index === active || index === active - 1) {
          var rect = item.root.current.getBoundingClientRect();
          updateState({
            left: rect.left,
            width: rect.width
          });
        } else {
          updateState({
            left: null,
            width: null
          });
        }
        if (index === active) {
          updateState({
            active: true,
            top: Math.max(stickyOffsetTop, rects[index].top - scrollTop) + scrollParentRect.top
          });
        } else if (index === active - 1) {
          var activeItemTop = rects[active].top - scrollTop;
          updateState({
            active: activeItemTop > 0,
            top: activeItemTop + scrollParentRect.top - rects[index].height
          });
        } else {
          updateState({
            active: false
          });
        }
      });
    }
  };
  var onTouchStart = function onTouchStart(event) {
    touch.start(event);
  };
  var scrollTo = function scrollTo(index) {
    if (!index) {
      return;
    }
    if (refs[index]) {
      refs[index].root.current.scrollIntoView();
      if (sticky && stickyOffsetTop) {
        setRootScrollTop(getRootScrollTop() - stickyOffsetTop);
      }
      if (onSelect && typeof onSelect === 'function') {
        onSelect(activeAnchor);
      }
    }
  };
  var scrollToElement = function scrollToElement(element) {
    var index = element.dataset.index;
    scrollTo(index);
  };
  var onClickSidebar = function onClickSidebar(event) {
    scrollToElement(event.target);
  };
  var onTouchMove = function onTouchMove(event) {
    touch.move(event);
    preventDefault(event);
    if (touch.isVertical()) {
      var _event$touches$ = event.touches[0],
        clientX = _event$touches$.clientX,
        clientY = _event$touches$.clientY;
      var target = document.elementFromPoint(clientX, clientY);
      if (target) {
        var index = target.dataset.index;
        if (touchActiveIndex.current !== index) {
          // @ts-ignore
          touchActiveIndex.current = index;
          scrollToElement(target);
        }
      }
    }
  };
  useEventListener('scroll', onScroll, {
    target: scrollParent,
    depends: [scrollParent]
  });
  useEventListener('touchmove', onTouchMove, {
    target: sidebar.current,
    depends: [touch.deltaY]
  });
  var renderIndexes = function renderIndexes() {
    return indexList.map(function (index) {
      var active = index === activeAnchor;
      return /*#__PURE__*/React.createElement("span", {
        key: index,
        className: classnames("".concat(prefixCls, "__index"), _defineProperty({}, "".concat(prefixCls, "__index--active"), active)),
        style: active ? highlightStyle : {},
        "data-index": index
      }, index);
    });
  };
  var renderSidebar = function renderSidebar() {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__sidebar"),
      style: sidebarStyle,
      onClick: onClickSidebar,
      onTouchStart: onTouchStart
    }, renderIndexes());
  };
  var handleMapChildren = function handleMapChildren($children) {
    return React.Children.toArray($children).filter(Boolean).map(function (child) {
      var _child$type, _child$props;
      if (((_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type[COMPONENT_TYPE_KEY]) === INDEX_ANCHORE_KEY) {
        return /*#__PURE__*/React.cloneElement(child, {
          ref: setRefs(child.props.index)
        });
      }
      if ((_child$props = child.props) !== null && _child$props !== void 0 && _child$props.children) {
        var deepMap = handleMapChildren(child.props.children);
        return deepMap.length ? deepMap : child;
      }
      return child;
    });
  };
  var memoChildren = useMemo(function () {
    return handleMapChildren(children);
  }, [children]);
  return /*#__PURE__*/React.createElement(IndexBarContext.Provider, {
    value: {
      zIndex: zIndex,
      highlightColor: highlightColor,
      sticky: sticky
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: root,
    className: classes,
    style: style
  }, renderSidebar(), memoChildren));
};
function genAlphabet() {
  var indexList = [];
  var charCodeOfA = 'A'.charCodeAt(0);
  for (var i = 0; i < 26; i += 1) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }
  return indexList;
}
IndexBar.defaultProps = {
  zIndex: 1,
  sticky: true,
  highlightColor: '3264c8',
  stickyOffsetTop: 0,
  indexList: genAlphabet()
};
IndexBar.Anchor = IndexAnchor;
export default IndexBar;