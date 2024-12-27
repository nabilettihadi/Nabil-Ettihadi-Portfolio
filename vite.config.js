import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Nabil-Ettihadi-Portfolio/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        manualChunks: undefined,
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    },
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': '/src'
    },
    extensions: ['.js', '.jsx', '.json']
  },
  server: {
    port: 3000,
    open: true
  }
})