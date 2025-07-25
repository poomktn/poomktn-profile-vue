import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@assets/*': path.resolve(__dirname, 'src/assets/*'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@components/*': path.resolve(__dirname, 'src/components/*'),
    },
  },
})