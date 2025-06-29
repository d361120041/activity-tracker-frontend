<template>
    <modal v-model:isVisible="modalStore.isAddActivityModalOpen" :closeOnOverlayClick="true">
        <template #header>
            <h2>新增活動</h2>
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
            <button @click="createAnActivity">建立活動</button>
            <button @click="modalStore.closeAddActivityModal">取消</button>
        </template>
    </modal>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useActivityStore } from '@/stores/ActivityStore'
import { useModalStore } from '@/stores/ModalStore'
import { useDateFormatter } from '@/composables/useDateFormatter'

import Modal from '@/components/Modal.vue'

const activityStore = useActivityStore()
const modalStore = useModalStore()

const { getFormattedDate } = useDateFormatter()

const date = ref('')
const title = ref('')
const category = ref('')
const startTime = ref('')
const endTime = ref('')
const notes = ref('')
const mood = ref(3)

async function createAnActivity() {
    try {
        const payload = {
            'userId': 'EBC34817-4062-4550-8AF7-33E06380A152',
            'activityDate': date.value,
            'title': title.value,
            'category': category.value,
            'startTime': startTime.value,
            'endTime': endTime.value,
            'notes': notes.value,
            'mood': mood.value
        }  
        await activityStore.createAnActivity(payload)
        await activityStore.getActivitiesByDate(date.value)
        modalStore.closeAddActivityModal()
        resetForm()
    } catch (error) {
        console.log(`error->`,error)
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

onMounted(() => {
    date.value = getFormattedDate()
})
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