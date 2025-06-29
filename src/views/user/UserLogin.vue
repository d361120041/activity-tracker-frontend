<template>
    <div class="register-container">
        <form class="register-form" @submit.prevent="login">
            <label for="email">電子信箱</label>
            <input v-model="email" type="email" id="email" required>

            <label for="password">密碼</label>
            <input v-model="password" type="password" id="password" required>

            <button type="submit">登入</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/UserStore.js'

const userStore = useUserStore()

const email = ref('')
const password = ref('')

async function login() {
    await userStore.login(
        email.value, 
        password.value
    )
}

</script>

<style scoped>
.register-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 25%;
    min-width: 250px;
    gap: 10px;
}

.register-form input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-width: 250px;
}

.register-form button {
    padding: 8px 15px;
    margin: 10px 10px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #AA7bff;
    color: white;
    text-decoration: none;
}

.register-form button:hover {
    background-color: #BB7bff;
}

.register-form button:active {
    background-color: #AA7bff;
}
</style>