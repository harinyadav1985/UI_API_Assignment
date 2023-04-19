const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    env: {
      baseUrl: "http://wave-trial.getbynder.com/",
      apiUrl: "https://api.themoviedb.org/3/movie",
      api_key: "efb4ee7ee0ec79c7b99bf100328d928c",
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
