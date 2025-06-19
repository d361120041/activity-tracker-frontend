import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useDateFormatter } from '@/composables/useDateFormatter'

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
        try {
            const response = await api.get(`/activities/byDate?userId=5f839465-daef-49d8-a9f7-0802762d938e&activityDate=${date}`)
            activities.value = response.data
        } catch (error) {
            console.log(`error->`, error)
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
        try {
            if (confirm('確定刪除嗎？此動作無法復原')) {
                const response = await api.delete(`/activities/delete/${id}?userId=5f839465-daef-49d8-a9f7-0802762d938e`)
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
})