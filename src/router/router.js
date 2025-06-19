import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import ActivityHome from '@/views/ActivityHome.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/activity', name: 'ActivityHome', component: ActivityHome },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router