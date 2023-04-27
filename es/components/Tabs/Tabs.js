function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import Sticky from "../Sticky";
import { Swiper, SwiperSlide } from "../Swiper";
import Title from "./TabsTitle";
import TabPanel from "./TabPanel";
import { scrollLeftTo } from "./utils";
var prefixCls = 'jing-tabs';
var Tabs = function Tabs(props) {
  var className = props.className,
    style = props.style,
    stickyStyle = props.stickyStyle,
    value = props.value,
    type = props.type,
    swipeable = props.swipeable,
    sticky = props.sticky,
    ellipsis = props.ellipsis,
    duration = props.duration,
    disabled = props.disabled,
    swipeThreshold = props.swipeThreshold,
    children = props.children,
    isChangeColor = props.isChangeColor,
    onChange = props.onChange,
    onSwiper = props.onSwiper;
  var tabsNavRef = useRef(null);
  var tabsTitleRef = useRef([]);
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    currentIndex = _useState2[0],
    setCurrentIndex = _useState2[1];
  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    lineStyle = _useState4[0],
    setLineStyle = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    tabSwiper = _useState6[0],
    setTabSwiper = _useState6[1];
  var count = React.Children.count(children);
  var scrollable = false;
  if (swipeThreshold) {
    scrollable = count > swipeThreshold || !ellipsis;
  }
  useEffect(function () {
    if (tabsTitleRef && tabsTitleRef.current) {
      var _tabsTitleRef$current = tabsTitleRef.current[currentIndex],
        offsetLeft = _tabsTitleRef$current.offsetLeft,
        offsetWidth = _tabsTitleRef$current.offsetWidth;
      var navDom = tabsNavRef.current;
      var left = offsetLeft + offsetWidth / 2;
      var to = offsetLeft - (navDom.offsetWidth - offsetWidth) / 2;
      duration && scrollLeftTo(navDom, to, duration);
      var _lineStyle = {
        transform: "translateX(".concat(left, "px) translateX(-50%)"),
        transitionDuration: "".concat(duration, "s")
      };
      setLineStyle(_lineStyle);
    }
  }, [currentIndex]);
  useEffect(function () {
    isChangeColor && window.addEventListener('scroll', handleScroll);
    return function () {
      isChangeColor && window.removeEventListener('scroll', handleScroll);
    };
  }, [isChangeColor]);
  var handleScroll = function handleScroll(event) {
    var navDom = tabsNavRef.current;
    var navRefTop = navDom.getBoundingClientRect().top;
    var scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
    if (navRefTop < scrollTop) {
      navDom.style.backgroundColor = '#fff';
    } else {
      navDom.style.backgroundColor = '';
    }
  };
  var classes = classnames(prefixCls, className, "".concat(prefixCls, "--").concat(type));
  var onHandleClick = function onHandleClick(item, index) {
    if (disabled || item.props.disabled) {
      return;
    }
    if (swipeable) {
      // @ts-ignore
      tabSwiper && tabSwiper.slideTo(index);
    }
    setCurrentIndex(index);
    onChange && onChange(index, item.props);
  };
  var onHandleSwiper = function onHandleSwiper(swiper, index) {
    setCurrentIndex(index);
    setTabSwiper(swiper);
    onSwiper && onSwiper(index);
  };

  // 渲染内容
  var contentRender;
  if (swipeable) {
    contentRender = /*#__PURE__*/React.createElement(Swiper, {
      onInit: function onInit(swiper) {
        setTabSwiper(swiper);
        swiper.slideTo(currentIndex);
      },
      onSlideChangeTransitionEnd: function onSlideChangeTransitionEnd(swiper) {
        if (swipeable) {
          onHandleSwiper(swiper, swiper.realIndex);
        }
      },
      onSwiper: onSwiper
    }, React.Children.map(children, function (item, index) {
      return item.props.children && /*#__PURE__*/React.createElement(SwiperSlide, null, /*#__PURE__*/React.createElement(TabPanel, _extends({}, item.props, {
        key: +index,
        selected: Number(currentIndex) === index
      })));
    }));
  } else {
    contentRender = React.Children.map(children, function (item, index) {
      return item.props.children && /*#__PURE__*/React.createElement(TabPanel, _extends({}, item.props, {
        key: +index,
        selected: Number(currentIndex) === index
      }));
    });
  }
  var Nav = React.Children.map(children, function (item, index) {
    var _item$props = item.props,
      title = _item$props.title,
      img = _item$props.img;
    return /*#__PURE__*/React.createElement(Title, {
      ref: function ref(el) {
        return tabsTitleRef.current[index] = el;
      },
      active: currentIndex === index,
      value: title,
      img: img,
      key: +index,
      scrollable: scrollable,
      disabled: disabled || item.props.disabled,
      onClick: function onClick() {
        onHandleClick(item, index);
      }
    });
  });
  var Wrap = /*#__PURE__*/React.createElement("div", {
    className: classnames("".concat(prefixCls, "__wrap"), "".concat(prefixCls, "__wrap--").concat(type), _defineProperty({}, "".concat(prefixCls, "__wrap--scrollable"), !!scrollable))
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames("".concat(prefixCls, "__nav")),
    ref: tabsNavRef
  }, Nav, /*#__PURE__*/React.createElement("div", {
    className: classnames("".concat(prefixCls, "__line")),
    style: lineStyle
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: classes,
    style: style
  }, sticky ? /*#__PURE__*/React.createElement(Sticky, {
    style: stickyStyle
  }, " ", Wrap, " ") : Wrap, /*#__PURE__*/React.createElement("div", {
    className: classnames("".concat(prefixCls, "__content"))
  }, contentRender));
};
Tabs.Panel = TabPanel;
Tabs.defaultProps = {
  type: 'line',
  ellipsis: true,
  swipeThreshold: 5,
  duration: 0.3
};
export default Tabs;