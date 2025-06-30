import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router/router.js'

import api from '@/api/api.js'

export const useUserStore = defineStore('user', () => {

    const isLoading = ref(null)
    const error = ref(null)

    const accessToken = ref(null)
    const userId = ref(null)

    async function login(email, password) {
        try {
            const response = await api.post(`/users/login`, {
                "email": email,
                "password": password
            })
            if (response?.data) {
                userId.value = response.data.userId
                accessToken.value = response.data.accessToken
            }
            alert('登入成功')
        } catch (error) {
            alert('登入失敗')
            throw new Error('login error')
        }
    }

    async function logout() {
        try {
            await api.post('/users/logout')
            userId.value = null
            setAccessToken(null)
            alert('登出成功')
            router.push('/user/login')
        } catch (error) {
            throw new Error('logout error')
        }
    }

    function setAccessToken(token) {
        accessToken.value = token
    }

    return {
        isLoading, error,
        login, logout,
        accessToken, setAccessToken,
        userId
    }
},
    {
        persist: true,
    }
)