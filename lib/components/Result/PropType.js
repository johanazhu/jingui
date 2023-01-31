"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExceptionMap = void 0;
var _resultStatus = require("./resultStatus");
var ExceptionMap = {
  success: _resultStatus.JqbSuccess,
  fail: _resultStatus.JqbFail,
  empty: _resultStatus.JqbEmpty,
  cancel: _resultStatus.JqbCancel,
  network: _resultStatus.JqbNetwork,
  right: _resultStatus.JqbRight,
  waiting: _resultStatus.JqbWaiting,
  countdown: _resultStatus.JqbCountdown,
  '404': _resultStatus.JqbError404,
  '500': _resultStatus.JqbError500
};
exports.ExceptionMap = ExceptionMap;