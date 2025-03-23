import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 設定 Vite 開發伺服器的埠號
    strictPort: true, // 如果 3000 被占用，不會自動換其他埠號
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
