import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages';
import sitemap from 'vite-plugin-sitemap';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
    plugins: [vue(),
        pages(),
        imagetools(),
    sitemap({
      hostname: 'https://paveltorbeev.ru',
    }),],
    base: '/',
    server: {
        historyApiFallback: true
    }
})
