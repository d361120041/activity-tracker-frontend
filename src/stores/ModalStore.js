import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {

    const isAddActivityModalOpen = ref(false)

    function openAddActivityModal() {
        isAddActivityModalOpen.value = true
    }

    function closeAddActivityModal() {
        isAddActivityModalOpen.value = false
    }

    return {
        isAddActivityModalOpen,
        openAddActivityModal, closeAddActivityModal
    }
})