import { vitePreprocess, type SvelteConfig } from '@sveltejs/vite-plugin-svelte'

export default {
  preprocess: vitePreprocess()
} satisfies SvelteConfig
