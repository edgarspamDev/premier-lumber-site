import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,        // Same port on every PC
    strictPort: true,  // Ensure it only runs on 3000, fails if not available
    host: true,        // Allow access from other devices on network (phone testing)
    open: true,        // Auto-open browser on npm run dev
  },
  preview: {
    port: 4173,
    host: true,
  },
})
