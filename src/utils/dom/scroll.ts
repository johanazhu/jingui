import { isIOS as checkIsIOS } from '../validate/system'


type ScrollElement = Element | Window;

export function getScrollTop(el: ScrollElement): number {
    const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;

    return Math.max(top, 0);
}

export function setScrollTop(el: ScrollElement, value: number): void {
    if ('scrollTop' in el) {
        el.scrollTop = value;
    } else {
        el.scrollTo(el.scrollX, value);
    }
}

export function getRootScrollTop(): number {
    return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
    );
}

export function setRootScrollTop(value: number): void {
    setScrollTop(window, value);
    setScrollTop(document.body, value);
}


const isIOS = checkIsIOS()

// hack for iOS12 page scroll
// see: https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
export function resetScroll(): void {
    if (isIOS) {
        setRootScrollTop(getRootScrollTop())
    }
}
