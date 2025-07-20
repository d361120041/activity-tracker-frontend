<template>
    <button @click="generateReport">產生報表</button>
    <table>
        <thead>
            <tr>
                <th>
                    <input type="checkbox">
                </th>
                <th>日期</th>
                <th>名稱</th>
                <th>分類</th>
                <th>開始時間</th>
                <th>結束時間</th>
                <th>備註</th>
                <th>心情</th>
                <th>建立日期</th>
                <th>修改日期</th>
                <th>使用者</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="activity in activities">
                <th>
                    <input type="checkbox" @click="toggleCheck(activity.id)">
                </th>
                <td>{{ activity.activityDate }}</td>
                <td>{{ activity.title }}</td>
                <td>{{ activity.category }}</td>
                <td>{{ activity.startTime }}</td>
                <td>{{ activity.endTime }}</td>
                <td>{{ activity.notes }}</td>
                <td>{{ activity.mood }}</td>
                <td>{{ activity.createdAt }}</td>
                <td>{{ activity.updateAt }}</td>
                <td>{{ activity.user.email }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import api from '@/api/api.js'

const activities = ref([])

const activity = reactive({
    title: "",
    category: "",
    activityDate: "",
    startTime: "",
    endTime: "",
    notes: "",
    mood: null,
    createdAt: '',
    updateAt: '',
    user: {
        email: ''
    }
})

const checkedList = []

function toggleCheck(id) {
    if (checkedList.includes(id)) {
        const index = checkedList.indexOf(id)
        if (index !== -1) {
            checkedList.splice(index, 1)
        } else {
            checkedList.push(id)
        }
    } else {
        checkedList.push(id)
    }
}

async function generateReport() {
    const response = await api.post('/activities/csv', {
        ids: checkedList
    })
}

async function findAllActivities() {
    const response = await api('/activities/all')
    activities.value = response.data
    activity.activityDate = response.data?.activityDate
    activity.title = response.data?.title
    activity.category = response.data?.category
    activity.startTime = response.data?.startTime
    activity.endTime = response.data?.endTime
    activity.notes = response.data?.notes
    activity.mood = response.data?.mood
    activity.createdAt = response.data?.createdAt
    activity.updateAt = response.data?.updateAt
    activity.user.email = response.data?.user?.email
}

onMounted(() => {
    findAllActivities()
})
</script>

<style scoped>
table {
    margin: 0 auto;
    box-shadow: 0 0.5px 5px #CCC;
}

table,
td,
th {
    text-align: center;
    font-weight: 400;
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