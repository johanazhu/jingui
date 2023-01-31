import { defineConfig } from 'father';
const url = require('postcss-url');

export default defineConfig({
    esm: {
        output: 'es'
    },
    // cjs: {
    //     platform: 'browser',
    //     output: 'lib'
    // },
    umd: {
        output: 'dist',
        extractCSS: true,
        postcssOptions: {
            plugins: [
                url({
                    url: "inline", // enable inline assets using base64 encoding
                    maxSize: 10, // maximum file size to inline (in kilobytes)
                    fallback: "copy", // fallback method to use if max size is exceeded
                }),
            ],
        },
    },

});
