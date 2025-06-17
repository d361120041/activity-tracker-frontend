<template>
    <table>
        <thead>
            <tr>
                <td>日期</td>
                <td>名稱</td>
                <td>分類</td>
                <td>開始時間</td>
                <td>結束時間</td>
                <td>備註</td>
                <td>心情</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="activity in activities">
                <td>{{ activity.activityDate }}</td>
                <td>{{ activity.title }}</td>
                <td>{{ activity.category }}</td>
                <td>{{ activity.startTime }}</td>
                <td>{{ activity.endTime }}</td>
                <td>{{ activity.notes }}</td>
                <td>{{ activity.mood }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api/api.js'

const activities = ref([])

async function getActivitiesByDate() {
    try {
        const response = await api.get('/activities/byDate?userId=5f839465-daef-49d8-a9f7-0802762d938e&activityDate=1970-01-01')
        activities.value = response.data
    } catch (error) {
        console.log(`error->`, error)
    }
}

onMounted(() => {
    getActivitiesByDate()
})
</script>

<style></style>