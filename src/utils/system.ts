const system = () => {
    const p = navigator.platform.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();
    const isIosDevice = !!userAgent.match(/\(i[^;]+;( u;)? cpu.+mac os x/);
    const isAndroidDevice =
        userAgent.indexOf('android') > -1 || userAgent.indexOf('linux') > -1;

    return {
        win: p === 'win32' || p === 'win64' || p === 'windows',
        mac:
            p === 'mac68k' ||
            p === 'macppc' ||
            p === 'macintosh' ||
            p === 'macintel',
        linux: p === 'linux' || p === 'x11',
        ios: isIosDevice,
        android: isAndroidDevice,
    };
};

export default system;
