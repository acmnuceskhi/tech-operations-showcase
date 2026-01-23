import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    fs: {
      // Allow Tina admin files to be served
      allow: ['..']
    }
  },
  optimizeDeps: {
    // Pre-bundle Tina CMS for better performance
    include: ['tinacms']
  }
})
