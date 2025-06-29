import { ref } from 'vue'
import { defineStore } from 'pinia'

import api from '@/api/api.js'

export const useUserStore = defineStore('user', () => {

    const isLoading = ref(null)
    const error = ref(null)

    const accessToken = ref(null)

    async function login(email, password) {
        try {
            const response = await api.post(`/users/login`, {
                "email": email,
                "password": password
            })
            alert('登入成功')
            accessToken.value = response.data.accessToken
        } catch (error) {
            console.log(`error->`, error)
            alert(`登入失敗：${error.response.data}`)
        }
    }

    return {
        isLoading, error,
        login, accessToken
    }
})