import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/scripts/',
  // Web build
  plugins: [svelte()],
  build: {
    sourcemap: mode === "development",
    // Build directly into the Eleventy output directory
    outDir: "../_site/scripts/",
    emptyOutDir: true,
    manifest: true,
    // Since we use the generated Svelte components in the Eleventy page,
    // we do not have a real entrypoint
    lib: {
      entry: './src/main.ts',
      fileName: 'main',
      cssFileName: 'style',
      formats: ["es"]
    },
    rolldownOptions: {
      output: {
        entryFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]'
      }
    }
  }
}));
