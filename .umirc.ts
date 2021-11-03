import { defineConfig } from 'dumi';

export default defineConfig({
    title: 'Jing-ui',
    favicon: 'https://i.loli.net/2021/07/07/jV4wc98UW5ELlCS.png',
    logo: 'https://i.loli.net/2021/07/07/jV4wc98UW5ELlCS.png',
    outputPath: 'docs-dist',
    mode: 'site',
    navs: [
        null,
        { title: 'GitHub', path: 'https://github.com/johanazhu/jingui' },
    ],
    mfsu: {},
    theme: {
        '@c-primary': '#3264c8',
    },
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
    styles: [
        `
        .__dumi-default-mobile-demo-layout .jing-page .grid{
            display: flex;
            flex-wrap: wrap;
        }
        .__dumi-default-mobile-demo-layout .jing-page .grid-column{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 33.33%;
            height: 125px;
            text-align: center;
        }
        .__dumi-default-mobile-demo-layout .jing-page-icon .jing-icon{
            display: block;
            margin-bottom: 15px;
        }
        .__dumi-default-mobile-demo-layout .jing-page-icon .jing-panel__body{
           padding: 0;
        }
        .__dumi-default-mobile-demo-layout .jing-page-keyboard .jing-panel__body{
            overflow: visible;
         }
        .__dumi-default-mobile-demo-layout .jing-page .grid-column:after{
            content: "";
            pointer-events: none;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            border-radius: 0;
            border-bottom: 1px solid #dcdcdc;
            border-right: 1px solid #dcdcdc;
        }
        .__dumi-default-mobile-demo-layout .jing-panel__header {
            padding-left: 15px;
        }
        .__dumi-default-mobile-demo-layout .jing-panel__body {
            overflow: hidden;
        }
        .__dumi-default-mobile-demo-layout .jing-panel__body:after {
            content: "";
            pointer-events: none;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            border-radius: 0;
            border-top: 1PX solid #dcdcdc;
            border-bottom: 1PX solid #dcdcdc;
        }
        .__dumi-default-mobile-demo-layout .jing-page-button .jing-panel__body {
            padding: 15px 0 0;
        }
        .__dumi-default-mobile-demo-layout .jing-page-buttongroup .jing-panel__body {
            padding: 15px 0 0;
        }
        .__dumi-default-mobile-demo-layout .jing-page-buttongroup .jing-buttonGroup {
            padding-bottom: 15px;
        }
        .__dumi-default-mobile-demo-layout .jing-page-result .jing-panel__body {
            overflow: hidden;
            padding: 15px;
        }
        .__dumi-default-mobile-demo-layout .jing-page-button .jing-button {
            margin-bottom: 15px;
            margin-right: 15px;
        }
        .__dumi-default-mobile-demo-layout .jing-page-noticebar p {
            font-size: 0.75rem;
            padding: 0.5rem 0.75rem;
        }
        .__dumi-default-mobile-demo-layout .jing-page-layout .jing-col {
            background-color: #bbeffd;
            border: 1px solid #61dafb;
        }
        .markdown *:not(pre) code {
          margin: 0 1px;
          padding: .2em .4em !important;
          font-size: .9em;
          color: rgba(0, 0, 0, 0.85) !important;
          background: #f2f4f5 !important;
          border: 1px solid #f0f0f0;
          border-radius: 3px;
          font-family: sfmono-regular,Consolas,liberation mono,Menlo,Courier,monospace;
        }
        .markdown table td:nth-child(3) {
          color: #FF5555;
          font-size: 13px;
          word-break: break-all;
        }
        .markdown table td:nth-child(3) > code {
          color: #FF5555 !important;
          background-color: #F6F6F6 !important;
          font-size: 13px;
          word-break: break-all;
          margin-bottom: 6px;
        }
        `,
    ],
});
