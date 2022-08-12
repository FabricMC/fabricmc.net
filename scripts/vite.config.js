import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [svelte()],
  build: {
    sourcemap: mode === "development",
    // Build directly into the Jekyll output directory
    outDir: "../_site/scripts/",
    emptyOutDir: true,
    // Since we use the generated Svelte components in the Jekyll page,
    // we do not have a real entrypoint
    lib: {
      entry: './src/main.ts',
      formats: ["es"]
    },
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
}));

