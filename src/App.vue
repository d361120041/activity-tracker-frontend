<template>
    <div class="app-container">
        <header class="app-header">
            <NavigationBar></NavigationBar>
        </header>

        <main>
            <router-view></router-view>
        </main>

        <footer class="app-footer"></footer>
    </div>
</template>

<script setup>
import NavigationBar from '@/views/NavigationBar.vue'
</script>

<style scoped>
.app-container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.app-header {
    position: sticky;
    top: 0;
    z-index: 100;
}

.app-footer {
    position: sticky;
    bottom: 0;
}
</style>