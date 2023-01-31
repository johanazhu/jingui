"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "JqbCancel", {
  enumerable: true,
  get: function get() {
    return _resultCancel.default;
  }
});
Object.defineProperty(exports, "JqbCountdown", {
  enumerable: true,
  get: function get() {
    return _resultCountdown.default;
  }
});
Object.defineProperty(exports, "JqbEmpty", {
  enumerable: true,
  get: function get() {
    return _resultEmpty.default;
  }
});
Object.defineProperty(exports, "JqbError404", {
  enumerable: true,
  get: function get() {
    return _resultError.default;
  }
});
Object.defineProperty(exports, "JqbError500", {
  enumerable: true,
  get: function get() {
    return _resultError2.default;
  }
});
Object.defineProperty(exports, "JqbFail", {
  enumerable: true,
  get: function get() {
    return _resultFail.default;
  }
});
Object.defineProperty(exports, "JqbNetwork", {
  enumerable: true,
  get: function get() {
    return _resultNetwork.default;
  }
});
Object.defineProperty(exports, "JqbRight", {
  enumerable: true,
  get: function get() {
    return _resultRight.default;
  }
});
Object.defineProperty(exports, "JqbSuccess", {
  enumerable: true,
  get: function get() {
    return _resultSuccess.default;
  }
});
Object.defineProperty(exports, "JqbWaiting", {
  enumerable: true,
  get: function get() {
    return _resultWaiting.default;
  }
});
var _resultSuccess = _interopRequireDefault(require("./resultSuccess"));
var _resultFail = _interopRequireDefault(require("./resultFail"));
var _resultEmpty = _interopRequireDefault(require("./resultEmpty"));
var _resultCancel = _interopRequireDefault(require("./resultCancel"));
var _resultNetwork = _interopRequireDefault(require("./resultNetwork"));
var _resultRight = _interopRequireDefault(require("./resultRight"));
var _resultWaiting = _interopRequireDefault(require("./resultWaiting"));
var _resultCountdown = _interopRequireDefault(require("./resultCountdown"));
var _resultError = _interopRequireDefault(require("./resultError404"));
var _resultError2 = _interopRequireDefault(require("./resultError500"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }