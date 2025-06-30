<template>
    <div class="register-container">
        <form class="register-form" @submit.prevent="register">
            <label for="email">電子信箱</label>
            <input v-model="email" type="email" id="email" required>

            <label for="password">密碼</label>
            <input v-model="password" type="password" id="password" required>

            <button type="submit">註冊帳號</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import api from '@/api/api.js'
import router from '@/router/router.js'

const email = ref('')
const password = ref('')

async function register() {
    try {
        const response = await api.post(`/users/register`, {
            "email": email.value,
            "password": password.value
        })
        alert('註冊成功，請登入帳號')
        router.push('/user/login')
    } catch (error) {
        console.log(`error->`,error)
        alert(`註冊失敗：${error.response.data.error}`)
    }
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