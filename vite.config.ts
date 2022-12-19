import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  server: {
    proxy: {
      '^/avatar/.*': {
        target: 'https://p2.music.126.net/',
        changeOrigin: true,
        rewrite: (s) => s.replace('/avatar', '')
      }
    }
  }
})
