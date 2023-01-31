import { defineConfig } from 'father';

export default defineConfig({
    // https://github.com/umijs/father/tree/2.x
    // entry: 'src/index.ts',
    // esm: 'rollup',
    esm: {
        output: 'es'
    },
    cjs: {
        platform: 'browser',
        output: 'lib'
    },
    umd: {
        output: 'dist',
        extractCSS: true,
    },
    // umd: {
    //     name: 'jingui',
    //     globals: {
    //         react: 'React',
    //         'react-dom': 'ReactDOM',
    //     },
    // },
    // umd: {
    //     file: 'index',
    //     sourcemap: true,
    // },
    // cjs: 'babel',
    // umd: {
    //     name: 'jingui',
    //     globals: {
    //         react: 'React',
    //         // antd: 'antd',
    //     },
    // },
    // extraBabelPlugins: [
    //     ['babel-plugin-import', {
    //         libraryName: 'antd',
    //         libraryDirectory: 'es',
    //         style: true,
    //     }]
    // ],
    // extractCSS: true,
    // sassInRollupMode: {

    // }
});
