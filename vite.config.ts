import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    open: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
  build: {
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
        },
        // Cache-busting asset names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Inline small assets to avoid extra requests
    assetsInlineLimit: 4096,
    // Enable source maps only in dev
    sourcemap: false,
    // Minify with esbuild (default, very fast)
    minify: 'esbuild',
    // CSS code splitting
    cssCodeSplit: true,
  },
})
