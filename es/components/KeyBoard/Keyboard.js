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
import React, { memo, useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { IconKeyboardShift, IconKeyboardShiftLine, IconArrow, IconKeyboardSecurity } from "../Icon";
import Key from "./Key";
import { useUpdateEffect, useRefs } from "../hooks";
import { getRect as getElementRect } from "../hooks/useRect";
import { stopPropagation, isObject } from "../../utils";
import { getDefaultDisplay, getCantActive, themeToLayout, letterLayout } from "./utils";
var prefixCls = 'jing-keyboard';
var Keyboard = function Keyboard(props) {
  var _classnames;
  var className = props.className,
    _props$layout = props.layout,
    layout = _props$layout === void 0 ? letterLayout : _props$layout,
    _props$layoutName = props.layoutName,
    layoutName = _props$layoutName === void 0 ? 'default' : _props$layoutName,
    title = props.title,
    _props$theme = props.theme,
    theme = _props$theme === void 0 ? 'letter' : _props$theme,
    showTitle = props.showTitle,
    visible = props.visible,
    transition = props.transition,
    display = props.display,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$maxLength = props.maxLength,
    maxLength = _props$maxLength === void 0 ? Infinity : _props$maxLength,
    hideOnClickOutside = props.hideOnClickOutside,
    noNeedHideElements = props.noNeedHideElements,
    onDelete = props.onDelete,
    onInput = props.onInput,
    onShiftCb = props.onShiftCb,
    onSpaceCb = props.onSpaceCb,
    onDoneCb = props.onDoneCb,
    onShow = props.onShow,
    onHide = props.onHide;
  var keyboardRef = useRef(null);
  var keyboardKeysRef = useRef(null);
  // const keyRef = useRef<any>([]);
  var valueRef = useRef(value);
  var showRef = useRef(visible);
  var _useRefs = useRefs(),
    _useRefs2 = _slicedToArray(_useRefs, 3),
    refs = _useRefs2[0],
    setRefs = _useRefs2[1],
    resetRefs = _useRefs2[2];
  var _useState = useState(layoutName),
    _useState2 = _slicedToArray(_useState, 2),
    layoutNamePlus = _useState2[0],
    setLayoutNamePlus = _useState2[1];
  var _useState3 = useState(40),
    _useState4 = _slicedToArray(_useState3, 2),
    keyboardHeaderHeight = _useState4[0],
    setKeyboardHeaderHeight = _useState4[1];
  var _useState5 = useState(220),
    _useState6 = _slicedToArray(_useState5, 2),
    keyboardBodyHeight = _useState6[0],
    setKeyboardBodyHeight = _useState6[1];
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    activeElement = _useState8[0],
    setActiveElement = _useState8[1];
  var classes = classnames(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "__layout-").concat(layoutNamePlus), theme.indexOf('letter') >= 0), _defineProperty(_classnames, "".concat(prefixCls, "__layout-").concat(theme), theme.indexOf('letter') !== 0), _classnames));

  // console.log('theme', theme.indexOf('letter'))

  useEffect(function () {
    if (hideOnClickOutside) {
      document.body.addEventListener('touchstart', handleTouchNeedHide);
      return function () {
        document.body.removeEventListener('touchstart', handleTouchNeedHide);
      };
    }
  }, []);
  useEffect(function () {
    var _keyboardRef$current;
    showRef.current = visible;
    keyboardRef === null || keyboardRef === void 0 ? void 0 : (_keyboardRef$current = keyboardRef.current) === null || _keyboardRef$current === void 0 ? void 0 : _keyboardRef$current.addEventListener('touchstart', stopPropagation, {
      passive: false
    });
    return function () {
      var _keyboardRef$current2;
      keyboardRef === null || keyboardRef === void 0 ? void 0 : (_keyboardRef$current2 = keyboardRef.current) === null || _keyboardRef$current2 === void 0 ? void 0 : _keyboardRef$current2.removeEventListener('touchstart', stopPropagation);
    };
  }, [visible]);
  useUpdateEffect(function () {
    if (!transition) {
      visible ? onShow === null || onShow === void 0 ? void 0 : onShow() : onHide === null || onHide === void 0 ? void 0 : onHide();
    }
  }, [visible]);
  useEffect(function () {
    /*
     ** 计算自定义键盘的高度
     ** kHeight = 视图宽度 / 1.46
     ** header = hTotal * 0.15
     ** hBase = (hTotal - hTitle) / 4
     */
    if (keyboardRef.current) {
      var kHeight = Math.round(document.body.clientWidth / 1.46);
      var kHeader = Math.round(kHeight * 0.15);
      var kBase = Math.round((kHeight - kHeader) / 4);
      setKeyboardHeaderHeight(kHeader);
      setKeyboardBodyHeight(kBase * 4);
    }
  }, [keyboardRef]);
  useEffect(function () {
    valueRef.current = value;
  }, [value]);
  var getButtonDisplayName = function getButtonDisplayName(button, display) {
    display = display || getDefaultDisplay();
    return display[button] || button;
  };
  var handleTouchNeedHide = function handleTouchNeedHide(event) {
    if (noNeedHideElements && (noNeedHideElements === null || noNeedHideElements === void 0 ? void 0 : noNeedHideElements.length) > 0) {
      // @ts-ignore
      if (event.path) {
        // @ts-ignore
        for (var i = 0; i < (event === null || event === void 0 ? void 0 : event.path.length); i++) {
          // @ts-ignore
          var item = event === null || event === void 0 ? void 0 : event.path[i];
          if (noNeedHideElements.indexOf((item === null || item === void 0 ? void 0 : item.id) || (item === null || item === void 0 ? void 0 : item.className)) !== -1) {
            return;
          }
        }
      }
    }
    onBlur();
  };
  var onBlur = function onBlur() {
    var _props$onBlur;
    showRef.current && ((_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 ? void 0 : _props$onBlur.call(props));
  };
  var onClose = function onClose() {
    var _props$onClose;
    (_props$onClose = props.onClose) === null || _props$onClose === void 0 ? void 0 : _props$onClose.call(props);
    onBlur();
  };
  var onPress = function onPress(text, type) {
    // console.log('activeElement', activeElement);
    // console.log('text', text);
    // console.log('type', type);

    if (type === 'delete') {
      onDelete === null || onDelete === void 0 ? void 0 : onDelete();
      onInput === null || onInput === void 0 ? void 0 : onInput(valueRef.current.substring(0, valueRef.current.length - 1));
    } else if (type === 'close') {
      onClose();
    } else if (type === 'shift') {
      var shiftToggle = layoutNamePlus === 'default' ? 'shift' : 'default';
      setLayoutNamePlus(shiftToggle);
      onShiftCb === null || onShiftCb === void 0 ? void 0 : onShiftCb();
    } else if (type === '123.*!&' || type === 'ABC') {
      var _shiftToggle = layoutNamePlus === 'default' ? 'symbol' : 'default';
      setLayoutNamePlus(_shiftToggle);
    } else if (type === '空格') {
      // type space
      onSpaceCb === null || onSpaceCb === void 0 ? void 0 : onSpaceCb();
    } else if (type === '完成') {
      // onHandleDone
      onDoneCb === null || onDoneCb === void 0 ? void 0 : onDoneCb();
    } else if (value.length < maxLength) {
      var _props$onPress;
      (_props$onPress = props.onPress) === null || _props$onPress === void 0 ? void 0 : _props$onPress.call(props, activeElement || text, type);
      onInput === null || onInput === void 0 ? void 0 : onInput(value + (activeElement || text));
    }
  };
  var handleTouchMove = function handleTouchMove(event) {
    var touch = event.touches[0];
    // clientX/Y 不随页面滚动而改变
    // pageX/Y 页面滚动而改变
    var currentPageX = touch.clientX;
    var currentPageY = touch.clientY;
    refs.forEach(function (element) {
      var eleRect = getElementRect(element);
      if (currentPageX > (eleRect === null || eleRect === void 0 ? void 0 : eleRect.left) && currentPageX < (eleRect === null || eleRect === void 0 ? void 0 : eleRect.right) && currentPageY > (eleRect === null || eleRect === void 0 ? void 0 : eleRect.top) && currentPageY < (eleRect === null || eleRect === void 0 ? void 0 : eleRect.bottom)) {
        // console.log('这里', element.innerText);
        if (element.innerHTML.indexOf('delete') > 0) {
          setActiveElement('delete');
        } else if (getCantActive(element.innerText)) {
          setActiveElement('');
        } else {
          setActiveElement(element.innerText);
        }
      }
    });
  };
  var handleTouchEnd = function handleTouchEnd() {
    setActiveElement('');
  };
  var onAnimationEnd = function onAnimationEnd() {
    visible ? onShow === null || onShow === void 0 ? void 0 : onShow() : onHide === null || onHide === void 0 ? void 0 : onHide();
  };
  var renderShiftButton = function renderShiftButton() {
    return layoutNamePlus === 'default' ? /*#__PURE__*/React.createElement(IconKeyboardShiftLine, {
      className: "".concat(prefixCls, "-key__shift-icon"),
      onClick: function onClick(e) {
        stopPropagation(e);
      }
    }) : /*#__PURE__*/React.createElement(IconKeyboardShift, {
      className: "".concat(prefixCls, "-key__shift-icon"),
      onClick: function onClick(e) {
        stopPropagation(e);
      }
    });
  };
  var renderKeys = function renderKeys() {
    switch (theme) {
      case 'letter':
      case 'custom-letter':
        return renderLetter();
      case 'number':
      case 'price':
      case 'id':
      case 'custom-number':
        return renderOthers();
    }
  };
  var renderOthers = function renderOthers() {
    var _layout2;
    var _layout;
    if (theme === 'custom-number') {
      if (!Array.isArray(layout)) {
        throw new Error('自定义数字键盘需要填入layout');
      }
      _layout = layout;
    } else {
      _layout = themeToLayout(theme);
    }

    // console.log('_layout', _layout);

    return (_layout2 = _layout) === null || _layout2 === void 0 ? void 0 : _layout2.map(function (row, rIndex) {
      var rowArray = row.split(' ');
      return /*#__PURE__*/React.createElement(React.Fragment, null, rowArray.map(function (item, index) {
        var buttonDisplayName = getButtonDisplayName(item, display);
        var keyIndex = parseInt(rIndex.toString() + index.toString());
        if (buttonDisplayName === 'emty') {
          return /*#__PURE__*/React.createElement(Key, {
            ref: setRefs(keyIndex),
            key: "{keyIndex}",
            text: "",
            type: "emty"
          });
        }
        return /*#__PURE__*/React.createElement(Key, {
          ref: setRefs(keyIndex),
          key: keyIndex,
          text: buttonDisplayName,
          type: buttonDisplayName,
          touchStart: function touchStart(text) {
            console.log('key props', text);
            setActiveElement(text);
          },
          active: activeElement === buttonDisplayName,
          onPress: onPress
        });
      }));
    });
  };
  var renderLetter = function renderLetter() {
    var _layout3;
    var _layout;
    if (theme === 'custom-letter') {
      console.log('props.layout', layout);
      if (!isObject(props.layout)) {
        throw new Error('自定义字母键盘需要填入layout');
      }
      _layout = layout;
    } else {
      _layout = layout;
    }
    // @ts-ignore
    var length = layout === null || layout === void 0 ? void 0 : layout[layoutNamePlus || 'default'].length;
    // @ts-ignore
    return layout === null || layout === void 0 ? void 0 : (_layout3 = layout[layoutNamePlus || 'default']) === null || _layout3 === void 0 ? void 0 : _layout3.map(function (row, rIndex) {
      var rowArray = row.split(' ');
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "__keys-row"),
        style: {
          height: 100 / length + '%'
        }
      }, rowArray.map(function (item, cIndex) {
        var buttonDisplayName = getButtonDisplayName(item, display);
        var keyIndex = parseInt(rIndex.toString() + cIndex.toString());
        if (buttonDisplayName === 'shift') {
          return /*#__PURE__*/React.createElement(Key, {
            ref: setRefs(keyIndex)
            // className={classnames({
            //     "jing-keyboard-key-symbol": getCantActive(buttonDisplayName)
            // })}
            ,
            key: 'shift',
            text: renderShiftButton(),
            type: "shift",
            active: activeElement === 'shift',
            onPress: onPress
          });
        }
        return /*#__PURE__*/React.createElement(Key, {
          ref: setRefs(keyIndex)
          // className={classnames({
          //     "jing-keyboard-key-symbol": getCantActive(buttonDisplayName)
          // })}
          ,
          key: keyIndex + buttonDisplayName,
          text: buttonDisplayName,
          type: buttonDisplayName,
          touchStart: function touchStart(text) {
            console.log('key props', text);
            setActiveElement(text);
          },
          active: activeElement === buttonDisplayName,
          onPress: onPress
        });
      }));
    });
  };
  var renderTitle = function renderTitle() {
    if (!showTitle) {
      return;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__header"),
      style: {
        height: keyboardHeaderHeight
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__header-left"),
      style: {
        width: keyboardHeaderHeight
      }
    }), /*#__PURE__*/React.createElement("h2", {
      className: "".concat(prefixCls, "__header-title")
    }, title === '安全键盘' && /*#__PURE__*/React.createElement(IconKeyboardSecurity, null), title), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__header-right"),
      onClick: onClose,
      style: {
        width: keyboardHeaderHeight
      }
    }, /*#__PURE__*/React.createElement(IconArrow, null)));
  };
  return /*#__PURE__*/React.createElement(CSSTransition, {
    mountOnEnter: true,
    unmountOnExit: true,
    nodeRef: keyboardRef,
    in: visible,
    timeout: 300,
    classNames: transition ? 'jing-slide-up' : '',
    onExited: onAnimationEnd
  }, /*#__PURE__*/React.createElement("div", {
    className: classes,
    ref: keyboardRef
  }, renderTitle(), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__body"),
    style: {
      height: keyboardBodyHeight
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__keys"),
    ref: keyboardKeysRef,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  }, renderKeys()))));
};
Keyboard.defaultProps = {
  theme: 'letter',
  layout: letterLayout,
  layoutName: 'default',
  hideOnClickOutside: true,
  transition: true,
  value: '',
  maxLength: Infinity,
  noNeedHideElements: ['jing-input--clear', 'jing-input--focus'],
  title: '安全键盘',
  showTitle: true
};
export default /*#__PURE__*/memo(Keyboard);