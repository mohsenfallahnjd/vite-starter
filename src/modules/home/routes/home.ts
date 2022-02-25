/*-----------------------------------------------------------------
- Home routes
-----------------------------------------------------------------*/
const routes = [
    {
        path     : '/',
        name     : 'home',
        component: () => import('@/modules/home/views/Index.vue'),
    },
];

export default routes;
