/*-----------------------------------------------------------------
- Router
-----------------------------------------------------------------*/
import { createRouter, createWebHistory } from 'vue-router';
import deepMerge from 'deepmerge';

let routes: any[] = [];
type files = {
    modules: any | undefined;
};
const importedFiles: files | any = {
    modules: null,
};

// Load files
importedFiles.modules = require.context('@modules', true, /\/routes[\S]*\.(js|ts)$/);

// Merge configs
Object.keys(importedFiles).forEach((section) => {
    importedFiles[section].keys().forEach((fileName: any) => {
        routes = deepMerge(routes, importedFiles[section](fileName).default);
    });
});

const router = createRouter({
    history: createWebHistory(),
    routes,

    /**
     * Handle scroll behavior
     *
     * @param {*} to
     * @param {*} from
     * @param {*} savedPosition
     * @returns {{x: number, y: number}|{selector: *}|*}
     */
    scrollBehavior(to: any, from: any, savedPosition: any): { x: number; y: number; } | { selector: any; } | any {
        if (to.hash && to.hash !== '#') {
            return { selector: to.hash };
        }
        if (savedPosition) {
            return savedPosition;
        }
        return {
            x: 0,
            y: 0,
        };
    },
});

export default router;
