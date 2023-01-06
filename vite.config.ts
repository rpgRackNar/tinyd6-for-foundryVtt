import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [svelte()],
    build: {
        minify: "terser",
        lib: {
            "entry": "src/module/main.ts", "formats": ["iife"],
            name: "app", fileName: "main.mjs",
        },
        watch: {
            buildDelay: 3000
        }
    },

});
