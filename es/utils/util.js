function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
export function isDef(val) {
  return val !== undefined && val !== null;
}
export function isFunction(val) {
  return typeof val === 'function';
}
export function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}

// export function isPromise(obj: unknown): obj is Promise<unknown> {
//     return (
//         obj && typeof obj === 'object' && typeof (obj as any).then === 'function'
//     )
// }

export function isPromise(obj) {
  return obj && _typeof(obj) === 'object' && typeof obj.then === 'function';
}

/**
 * 生成随机数
 * @param {min} number 最小值
 * @param {max} number 最大值
 */
export var random = function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};
/**
 * 生成随机不重复数
 * @param {array} array 传入的数组
 * @param {n} number 返回n个随机数
 */
export var sample = function sample(array, n) {
  var length = array.length;
  n = Math.max(Math.min(n, length), 0);
  var last = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = random(index, last);
    var temp = array[index];
    array[index] = array[rand];
    array[rand] = temp;
  }
  return array.slice(0, n);
};
/**
 * keyboard 的字母表组件 不参与排序的白名单
 **/
export var getWhiteList = function getWhiteList(index) {
  if (index === 19 || index === 27 || index === 28 || index === 29 || index === 30) {
    return true;
  }
  return false;
};
/**
 * @description 随机排序
 **/
export var shuffle = function shuffle(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var index = Math.floor(Math.random() * (i + 1));
    if (getWhiteList(i) || getWhiteList(index)) {
      var _ref = [arr[i], arr[index]];
      arr[i] = _ref[0];
      arr[index] = _ref[1];
    } else {
      var _ref2 = [arr[index], arr[i]];
      arr[i] = _ref2[0];
      arr[index] = _ref2[1];
    }
  }
  return arr;
};

/**
 * 描述: 判断一个对象是否是空对象
 * @param obj 对象
 **/
export var isEmptyObject = function isEmptyObject(obj) {
  return !obj || Object.keys(obj).length === 0;
};

/**
 * 描述: 判断一个数组是否是空数组
 * @param arr 数组
 **/
export var isEmptyArray = function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
};

/**
 * 防抖
 */
export var debounce = function debounce(func, delay) {
  var timer = null;
  return function () {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      // @ts-ignore
      func.apply(_this, args);
      clearTimeout(timer);
    }, delay);
  };
};

// 深拷贝
export function deepClone(obj) {
  if (!isDef(obj)) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }
  if (isObject(obj)) {
    var to = {};
    Object.keys(obj).forEach(function (key) {
      to[key] = deepClone(obj[key]);
    });
    return to;
  }
  return obj;
}