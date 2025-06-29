<template>
    <modal v-model:isVisible="modalStore.isEditActivityModalOpen" :closeOnOverlayClick="true">
        <template #header>
            <h2>編輯活動</h2>
        </template>

        <form class="activity-form">
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
        </form>

        <template #footer>
            <button @click="updateAnActivity">修改活動</button>
            <button @click="modalStore.closeEditActivityModal">取消</button>
        </template>
    </modal>
</template>

<script setup>
import { ref } from 'vue'
import { useActivityStore } from '@/stores/ActivityStore'
import { useModalStore } from '@/stores/ModalStore'
import { useDateFormatter } from '@/composables/useDateFormatter'

import api from '@/api/api.js'
import Modal from '@/components/Modal.vue'

const props = defineProps(['activityToEdit'])

const activityStore = useActivityStore()
const modalStore = useModalStore()

const { getFormattedDate } = useDateFormatter()

const date = ref(props.activityToEdit.activityDate)
const title = ref(props.activityToEdit.title)
const category = ref(props.activityToEdit.category)
const startTime = ref(props.activityToEdit.startTime)
const endTime = ref(props.activityToEdit.endTime)
const notes = ref(props.activityToEdit.notes)
const mood = ref(props.activityToEdit.mood)

async function updateAnActivity() {
    try {
        const response = await api.put(`/activities/update/${props.activityToEdit.id}`, {
            "id": props.activityToEdit.id,
            "activityDate": date.value,
            "title": title.value,
            "category": category.value,
            "startTime": startTime.value,
            "endTime": endTime.value,
            "notes": notes.value,
            "mood": mood.value,
            "user": {
                "id": "EBC34817-4062-4550-8AF7-33E06380A152"
            }
        })
        activityStore.getActivitiesByDate(date.value)
        modalStore.closeEditActivityModal()
        resetForm()
    } catch (error) {
        console.log(`error->`, error)
    }
}

function resetForm() {
    date.value = getFormattedDate()
    title.value = ''
    category.value = ''
    startTime.value = ''
    endTime.value = ''
    notes.value = ''
    mood.value = 3
}
</script>

<style>
.activity-form {
    display: flex;
    flex-direction: column;
}

.activity-form label {
    min-height: 2rem;
}
</style>