import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.VERCEL ? '/' : '/my_portfolio/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  }
})
