import { createApp } from 'vue';
import App from './App.vue';
import { CoreInit } from './init';

const app = createApp(App)
    .use(CoreInit.i18n)
    .use(CoreInit.router);

app.mount('#app');
