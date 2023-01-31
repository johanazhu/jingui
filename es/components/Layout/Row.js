import React, { memo } from 'react';
import classnames from 'classnames';
var prefixCls = 'jing-row';
var Row = function Row(props) {
  var className = props.className,
    children = props.children,
    gutter = props.gutter,
    justify = props.justify,
    align = props.align,
    style = props.style,
    onClick = props.onClick;
  var classes = classnames(prefixCls, "".concat(prefixCls, "--justify-").concat(justify), "".concat(prefixCls, "--align-").concat(align), className);
  var groups = function groups() {
    var groups = [[]];
    var totalSpan = 0;
    React.Children.forEach(children, function (child, index) {
      if (! /*#__PURE__*/React.isValidElement(child)) return null;
      totalSpan += Number(child.props.span);
      if (totalSpan > 24) {
        groups.push([index]);
        totalSpan -= 24;
      } else {
        groups[groups.length - 1].push(index);
      }
    });
    return groups;
  };

  // const spaces = () => {
  //     const gutter = Number(props.gutter);
  //     const spaces: RowSpaces = [];

  //     if (!gutter) {
  //         return spaces;
  //     }

  //     groups?.forEach((group) => {
  //         const averagePadding = (gutter * (group.length - 1)) / group.length;

  //         group.forEach((item, index) => {
  //             if (index === 0) {
  //                 spaces.push({ right: averagePadding });
  //             } else {
  //                 const left = gutter - spaces[item - 1].right;
  //                 const right = averagePadding - left;
  //                 spaces.push({ left, right });
  //             }
  //         });
  //     });

  //     return spaces;
  // }

  return /*#__PURE__*/React.createElement("div", {
    className: classes,
    style: style,
    onClick: onClick
  }, children);
};
Row.defaultProps = {
  justify: 'start',
  align: 'top'
};
export default /*#__PURE__*/memo(Row);