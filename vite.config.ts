import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'path'
import { writeFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
          name: 'copy-index-to-404',
          closeBundle: () => {
            const indexPath = resolve(__dirname, 'dist/index.html');
            const notFoundPath = resolve(__dirname, 'dist/404.html');
            writeFileSync(notFoundPath, require('fs').readFileSync(indexPath));
          }
        }
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
