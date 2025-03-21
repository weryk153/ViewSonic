import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 設定 Vite 開發伺服器的埠號
    strictPort: true, // 如果 3000 被占用，不會自動換其他埠號
  },
})
