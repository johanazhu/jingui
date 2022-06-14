export let supportsPassive = false;

try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
        get() {
            supportsPassive = true;
        },
    });
    window.addEventListener('test-passive', null as any, opts);
} catch (e) {}
