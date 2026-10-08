import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/youssef-osama/',
  build:{
    cssMinify: false,
    minify: false,
  }
})

/* TODO: add : build: { sourcemap: true, minify: false, cssCodeSplit: false } 
 if the build proplem is still existing*/
