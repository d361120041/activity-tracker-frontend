<template>
    <table>
        <thead>
            <tr>
                <th>日期</th>
                <th>名稱</th>
                <th>分類</th>
                <th>開始時間</th>
                <th>結束時間</th>
                <th>備註</th>
                <th>心情</th>
                <th colspan="2"></th>
            </tr>
        </thead>
        <tbody v-if="userStore.accessToken">
            <tr v-for="activity in activityStore.activities">
                <td>{{ activity.activityDate }}</td>
                <td>{{ activity.title }}</td>
                <td>{{ activity.category }}</td>
                <td>{{ activity.startTime.substring(0, 5) }}</td>
                <td>{{ activity.endTime.substring(0, 5) }}</td>
                <td>{{ activity.notes }}</td>
                <td>{{ activity.mood }}</td>
                <td>
                    <span class="material-symbols-outlined" @click="openModal(activity)">edit</span>
                </td>
                <td>
                    <span class="material-symbols-outlined" @click="deleteAnActivity(activity.id, activity.activityDate)">delete</span>
                </td>
            </tr>
        </tbody>
        <EditActivityModel v-if="modalStore.isEditActivityModalOpen" :activityToEdit></EditActivityModel>
    </table>
</template>

<script setup>
import { ref } from 'vue'
import { useActivityStore } from '@/stores/ActivityStore.js'
import { useModalStore } from '@/stores/ModalStore.js'
import { useUserStore } from '@/stores/UserStore.js'

import EditActivityModel from '@/components/activity/EditActivityModel.vue'

const activityStore = useActivityStore()
const modalStore = useModalStore()
const userStore = useUserStore()

const activityToEdit = ref(null)

function openModal(activity) {
    activityToEdit.value = activity
    modalStore.openEditActivityModal()
}

async function deleteAnActivity(id, date) {
    await activityStore.deleteAnActivity(id)
    await activityStore.getActivitiesByDate(date)
}
</script>

<style scoped>

</style>