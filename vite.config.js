import { defineConfig } from 'vite'

export default defineConfig({
  base: '/AeroNativeSolution/',
  server: {
    open: {
      app: {
        name: 'chrome',
      },
    },
  },
})
