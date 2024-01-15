/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  "resolve": {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@css": path.resolve(__dirname, "src/css"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: path.resolve(__dirname, "src/tests/setup.ts"),
  }
})
