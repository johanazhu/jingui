import { JqbSuccess, JqbFail, JqbEmpty, JqbCancel, JqbNetwork, JqbRight, JqbWaiting, JqbCountdown, JqbAddress, JqbError404, JqbError500 } from "./resultStatus";
export var ExceptionMap = {
  success: JqbSuccess,
  fail: JqbFail,
  empty: JqbEmpty,
  cancel: JqbCancel,
  network: JqbNetwork,
  right: JqbRight,
  waiting: JqbWaiting,
  countdown: JqbCountdown,
  address: JqbAddress,
  '404': JqbError404,
  '500': JqbError500
};

/**
 * Result 结果
 * @param {title} string                            // 一级标题
 * @param {subTitle} string                         // 二级标题
 * @param {status} ResultStatus                     // 状态
 * @param {place} ResultPlace                       // 内容对齐方式
 * @param {extra} ReactNode                         // 额外自定义区域
 * @param {children} ReactNode                      // 组件中的内容
 **/