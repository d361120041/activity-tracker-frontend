<template>
    <div class="activity-main-page">
        <nav class="toolbar">
            <button @click="generateReport" class="toolbar-button">產生報表</button>
            <button @click="downloadReport" class="toolbar-button">下載報表</button>
        </nav>
        <main class="activity-list">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" v-model="isAllChecked">
                        </th>
                        <th></th>
                        <th>日期</th>
                        <th>名稱</th>
                        <th>分類</th>
                        <th>時間</th>
                        <th>備註</th>
                        <th>心情</th>
                        <th>使用者</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(activity, index) in activities">

                        <td>
                            <input type="checkbox" :value="activity.id" v-model="checkedList">
                        </td>
                        <td>{{ index + 1 }}</td>
                        <td>{{ activity.activityDate }}</td>
                        <td>{{ activity.title }}</td>
                        <td>{{ activity.category }}</td>
                        <td>{{ `${activity.startTime.substring(0, 5)} - ${activity.endTime.substring(0, 5)}` }}</td>
                        <td>{{ activity.notes }}</td>
                        <td>{{ activity.mood }}</td>
                        <td>{{ activity.userEmail }}</td>
                    </tr>
                </tbody>
            </table>
        </main>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue'
import api from '@/api/api.js'

const activities = ref([])
const checkedList = ref([])
const reportName = ref('')

const isAllChecked = computed({
    get() {
        return activities.value.length > 0 && activities.value.length === checkedList.value.length
    },
    set(value) {
        if (value) {
            checkedList.value = activities.value.map(activity => activity.id)
        } else {
            checkedList.value = []
        }
    }
})

async function generateReport() {
    if (checkedList.value.length) {
        const response = await api.post('/activities/generateReport', {
            ids: checkedList.value
        })
        reportName.value = response.data
        alert(`[報表產生成功]：${reportName.value}`)
    } else {
        alert('請選擇一個項目')
    }
}

async function downloadReport() {
    if (reportName.value) {
        try {
            const response = await api.get(`/activities/download/${reportName.value}`, {
                responseType: 'blob'
            })

            const blob = new Blob([response.data], { type: response.headers['content-type'] })
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.style.display = 'none'
            a.href = url

            const contentDisposition = response.headers['Content-Disposition']
            let fileName = reportName.value
            if (contentDisposition) {
                const matches = /filename="(.+)"/.exec(contentDisposition)
                if (matches && matches[1]) {
                    fileName = matches[1]
                }
            }
            a.download = fileName

            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
            document.body.removeChild(a)
            console.log(`[檔案下載完成]：${fileName}`);
        } catch (error) {
            alert('[檔案下載失敗]：', error)
        }
    } else {
        alert('請先產生報表')
    }
}

async function findAllActivities() {
    const response = await api('/activities/all')
    if (Array.isArray(response.data)) {
        activities.value = response.data
    } else {
        alert('無法取得活動')
    }
}

onMounted(() => {
    findAllActivities()
})
</script>

<style scoped>
.activity-main-page {
    width: 950px;
    margin: 0 auto;
    padding: 0.5rem 10rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.toolbar {
    padding: 0.8rem 1.6rem;
    display: flex;
    gap: 1rem;
}

.toolbar-button {
    padding: 10px 15px;
    border: 2px solid #333;
    border-radius: 4px;
    cursor: pointer;
    background-color: #FFF;
    color: #000;
    text-decoration: none;
}
</style>