# 👩‍🏫 ViewSonic Classroom App (Frontend)

這是一個模擬教室管理的前端專案，主要功能包含學生清單、分組管理、即時上線狀態模擬、QR Code 加入教室等。使用 React + Vite + Styled-Components + Redux Toolkit 搭建，並透過 MSW 模擬 API 與 Socket 行為。

---

## 🛠 技術棧

- ⚛️ React 18 + Vite
- 🎨 Styled-Components
- 🧠 Redux Toolkit
- 🧪 MSW (Mock Service Worker)
- 🧾 TypeScript

---

## 🚀 專案啟動

```bash
# 安裝依賴
pnpm install

# 啟動開發環境（包含啟用 MSW Mock API）
pnpm dev
```

### ✅ 環境變數設定

Mock 模式透過 `VITE_APP_MOCK=true` 控制，預設開啟。

請確認 `.env` 檔案中有設定：

```
VITE_APP_MOCK=true
```

在 `main.tsx` 中會根據這個變數啟動 Mock Service Worker：

```ts
if (import.meta.env.VITE_MOCK === 'true') {
  const { worker } = await import('./mocks/browser')
  await worker.start()
}
```

---

## 🧪 Mock 功能說明

### 👩‍🎓 學生名單

- `/api/students` 回傳固定 30 位學生資料
- 每位學生包含：`id`, `name`, `seatNumber`, `score`, `isOnline`
- 初始分數為 0，初始為離線

### 🔄 模擬即時上線狀態

- 專案內建 `startMockSocket()`，啟動後每隔 1.5 秒隨機變更學生 `isOnline` 狀態
- 離線學生：
  - 顯示灰底
  - 名稱改為「Guest」
  - 加減分按鈕禁用

### ➕ 分數調整

- 老師可用 `+1` / `-1` 按鈕調整學生分數
- 分數最低為 0，不能負數
- 使用 Redux 儲存分數

### 👥 自動分組

- 進入 `Group` 分頁時，自動將學生隨機分成 5 人一組
- 使用 Redux 儲存分組資料
- 顯示每組上線人數，例如 `2/5`
- 若學生上線狀態變更，分組狀態也會即時更新

### 📱 QR Code

- 顯示教室 ID、連結、QRCode
- 使用者可複製 ID 或連結，會顯示 Toast 訊息
- QRCode 使用 `qrcode.react` 套件

---
