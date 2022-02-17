import { defineConfig } from "vite"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h } from 'preact'`,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  build: {
    outDir: mode === "development" ? "public/lib" : "build/lib",
    target: "esnext",
    lib: {
      entry: "src/lib/index.js",
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: ["three", "ethereal"],
      output: {
        globals: {
          three: "THREE",
          ethereal: "Ethereal",
        },
      },
    },
  },
}))
