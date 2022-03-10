import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import StylelintPlugin from 'vite-plugin-stylelint';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import ViteRequireContext from '@originjs/vite-plugin-require-context';
import eslintPlugin from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';
import { resolve } from 'path';

const manifest = require('./src/controller/manifest.json');

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            'vue-i18n'   : 'vue-i18n/dist/vue-i18n.esm-bundler.js',
            path         : 'path-browserify',
            '@'          : resolve(__dirname, './src'),
            '@controller': resolve(__dirname, './src/controller'),
            '@modules'   : resolve(__dirname, './src/modules'),
            '@components': resolve(__dirname, './src/components'),
        },
    },

    plugins: [
        vue(),
        vueI18n({
            include: [
                resolve(__dirname, './src/**/locales/**'),
                resolve(__dirname, './src/locales/**'),
            ],
            runtimeOnly: false,
        }),
        ViteRequireContext(),
        VitePWA({
            base         : '/',
            srcDir       : 'src',
            filename     : 'sw.ts',
            includeAssets: ['/favicon.png'],
            strategies   : 'injectManifest',
            manifest,
        }),
        eslintPlugin({
            fix: true,
        }),
        StylelintPlugin({
            include: /.*\.(css|scss)$/,
            fix    : true,
        }),
    ],

    build: {
        target: 'esnext',
    },
});
