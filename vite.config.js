import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://nabilettihadi.github.io/Nabil-Ettihadi-Portfolio/',
  assetsInclude: ['**/*.pdf'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
})
