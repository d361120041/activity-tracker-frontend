# Activity Tracker Frontend

一個基於 Vue.js 3 的活動追蹤前端應用程式，讓使用者能夠記錄和管理日常活動。

## 🚀 功能特色

- **活動管理**：新增、編輯、刪除活動記錄
- **日期篩選**：依據特定日期查看活動
- **使用者認證**：登入/登出功能
- **使用者註冊**：新使用者帳號註冊
- **心情追蹤**：為每個活動記錄心情指數（1-5）
- **響應式設計**：適配不同螢幕尺寸
- **資料持久化**：使用 sessionStorage 保存狀態

## 🛠️ 技術棧

- **框架**：Vue.js 3 (Composition API)
- **狀態管理**：Pinia
- **路由**：Vue Router 4
- **HTTP 客戶端**：Axios
- **建構工具**：Vite
- **樣式**：原生 CSS + Material Symbols 圖示
- **持久化**：Pinia Plugin Persistedstate

## 📦 安裝與設定

### 環境需求

- Node.js 16.x 或更高版本
- npm

### 安裝步驟

1. **clone專案**
   ```bash
   git clone https://github.com/d361120041/activity-tracker-frontend.git
   cd activity-tracker-frontend
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **環境設定**
   
   根據您的環境設定 API 端點：
   
   - 開發環境：`.env`
     ```
     VITE_API_URL=/api
     ```
   
   - 生產環境：`.env.production`
     ```
     VITE_API_URL=/api
     ```

4. **啟動開發服務器**
   ```bash
   npm run dev
   ```
   
   應用程式將在 `http://localhost:5173` 啟動

5. **建構生產版本**
   ```bash
   npm run build
   ```

6. **預覽生產版本**
   ```bash
   npm run preview
   ```

## 📁 專案結構

```
src/
├── api/
│   └── api.js                 # API 設定與攔截器
├── assets/
│   ├── main.css              # 全域樣式
│   └── pichu.png             # Logo 圖片
├── components/
│   ├── Modal.vue             # 通用模態框組件
│   └── activity/
│       ├── ActivityList.vue  # 活動列表
│       ├── AddActivityModel.vue    # 新增活動模態框
│       └── EditActivityModel.vue   # 編輯活動模態框
├── composables/
│   └── useDateFormatter.js  # 日期格式化工具
├── router/
│   └── router.js             # 路由設定
├── stores/
│   ├── ActivityStore.js      # 活動狀態管理
│   ├── ModalStore.js         # 模態框狀態管理
│   └── UserStore.js          # 使用者狀態管理
├── views/
│   ├── ActivityHome.vue      # 活動首頁
│   ├── NavigationBar.vue     # 導航欄
│   └── user/
│       ├── UserLogin.vue     # 登入頁面
│       └── UserRegister.vue  # 註冊頁面
├── App.vue                   # 根組件
└── main.js                   # 應用程式入口
```

## 🔧 主要功能說明

### 活動管理

- **新增活動**：點擊「+」按鈕開啟新增活動模態框
- **編輯活動**：點擊活動列表中的編輯圖示
- **刪除活動**：點擊刪除圖示，需確認後執行
- **活動欄位**：
  - 活動日期
  - 活動名稱
  - 活動分類
  - 開始時間
  - 結束時間
  - 備註
  - 心情指數（1-5）

### 使用者認證

- **登入**：使用電子信箱和密碼登入
- **註冊**：建立新使用者帳號
- **自動登出**：Token 過期時自動登出
- **Token 刷新**：自動處理 Token 刷新

### 狀態管理

使用 Pinia 管理應用程式狀態：

- **ActivityStore**：管理活動資料和相關操作
- **UserStore**：管理使用者認證狀態
- **ModalStore**：管理模態框開關狀態

## 🔌 API 整合

應用程式與後端 API 整合，主要端點包括：

- `POST /users/register` - 使用者註冊
- `POST /users/login` - 使用者登入
- `POST /users/logout` - 使用者登出
- `POST /users/refresh-token` - 刷新 Token
- `GET /activities/byDate` - 依日期取得活動
- `POST /activities/create` - 建立活動
- `PUT /activities/update/:id` - 更新活動
- `DELETE /activities/delete/:id` - 刪除活動

## 🎨 樣式與 UI

- 使用原生 CSS 進行樣式設計
- 整合 Google Material Symbols 圖示
- 響應式設計，支援不同裝置
- 統一的色彩方案（主色：#AA7bff）

## 🔒 安全性

- JWT Token 認證
- 自動 Token 刷新機制
- 受保護的 API 端點
- 使用者 Session 管理

## 📱 響應式設計

應用程式支援多種螢幕尺寸：

- 桌面版：完整功能和佈局
- 平板：調整後的佈局
- 手機：優化的使用者體驗

## 🐛 已知問題

1. **API 檔案語法錯誤**：`src/api/api.js` 第 37 行有多餘的 `P` 字符
2. **模態框關閉**：某些情況下模態框可能需要手動關閉

## 🙏 致謝

- Vue.js 團隊提供優秀的框架
- Pinia 提供現代化的狀態管理
- Material Symbols 提供美觀的圖示集

---

**注意**：此應用程式需要搭配後端 API 服務才能正常運作。請確保後端服務已正確設定並運行。
