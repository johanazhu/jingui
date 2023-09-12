import { defineConfig } from 'father';
const url = require('postcss-url');

export default defineConfig({
    // esm: {
    //     output: 'es',
    // },
    esm: {
        input: 'src', // 默认编译目录
        platform: 'browser', // 默认构建为 Browser 环境的产物
        transformer: 'babel', // 默认使用 babel 以提供更好的兼容性
        output: 'es',
    },
    // cjs: {
    //     platform: 'browser',
    //     output: 'lib',
    // },
    umd: {
        output: 'dist',
        extractCSS: true,
        postcssOptions: {
            plugins: [
                url({
                    url: 'inline', // enable inline assets using base64 encoding
                    maxSize: 10, // maximum file size to inline (in kilobytes)
                    fallback: 'copy', // fallback method to use if max size is exceeded
                }),
            ],
        },
    },
});
