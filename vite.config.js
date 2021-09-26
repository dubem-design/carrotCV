import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), //  __dirname 和 path 显示红色的波浪线需要安装插件npm i @types/node -S
            '@comp': path.resolve(__dirname, 'src/components'), //  __dirname 和 path 显示红色的波浪线需要安装插件npm i @types/node -S
        },
    },
})
