<template>
    <teleport to="body">
        <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>
                        <slot name="header">
                            預設 Modal 標題
                        </slot>
                    </h3>
                    <button class="modal-close-button" @click="closeModal">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div class="modal-body">
                    <slot>
                        預設 Modal 內容
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                        <button @click="closeModal">預設關閉</button>
                    </slot>
                </div>
            </div>
        </div>
    </teleport>
</template>
    
<script setup>
const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false
    },
    closeOnOverlayClick: {
        type: Boolean,
        default: true
    }
})

const emit = defineEmits(['update:isVisible'])

function closeModal() {
    if (props.closeOnOverlayClick) {
        emit('update:isVisible', false)
    }
}
</script>
    
<style>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-container {
    background-color: white;
    padding: 1rem;
    border-radius: 3px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #EEE;
    padding-bottom: 10px;
}

.modal-header h3 {
    margin: 0;
    font-size: 1.2em;
}

.modal-close-button {
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    color: #888;
    padding: 5px;
    line-height: 1;
}

.modal-body {
    padding: 10px 0;
    max-height: 60vh;
    overflow-y: auto;
}

.modal-footer {
    border-top: 1px solid #EEE;
    padding-top: 10px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.modal-footer button {
    padding: 8px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #AA7bff;
    color: white;
}

.modal-footer button:hover {
    background-color: #BB7bff;
}

.modal-footer button:active {
    background-color: #AA7bff;
}
</style>