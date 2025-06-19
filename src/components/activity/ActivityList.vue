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
                <td colspan="2"></td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="activity in activityStore.activities">
                <td>{{ activity.activityDate }}</td>
                <td>{{ activity.title }}</td>
                <td>{{ activity.category }}</td>
                <td>{{ activity.startTime }}</td>
                <td>{{ activity.endTime }}</td>
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
import { useActivityStore } from '@/stores/ActivityStore'
import { useModalStore } from '@/stores/ModalStore'

import EditActivityModel from '@/components/activity/EditActivityModel.vue'

const activityStore = useActivityStore()
const modalStore = useModalStore()
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
table {
    margin: 0 auto;
    box-shadow: 0 0.5px 5px 1px #CCC;
}

table,
td {
    text-align: center;
    border-collapse: collapse;
    padding: 1rem;
}

thead {
    background-color: #AACCFFAA;
    border-bottom: 1px solid #DDD;
}

tbody tr {
    background-color: #FFF;
    border-bottom: 1px solid #DDD;
}

td span:hover {
    transform: scale(1.01) translateY(-1px);
    cursor: pointer;
}

td span:active {
    transform: scale(1) translateY(0);
    cursor: pointer;
}
</style>