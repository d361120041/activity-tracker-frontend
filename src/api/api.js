import axios from 'axios'
import router from '@/router/router.js'

import { useUserStore } from '@/stores/UserStore'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(
    config => {
        const userStore = useUserStore()
        
        const isProtectedApi = config.url.startsWith('/activities')
        if (isProtectedApi && userStore.accessToken) {
            config.headers.Authorization = `Bearer ${userStore.accessToken}`
        }
        return config
    },
    error => {
        console.log(`error->`, error)
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    response => {
        return response
    }, 
    error => {
        if (error.response?.status === 403) {
            alert('請登入帳號')
            router.push('/user/login')
        }
        return Promise.reject(error)
    }
)

export default api