function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
var Header = function Header(props) {
  var tabSource = props.tabSource,
    _onClick = props.onClick;
  // console.log('props tabSource---------------', tabSource)

  var _useState = useState('请选择'),
    _useState2 = _slicedToArray(_useState, 2),
    currentValue = _useState2[0],
    setCurrentValue = _useState2[1];
  useEffect(function () {
    if (tabSource) {
      var filterResult = tabSource.filter(function (item) {
        return item.value === currentValue;
      });
      // console.log('header的useEffect渲染', filterResult)
      if (filterResult.length === 0) {
        setCurrentValue('请选择');
      }
    }
  }, [tabSource]);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('Area__Header')
  }, tabSource && tabSource.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      className: classnames('Area__Header-item', {
        on: currentValue === item.value
      }),
      key: item.value,
      onClick: function onClick() {
        setCurrentValue(item.value);
        _onClick && _onClick(item);
      }
    }, /*#__PURE__*/React.createElement("span", null, item.label));
  }), /*#__PURE__*/React.createElement("div", {
    className: classnames('Area__Header-item', {
      on: currentValue === '请选择'
    }),
    onClick: function onClick() {
      setCurrentValue('请选择');
      _onClick && _onClick({
        value: '请选择',
        label: '请选择'
      });
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u8BF7\u9009\u62E9")));
};
export default Header;