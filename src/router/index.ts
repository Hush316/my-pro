import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './route/base';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
