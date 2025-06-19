<template>
    <nav class="nav-container">
        <div class="logo-container">
            <router-link to="/">
                <img src="@/assets/pichu.png" alt="pichu-logo">
            </router-link>
        </div>
        <div class="nav-content">
            <ul>
                <li class="nav-item">
                    <router-link to="/">首頁</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/activity">我的活動</router-link>
                </li>
            </ul>
        </div>
        <div class="login-container">
            <button>登入</button>
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

.login-container button {
    padding: 8px 15px;
    margin: 0 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #AA7bff;
    color: white;
}

.login-container button:hover {
    background-color: #BB7bff;
}

.login-container button:active {
    background-color: #AA7bff;
}
</style>