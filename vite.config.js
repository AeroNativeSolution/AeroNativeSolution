import { defineConfig } from 'vite'

export default defineConfig({
  base: '/AeroNativeSolution/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  server: {
    open: {
      app: {
        name: 'chrome',
      },
    },
  },
})
