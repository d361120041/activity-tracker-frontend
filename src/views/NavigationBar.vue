<template>
    <nav class="nav-container">
        <div class="logo-container">
            <router-link to="/activity/home">
                <img src="@/assets/pichu.png" alt="pichu-logo">
            </router-link>
        </div>
        <div class="nav-content">
            <ul>
                <li class="nav-item">
                    <router-link to="/activity/home">我的活動</router-link>
                </li>
            </ul>
        </div>
        <div class="login-container">
            <router-link to="/user/login">登入</router-link>
            <router-link to="/user/register">註冊</router-link>
        </div>
    </nav>
</template>

<script setup>

</script>

<style scoped>
.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFF;
    box-shadow: 1px 2px 5px #EEE;
    padding: 0 20px;
}

.logo-container img {
    width: 50px;
    cursor: pointer;
    display: block;
}

.nav-content ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
}

.nav-content li {
    list-style: none;
}

.nav-content a {
    padding: 1rem;
    display: block;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    border-radius: 5px;
}

.nav-content a:hover {
    box-shadow: 1px 2px 5px #EEE;
}

.nav-content a:active {
    box-shadow: none;
}

.login-container a {
    padding: 8px 15px;
    margin: 0 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #AA7bff;
    color: white;
    text-decoration: none;
}

.login-container a:hover {
    background-color: #BB7bff;
}

.login-container a:active {
    background-color: #AA7bff;
}
</style>