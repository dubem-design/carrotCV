import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Login',
            requiresAuth: false,
            layout: 'public',
        },
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
