import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ssr } from "vite-plugin-ssr/plugin";
import { BASE_PATH } from "./global";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ssr({ prerender: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: BASE_PATH
})
