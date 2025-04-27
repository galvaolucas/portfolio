import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
          targets: [
            {
              src: 'dist/index.html',
              dest: '',
              rename: '404.html',
            },
          ],
          hook: 'closeBundle',
        })
  ],
  server: {
    cors: true,
  },
  base: '/portfolio/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
});
