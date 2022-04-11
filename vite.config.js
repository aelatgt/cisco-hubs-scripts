import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  build: {
    outDir: "build",
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443, // Run the websocket server on the SSL port
    },
  },
})
