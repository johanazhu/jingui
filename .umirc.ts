import { defineConfig } from 'dumi';

export default defineConfig({
    title: 'jing-ui',
    favicon: 'https://i.loli.net/2021/07/07/jV4wc98UW5ELlCS.png',
    logo: 'https://i.loli.net/2021/07/07/jV4wc98UW5ELlCS.png',
    outputPath: 'docs-dist',
    mode: 'site',
    navs: [null, { title: 'GitHub', path: 'https://github.com/johanazhu/jingui' }],
    themeConfig: {
        hd: {
            // 根据不同的设备屏幕宽度断点切换高清方案
            rules: [
                { maxWidth: 375, mode: 'flex', options: [32] },
                { minWidth: 376, maxWidth: 750, mode: 'flex', options: [32] },
            ],
            // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
        },
    },
    targets: {
        android: 4,
        ios: 8,
    },
    chainWebpack(memo: any, args: any) {
        memo.module.rules.delete('svg');
        memo.module
            .rule('svgr')
            .test(/.svg$/)
            .include.add(/components/)
            .end()
            .use('@svgr/webpack')
            .loader(require.resolve('@svgr/webpack'));
    },
});
