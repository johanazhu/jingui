export function getTargetElement(target, defaultElement) {
  if (!target) {
    return defaultElement;
  }
  var targetElement;
  if (typeof target === 'function') {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }
  return targetElement;
}