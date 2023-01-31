import Color from 'color';
// 皮肤概念要解决 2022.10.11
var setPrimaryColor = function setPrimaryColor(color) {
  document.documentElement.style.setProperty('$primary-color', color);
  document.documentElement.style.setProperty('$primary-color-light', Color(color).alpha(0.8).string());
  document.documentElement.style.setProperty('$primary-color-dark', Color(color).darken(0.05).string());
  document.documentElement.style.setProperty('$primary-color-lighter', Color(color).lightness(95).string());
  document.documentElement.style.setProperty('--button-primary-shadow-color', Color(color).alpha(0.3).string());
};
export default setPrimaryColor;