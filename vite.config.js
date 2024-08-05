import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8080",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/api"),
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
  output: {
    manualChunks: {
      vendor: ["react", "react-dom"],
    },
  },
});
