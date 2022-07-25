import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: () => import('@/views/MainPage.vue'),
        },
        {
            path: '/posts',
            name: 'PostListPage',
            component: () => import('@/views/PostListPage.vue'),
        },
        {
            path: '/posts/:id',
            component: () => import('@/views/PostPage.vue'),
        },
    ],
});

export default router;
