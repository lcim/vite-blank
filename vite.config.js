import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config
export default defineConfig({
    base: "/vite-blank/", // repo name, ie base url of my website
    plugins: [react()]
})