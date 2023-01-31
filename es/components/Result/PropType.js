import { JqbSuccess, JqbFail, JqbEmpty, JqbCancel, JqbNetwork, JqbRight, JqbWaiting, JqbCountdown, JqbError404, JqbError500 } from "./resultStatus";
export var ExceptionMap = {
  success: JqbSuccess,
  fail: JqbFail,
  empty: JqbEmpty,
  cancel: JqbCancel,
  network: JqbNetwork,
  right: JqbRight,
  waiting: JqbWaiting,
  countdown: JqbCountdown,
  '404': JqbError404,
  '500': JqbError500
};