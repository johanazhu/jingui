import React from 'react';
import { Row, Col } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
import "./index.scss";
export default (function () {
  return /*#__PURE__*/React.createElement("div", {
    className: "demo-layout"
  }, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    span: 8
  }, "span: 8"), /*#__PURE__*/React.createElement(Col, {
    span: 8
  }, "span: 8"), /*#__PURE__*/React.createElement(Col, {
    span: 8
  }, "span: 8")), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    span: 4
  }, "span: 8"), /*#__PURE__*/React.createElement(Col, {
    offset: 4,
    span: 10
  }, "offset: 4, span: 10")), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    offset: 12,
    span: 12
  }, "offset: 12, span: 12"))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u5BF9\u9F50\u65B9\u5F0F"
  }, /*#__PURE__*/React.createElement(Row, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, "span: 6")), /*#__PURE__*/React.createElement(Row, {
    justify: "end"
  }, /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, "span: 6")), /*#__PURE__*/React.createElement(Row, {
    justify: "space-between"
  }, /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, "span: 6")), /*#__PURE__*/React.createElement(Row, {
    justify: "space-around"
  }, /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, "span: 6"), /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, "span: 6"))));
});