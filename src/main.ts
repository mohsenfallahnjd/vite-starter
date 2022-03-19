import { createApp as createVueApp } from 'vue';
import { CoreInit } from './init';
import App from './App.vue';


// eslint-disable-next-line require-jsdoc
export const createApp = (base: string) => {
    const app = createVueApp(App);
    const {
        router,
        metaPlugin,
        i18n,
        createPinia,
    } = CoreInit;
    const metaManager = CoreInit.createMetaManager();

    app.use(i18n);
    app.use(router);
    app.use(metaManager);
    app.use(metaPlugin);
    app.use(createPinia());

    return {
        app,
        router,
    };
};

const { app, router } = createApp('/');
router.isReady().then(() => app.mount('#app'));
