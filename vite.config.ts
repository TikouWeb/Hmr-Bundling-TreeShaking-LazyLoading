import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { analyzer } from "vite-bundle-analyzer";

export default defineConfig({
  plugins: [
    react(),
    analyzer({
      analyzerMode: "server",
      openAnalyzer: false,
    }),
  ],
  build: {
    minify: "esbuild",
    sourcemap: false,
    rollupOptions: {
      output: {
        chunkFileNames: "chunk/[name].[hash].js",
        entryFileNames: "entry/[name].[hash].js",
        // manualChunks: {
        //   "ComponentA[hash]": ["./src/components/ComponentA.tsx"],
        //   "ComponentB[hash]": ["./src/components/ComponentB.tsx"],
        // },
        // manualChunks(id) {
        //   if (id.includes("lodash")) {
        //     return "lodash";
        //   }
        //   if (id.includes("node_modules")) {
        //     return "vendor";
        //   }
        // },
      },
    },
  },
});
