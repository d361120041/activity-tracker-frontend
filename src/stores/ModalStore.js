import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {

    const isAddActivityModalOpen = ref(false)
    const isEditActivityModalOpen = ref(false)
    const activityToEdit = ref(null)

    function openAddActivityModal() {
        isAddActivityModalOpen.value = true
    }

    function closeAddActivityModal() {
        isAddActivityModalOpen.value = false
    }

    function openEditActivityModal(activity) {
        isEditActivityModalOpen.value = true
        activityToEdit.value = activity
    }

    function closeEditActivityModal() {
        isEditActivityModalOpen.value = false
        activityToEdit.value = null
    }

    return {
        isAddActivityModalOpen,
        openAddActivityModal, closeAddActivityModal,
        isEditActivityModalOpen,
        openEditActivityModal, closeEditActivityModal
    }
})