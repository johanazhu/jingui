// import { IBundleOptions } from 'father-build/src/types';
// import { typescriptPaths } from 'rollup-plugin-typescript-paths';

// const config: IBundleOptions = {
//     esm: 'babel',
//     cjs: 'babel',
//     umd: {
//         name: 'jingui',
//         globals: {
//             react: 'React',
//         },
//     },
//     runtimeHelpers: true,
//     // lessInBabelMode: true,
//     // sassInRollupMode: {

//     // },
//     extractCSS: true,
//     extraBabelPlugins: [
//         [
//             'import',
//             {
//                 libraryName: 'jingui',
//                 libraryDirectory: 'lib',
//                 style: true,
//             },
//             'jingui',
//         ],
//         ['transform-remove-console', { exclude: ['error', 'warn', 'info'] }],
//         [
//             'module-resolver',
//             {
//                 root: ['.'],
//                 alias: {
//                     '@': './src',
//                     '@@': './src/.umi',
//                 },
//             },
//         ],
//     ],
//     extraRollupPlugins: [typescriptPaths({ tsConfigPath: './tsconfig.json' })],
// };
// export default config;

export default {
    // https://github.com/umijs/father/tree/2.x
    // entry: 'src/index.ts',
    // esm: 'rollup',
    esm: 'babel',
    cjs: 'babel',
    umd: {
        name: 'jingui',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
    },
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
    extractCSS: true,
    // sassInRollupMode: {

    // }
};
