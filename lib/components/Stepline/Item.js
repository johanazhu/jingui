"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var prefixCls = 'jing-stepline--item';
var SteplineItem = function SteplineItem(props) {
  var children = props.children,
    footer = props.footer,
    percent = props.percent,
    color = props.color,
    type = props.type,
    count = props.count,
    i = props.i;
  var distribute = count && 100 / count * (i + 1) || 0;
  var percentValue = percent && parseInt(percent) || 0;
  var showColor = percentValue - distribute;
  var renderStep = function renderStep() {
    if (type === 'normal') {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "__step"),
        style: {
          backgroundColor: showColor > 0 ? color : ''
        }
      });
    } else {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "__ellipsisstep")
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          backgroundColor: showColor > 0 ? color : '',
          marginRight: count === 3 ? '1rem' : '0.5rem'
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          backgroundColor: showColor > 0 ? color : '',
          marginRight: count === 3 ? '1rem' : '0.5rem'
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          backgroundColor: showColor > 0 && count && percent && parseInt(percent) > (i + 1) * (100 / count) ? color : ''
        }
      }));
    }
  };
  return /*#__PURE__*/_react.default.createElement("li", {
    className: prefixCls,
    style: {
      width: "".concat(count && 100 / count, "%")
    }
  }, renderStep(), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "__header"),
    style: {
      backgroundColor: showColor > 0 ? color : ''
    }
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "__footer")
  }, footer));
};
SteplineItem.defaultProps = {
  color: 'var(--primary-color)'
};
var _default = SteplineItem;
exports.default = _default;