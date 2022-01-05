import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
const path = require("path");

export default defineConfig({
  server: {
    port: 5000,
  },
  plugins: [svelte()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/variables.scss" as *;',
      },
    },
  },
});
