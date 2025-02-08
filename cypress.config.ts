const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "eh3gcc",
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
})