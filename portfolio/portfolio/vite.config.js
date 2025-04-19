import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',  // Since we're using a custom domain (jacobamobin.github.io)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
})