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
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    response => {
        return response
    },
    error => {
        const userStore = useUserStore()
        if (error.response?.status === 403) {
            return fetch('/api/users/refresh-token', { method: 'POST' })
                .then(response => {
                    if (response.ok) {
                        return response.json().then(async data => {
                            if (data?.accessToken) {
                                userStore.setAccessToken(data.accessToken)
                                try {
                                    const res = await api(error.config)
                                    return res
                                } catch (error) {
                                    throw new Error('failed retry request')
                                }
                            }
                        })
                    } else if (response.status === 401) {
                        alert('請登入帳號')
                        router.push('/user/login')
                        return Promise.reject(new Error('Refresh token failed, user needs to re-login'))
                    } else {
                        return Promise.reject(new Error('Unexpected response from refresh token endpoint'))
                    } P
                })
                .catch(error => {
                    return Promise.reject(new Error('fetch failed'))
                })
        }
        return Promise.reject(error)
    }
)

export default api