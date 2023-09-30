import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import dts from 'vite-plugin-dts'

const buildLib = process.env.BUILD_LIB;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => buildLib ? ({
  // Library for CLI
  plugins: [dts({ rollupTypes: true })],
  build: {
    sourcemap: false,
    minify: false,
    outDir: "./dist",
    emptyOutDir: true,
    lib: {
      entry: './src/lib.ts',
      fileName: 'fabric-template-generator',
      name: 'fabric-template-generator',
      formats: ['es']
    }
  }
}) : ({
  // Web build
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
        chunkFileNames: `[name].[hash].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
}));

