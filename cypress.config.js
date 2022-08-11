const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://example.cypress.io' // you can change this to your own base url
  },
  chromeWebSecurity: false, // allow chrome to run in a web worker
});
