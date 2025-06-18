<template>
    <main>
        <div class="activity-main">

            <form class="activity-form" @submit.prevent="createAnActivity">
                <label for="date">活動日期
                    <input type="date" id="date" v-model="date">
                </label>

                <label for="title">活動名稱
                    <input type="text" id="title" v-model="title">
                </label>

                <label for="category">活動種類
                    <input type="text" id="category" v-model="category">
                </label>

                <label for="start-time">開始時間
                    <input type="time" id="start-time" v-model="startTime">
                </label>

                <label for="end-time">結束時間
                    <input type="time" id="end-time" v-model="endTime">
                </label>

                <label for="notes">備註
                    <input type="text" id="notes" v-model="notes">
                </label>

                <label for="mood">心情
                    <input type="range" id="mood" v-model="mood" min="1" max="5">
                    {{ mood }}
                </label>

                <button type="submit">建立</button>
            </form>

            <input type="date" v-model="activityDate" @change="getActivitiesByDate" class="activity-date">
            <activity-list :activities class="activity-list"></activity-list>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'

import api from '@/api/api.js'
import ActivityList from '@/components/ActivityList.vue'

const activities = ref([])
const activityDate = ref('')

const date = ref('')
const title = ref('')
const category = ref('')
const startTime = ref('')
const endTime = ref('')
const notes = ref('')
const mood = ref(3)

async function createAnActivity() {
    try {
        const response = await api.post(`/activities/create`,
            {
                'userId': '5f839465-daef-49d8-a9f7-0802762d938e',
                'activityDate': date.value,
                'title': title.value,
                'category': category.value,
                'startTime': startTime.value,
                'endTime': endTime.value,
                'notes': notes.value,
                'mood': mood.value
            }
        )
        console.log(`response->`,response.data)
    } catch (error) {
        console.log(`error->`,error.response.data)
    }
}

async function getActivitiesByDate() {
    try {
        const response = await api.get(`/activities/byDate?userId=5f839465-daef-49d8-a9f7-0802762d938e&activityDate=${activityDate.value}`)
        activities.value = response.data
    } catch (error) {
        console.log(`error->`, error)
    }
}
</script>

<style scoped>
.activity-main {
    width: 800px;
    margin: 0 auto;
    padding: 1rem;
    background-color: #FFDDAA55;
    box-shadow: 0.5px 0.5px 5px #CCC;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.activity-date {
    width: fit-content;
}

.activity-list {
    width: 100%;
}

.activity-form {
    display: flex;
    flex-direction: column;
}

.activity-form>label {
    min-height: 2rem;
}
</style>