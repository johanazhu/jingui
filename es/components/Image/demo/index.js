import React from 'react';
import { Image, Row, Col, Loading } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
export default (function () {
  var src = 'https://s2.loli.net/2021/12/24/9NUnJXwYVPquDGf.png';
  var fits = ['contain', 'cover', 'fill', 'none', 'scale-down'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /*#__PURE__*/React.createElement(Image, {
    width: "100",
    height: "100",
    src: src
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u586B\u5145\u72B6\u6001",
    className: "demo-jing-image"
  }, /*#__PURE__*/React.createElement(Row, null, fits.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Col, {
      span: 8,
      key: index
    }, /*#__PURE__*/React.createElement(Image, {
      width: "100%",
      height: "27vw",
      fit: item,
      src: src
    }), /*#__PURE__*/React.createElement("div", {
      className: "text"
    }, item));
  }))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u5706\u5F62\u56FE\u7247",
    className: "demo-jing-image"
  }, /*#__PURE__*/React.createElement(Row, null, fits.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Col, {
      span: 8,
      key: index
    }, /*#__PURE__*/React.createElement(Image, {
      round: true,
      width: "100%",
      height: "27vw",
      fit: item,
      src: src
    }), /*#__PURE__*/React.createElement("div", {
      className: "text"
    }, item));
  }))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u52A0\u8F7D\u4E2D\u63D0\u793A",
    className: "demo-jing-image"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    span: 8
  }, /*#__PURE__*/React.createElement(Image, {
    width: "100%",
    height: "27vw"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, "\u9ED8\u8BA4\u63D0\u793A")), /*#__PURE__*/React.createElement(Col, {
    span: 8
  }, /*#__PURE__*/React.createElement(Image, {
    loadingIcon: /*#__PURE__*/React.createElement(Loading, {
      type: "spinner"
    }),
    width: "100%",
    height: "27vw"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, "\u81EA\u5B9A\u4E49\u63D0\u793A")))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u52A0\u8F7D\u4E2D\u63D0\u793A",
    className: "demo-jing-image"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    span: 8
  }, /*#__PURE__*/React.createElement(Image, {
    width: "100%",
    height: "27vw",
    src: "x"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, "\u9ED8\u8BA4\u63D0\u793A")), /*#__PURE__*/React.createElement(Col, {
    span: 8
  }, /*#__PURE__*/React.createElement(Image, {
    width: "100%",
    height: "27vw",
    src: "x",
    errorIcon: /*#__PURE__*/React.createElement("div", null, "\u52A0\u8F7D\u5931\u8D25")
  }), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, "\u81EA\u5B9A\u4E49\u63D0\u793A")))));
});