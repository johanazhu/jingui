import { defineConfig } from 'father';

export default defineConfig({
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
});
