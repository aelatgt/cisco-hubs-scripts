import { defineConfig } from "vite";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h } from 'preact'`
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      react: "preact/compat",
      "react-dom": "preact/compat"
    }
  },
  build: {
    outDir: mode === 'development' ? 'public/lib' : "build/lib",
    lib: {
      entry: "src/lib/index.js",
      name: "AEL",
      formats: ["umd"],
      fileName: () => "index.js"
    },
    rollupOptions: {
      external: ["three", "ethereal"],
      output: {
        globals: {
          three: "THREE",
          ethereal: "Ethereal"
        }
      }
    }
  }
}));
