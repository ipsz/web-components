import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from 'url';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-')
        },
      },
    }),
  ],
  resolve:{
    alias:{
      '@':fileURLToPath(new URL('./src',import.meta.url))
    },
  },
  build: {
    lib: {
      entry: "./src/main.ce.js",
      name: "xx-im",
      fileName: (format) => `xx-im.${format}.js`,
    },
  },
  define:{
    'process.env':{}
  }
});
