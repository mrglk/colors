import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  base: '/colors/',
  plugins: [vue()],
    resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/_vars.scss";
        @import "@/assets/styles/_fonts.scss";`
      }
    },
  },
})


// @import "@/assets/styles/_fonts.scss";