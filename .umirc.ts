import { defineConfig } from 'dumi';

export default defineConfig({
    title: 'Jing-ui',
    // favicon: 'https://i.loli.net/2021/07/07/jV4wc98UW5ELlCS.png',
    // logo: 'https://i.loli.net/2021/07/07/jV4wc98UW5ELlCS.png',
    outputPath: 'docs-dist',
    mode: 'site',
    navs: [
        null,
        { title: 'GitHub', path: 'https://github.com/johanazhu/jingui' },
    ],
    devtool: 'source-map',
    // mfsu: {},
    theme: {
        '@c-primary': '#3264c8',
    },
    alias: {
        demo: process.cwd() + '/src/demo/index.ts',
        hook: process.cwd() + '/src/components/hooks',
        // assets: process.cwd() + 'src/assets',
        // assets: resolve(__dirname, 'src/assets/'),
        assets: '/src/assets',
    },
    // extraBabelPlugins: [
    //     [
    //         'import',
    //         {
    //             libraryName: 'jingui',
    //             camel2DashComponentName: false,
    //             customStyleName: name => {
    //                 return `./scss/index.less`; // 注意：这里 ./ 不可省略
    //             },
    //         },
    //         'jingui',
    //     ],
    // ],
    themeConfig: {
        carrier: 'jingui',
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
    styles: [
        `
        .__dumi-default-mobile-demo-layout .jing-page{
            background: #fff;
        }
        .__dumi-default-mobile-demo-layout .jing-page-keyboard .jing-panel__body{
            overflow: visible;
         }

        .__dumi-default-device {
            width: 340px !important;
            min-width: 340px !important;
            box-shadow: 0 !important;
            margin-left: 40px !important;
            // box-shadow: none !important;
            box-shadow: #ebedf0 0 4px 12px !important;
        }
        .__dumi-default-device body::-webkit-scrollbar {
            width: 0;
            background: transparent;
        }
        iframe[title="dumi-previewer"] {
            background: #f7f8fa;
        }
        iframe::-webkit-scrollbar {
            width: 0;
            background: transparent;
        }
        iframe document::-webkit-scrollbar {
            width: 0;
            background: transparent;
        }
        iframe > html::-webkit-scrollbar {
            width: 0;
            background: transparent;
        }
        html[data-scale="true"]::-webkit-scrollbar {
            width: 0;
            background: transparent;
        }
        .__dumi-default-menu[data-mode=site] {
            width: 240px !important;
            position: fixed;
            z-index: 100;
            top: 0;
            left: 0;
            bottom: 0;
            width: 260px;
            background-color: #f2f5fa;
            box-sizing: border-box;
            transition: left .3s;
            overflow-y: auto;
            border-right: 1px solid #ebedf1;
        }
        .__dumi-default-menu[data-mode='site'] .__dumi-default-menu-list > li > a {
            padding-left: 30px !important;
        }
        .__dumi-default-menu[data-mode='site'] .__dumi-default-menu-list > li > a ~ ul {
            margin-left: 30px !important;
        }
        .__dumi-default-layout[data-site-mode='true'][data-show-sidemenu='true'] {
            padding-left: 290px !important;
        }
        .__dumi-default-layout[data-show-slugs='false'] {
            padding-right: 30px !important;
        }
        .__dumi-default-menu-inner::-webkit-scrollbar {
            width: 0;
            background: transparent;
        }
        .__dumi-default-menu-inner::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            background-color: transparent;
          }
        .__dumi-default-menu-inner::-webkit-scrollbar-thumb {
            background-color: transparent;
            border-radius: 6px;
        }
        .__dumi-default-menu-inner:hover::-webkit-scrollbar-thumb {
            background-color: rgba(69, 90, 100, 0.2);
        }
        `,
    ],
});
