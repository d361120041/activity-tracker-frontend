<template>
    <div class="activity-main">

        <div class="activity-dashboard">
            <input type="date" v-model="selectedDate" @change="searchActivityByDate" class="activity-date">

            <button @click="modalStore.openAddActivityModal()" class="add-activity-button">
                <span class="material-symbols-outlined">add</span>
            </button>
        </div>

        <ActivityList class="activity-list"></ActivityList>

        <AddActivityModel></AddActivityModel>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useActivityStore } from '@/stores/ActivityStore'
import { useModalStore } from '@/stores/ModalStore'
import { useDateFormatter } from '@/composables/useDateFormatter'

import ActivityList from '@/components/activity/ActivityList.vue'
import AddActivityModel from '@/components/activity/AddActivityModel.vue'

const activityStore = useActivityStore()
const modalStore = useModalStore()
const { getFormattedDate } = useDateFormatter()

const today = getFormattedDate()
const selectedDate = ref(null)

function searchActivityByDate() {
    activityStore.getActivitiesByDate(selectedDate.value)
    selectedDate.value = null
}

onMounted(() => {
    activityStore.getActivitiesByDate(today)
})
</script>

<style scoped>
.activity-main {
    width: 800px;
    margin: 1rem auto;
    padding: 1rem;
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

.activity-dashboard {
    display: flex;
    justify-content: space-between;
}

.add-activity-button {
    border: none;
    background-color: transparent;
}

.add-activity-button span {
    border: 2px solid black;
    background-color: #fff;
}

.add-activity-button span:hover {
    cursor: pointer;
}
</style>