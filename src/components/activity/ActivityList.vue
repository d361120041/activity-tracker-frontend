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
                <td><span class="material-symbols-outlined">edit</span></td>
                <td><span class="material-symbols-outlined" @click="deleteAnActivity(activity.id)">delete</span></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { useActivityStore } from '@/stores/ActivityStore'

const activityStore = useActivityStore()

function deleteAnActivity(id) {
    activityStore.deleteAnActivity(id)
    activityStore.getActivitiesByDate()
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

tbody>tr {
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