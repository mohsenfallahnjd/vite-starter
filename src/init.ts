// -------------------------------------------------------------------------- //
// Init modules
// -------------------------------------------------------------------------- //
import { createMetaManager, plugin as metaPlugin } from 'vue-meta';
import i18n from '@controller/i18n.ts';
import router from '@controller/router.ts';
import { createPinia } from 'pinia';

export const CoreInit = {
    i18n,
    router,
    createMetaManager,
    metaPlugin,
    createPinia,
};
