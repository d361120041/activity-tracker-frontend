import { createRouter, createWebHistory } from 'vue-router'

import ActivityHome from '@/views/activity/ActivityHome.vue'
import UserLogin from '@/views/user/UserLogin.vue'
import UserRegister from '@/views/user/UserRegister.vue'
import ActivityMainPage from '@/views/activity/ActivityMainPage.vue'

const routes = [
    { path: '/', name: 'Home', component: ActivityHome },
    { path: '/activity/home', name: 'ActivityHome', component: ActivityHome },
    { path: '/user/login', name: 'UserLogin', component: UserLogin },
    { path: '/user/register', name: 'UserRegister', component: UserRegister },
    { path: '/activity/MainPage', name: 'ActivityMainPage', component: ActivityMainPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router