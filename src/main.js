import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate, { createPersistedState } from 'pinia-plugin-persistedstate'
import router from '@/router/router.js'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
pinia.use(createPersistedState({
    storage: sessionStorage
}))

app.use(pinia)
app.use(router)
app.mount('#app')

