import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: {
      app: {
        name: 'chrome',
      },
    },
  },
})
