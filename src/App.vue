<template>
    <main>
        <div class="activity-main">

            <button @click="modalStore.openAddActivityModal()">新增活動</button>
            
            <input type="date" v-model="activityStore.activityDate" @change="activityStore.getActivitiesByDate()" class="activity-date">
            <ActivityList class="activity-list"></ActivityList>

            <AddActivityModel></AddActivityModel>
        </div>
    </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useActivityStore } from '@/stores/ActivityStore'
import { useModalStore } from '@/stores/ModalStore'

import ActivityList from '@/components/activity/ActivityList.vue'
import AddActivityModel from '@/components/activity/AddActivityModel.vue'

const activityStore = useActivityStore()
const modalStore = useModalStore()

onMounted(() => {
    activityStore.getActivitiesByDate()
})
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
</style>