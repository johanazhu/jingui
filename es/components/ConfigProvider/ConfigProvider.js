import React, { useEffect, createContext } from 'react';
import setTheme from "./setTheme";
import setPrimaryColor from "./setPrimaryColor";
var defaultConfig = {
  theme: 'light',
  primaryColor: '#4664D2'
};
export var ConfigContext = /*#__PURE__*/createContext(defaultConfig);
var ConfigProvider = function ConfigProvider(props) {
  var theme = props.theme,
    primaryColor = props.primaryColor,
    children = props.children;
  useEffect(function () {
    setTheme(theme);
    setPrimaryColor(primaryColor);
  }, [props]);
  return /*#__PURE__*/React.createElement(ConfigContext.Provider, {
    value: {
      theme: theme,
      primaryColor: primaryColor
    }
  }, React.Children.only(children));
};
export default ConfigProvider;