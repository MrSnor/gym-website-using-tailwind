// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/gym-website-using-tailwind/",
  // config options
  server: {
    host: [
      '192.168.1.36',
      '127.0.0.1'
    ],
    port: '5500'
  }
})