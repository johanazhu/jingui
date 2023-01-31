"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeToLayout = exports.priceLayout = exports.numberLayout = exports.letterLayout = exports.idLayout = exports.getDefaultDisplay = exports.getCantActive = void 0;
var getDefaultDisplay = function getDefaultDisplay() {
  return {
    '{bksp}': 'back',
    '{emty}': 'emty',
    '{shift}': 'shift',
    '{delete}': 'delete',
    '{123.*!&}': '123.*!&',
    '{ABC}': 'ABC',
    '{space}': '空格',
    '{complete}': '完成'
  };
};
exports.getDefaultDisplay = getDefaultDisplay;
var getCantActive = function getCantActive(element) {
  if (element === '' || element === 'shift' || element === 'delete' || element === '123.*!&' || element === 'ABC' || element === '空格' || element === '完成') {
    return true;
  } else {
    return false;
  }
};
exports.getCantActive = getCantActive;
var letterLayout = {
  default: ['q w e r t y u i o p', 'a s d f g h j k l', '{shift} z x c v b n m {delete}', '{123.*!&} {space} {complete}'],
  shift: ['Q W E R T Y U I O P', 'A S D F G H J K L', '{shift} Z X C V B N M {delete}', '{123.*!&} {space} {complete}'],
  symbol: ['1 2 3 4 5 6 7 8 9 0', '` ! @ # $ % ^ & *', '+ - \\ / [ ] { } {delete}', '{ABC} , . € £ ￥ {complete}']
};
// export const numberLayout = ['1 2 3'];
exports.letterLayout = letterLayout;
var numberLayout = ['1 2 3', '4 5 6', '7 8 9', '{emty} 0 {delete}'];
exports.numberLayout = numberLayout;
var priceLayout = ['1 2 3', '4 5 6', '7 8 9', '. 0 {delete}'];
exports.priceLayout = priceLayout;
var idLayout = ['1 2 3', '4 5 6', '7 8 9', 'X 0 {delete}'];
exports.idLayout = idLayout;
var themeToLayout = function themeToLayout(type) {
  switch (type) {
    case 'number':
      return numberLayout;
    case 'price':
      return priceLayout;
    case 'id':
      return idLayout;
  }
};
exports.themeToLayout = themeToLayout;