import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from "vite-plugin-pages";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
    plugins: [vue(),
        pages(),
    sitemap({
      hostname: "https://paveltorbeev.ru",
    }),],
    base: '/',
    server: {
        historyApiFallback: true
    }
})
