import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useDateFormatter } from '@/composables/useDateFormatter'
import { useUserStore } from '@/stores/UserStore.js'

import api from '@/api/api.js'

export const useActivityStore = defineStore('activity', () => {
    const activities = ref([])
    const loading = ref(false)
    const error = ref(null)

    const { getFormattedDate } = useDateFormatter()
    const activityDate = ref(getFormattedDate())

    async function getActivitiesByDate(date) {
        loading.value = true
        error.value = null
        const userStore = useUserStore()
        try {
            const response = await api.get(`/activities/byDate?userId=${userStore.userId}&activityDate=${date}`)
            activities.value = response.data
        } catch (error) {
            error.value = error
        } finally {
            loading.value = false
        }
    }

    async function createAnActivity(payload) {
        loading.value = true
        error.value = null
        try {
            await api.post(`/activities/create`, payload)
        } catch (error) {
            console.log(`error->`, error)
            error.value = error
        } finally {
            loading.value = false
        }
    }

    async function deleteAnActivity(id) {
        loading.value = true
        error.value = null
        const userStore = useUserStore()
        try {
            if (confirm('確定刪除嗎？此動作無法復原')) {
                const response = await api.delete(`/activities/delete/${id}?userId=${userStore.userId}`)
            }
        } catch (error) {
            console.log(`error->`, error)
            error.value = error
        } finally {
            loading.value = false
        }
    }

    return {
        activities,
        activityDate,
        loading, error,
        getActivitiesByDate,
        createAnActivity,
        deleteAnActivity
    }
},
    {
        persist: true,
    }
)