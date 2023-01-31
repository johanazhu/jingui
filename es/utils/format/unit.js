import { isDef } from "../util";
export function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val);
}
export function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }
  value = String(value);
  return isNumeric(value) ? "".concat(value, "px") : value;
}
export function getSizeStyle(originSize) {
  if (isDef(originSize)) {
    var size = addUnit(originSize);
    return {
      width: size,
      height: size
    };
  }
  return {};
}