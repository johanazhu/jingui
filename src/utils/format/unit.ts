import { isDef } from '../util';

export function isNumeric(val: string): boolean {
    return /^\d+(\.\d+)?$/.test(val);
}

export function addUnit(value?: string | number): string | undefined {
    if (!isDef(value)) {
        return undefined;
    }
    value = String(value);
    return isNumeric(value) ? `${value}px` : value;
}

export function getSizeStyle(originSize: string | number) {
    if (isDef(originSize)) {
        const size = addUnit(originSize);
        return {
            width: size,
            height: size,
        };
    }
    return {};
}
