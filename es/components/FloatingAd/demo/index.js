import * as React from 'react';
import { FloatingAd } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
import "./index.scss";
export default (function () {
  var onClickAd = function onClickAd() {
    alert('点击悬浮广告');
  };
  return /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    className: "demo-jing-ad"
  }, /*#__PURE__*/React.createElement(FloatingAd, {
    onClick: onClickAd,
    style: {
      width: '4rem',
      bottom: '4rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://s2.loli.net/2021/12/24/9NUnJXwYVPquDGf.png",
    alt: "AD"
  })));
});