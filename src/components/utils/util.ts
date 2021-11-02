/**
 * 生成随机数
 * @param {min} number 最小值
 * @param {max} number 最大值
 */
export const random = (min: number, max: number) => {
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
export const sample = (array: any, n: number) => {
    const length = array.length;
    n = Math.max(Math.min(n, length), 0);
    const last = length - 1;
    for (let index = 0; index < n; index++) {
        const rand = random(index, last);
        const temp = array[index];
        array[index] = array[rand];
        array[rand] = temp;
    }
    return array.slice(0, n);
};
/**
 * keyboard 的字母表组件 不参与排序的白名单
 **/
export const getWhiteList = (index: number) => {
    if (
        index === 19 ||
        index === 27 ||
        index === 28 ||
        index === 29 ||
        index === 30
    ) {
        return true;
    }
    return false;
};
/**
 * @description 随机排序
 **/
export const shuffle = (arr: any) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let index = Math.floor(Math.random() * (i + 1));
        if (getWhiteList(i) || getWhiteList(index)) {
            [arr[i], arr[index]] = [arr[i], arr[index]];
        } else {
            [arr[i], arr[index]] = [arr[index], arr[i]];
        }
    }
    return arr;
};

/**
 * 描述: 判断一个对象是否是空对象
 * @param obj 对象
 **/
export const isEmptyObject = (obj: Object) =>
    !obj || Object.keys(obj).length === 0;

/**
 * 描述: 判断一个数组是否是空数组
 * @param arr 数组
 **/
export const isEmptyArray = (arr: Array<any>) =>
    Array.isArray(arr) && arr.length === 0;
