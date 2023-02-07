import { defineConfig } from "cypress";
import "dotenv/config";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    USER_EMAIL: process.env.USER_EMAIL,
    USER_PASSWORD: process.env.USER_PASSWORD,
    WRONG_EMAIL: process.env.WRONG_EMAIL,
    WRONG_PASSWORD: process.env.WRONG_PASSWORD,
  },
});
