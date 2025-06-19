<template>
    <header class="app-header">
        <NavigationBar></NavigationBar>
    </header>

    <main>
        <router-view></router-view>
    </main>

    <footer>

    </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useActivityStore } from '@/stores/ActivityStore'
import { useDateFormatter } from '@/composables/useDateFormatter'

import NavigationBar from '@/views/NavigationBar.vue'

const activityStore = useActivityStore()
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

</style>