import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    env: {
      baseUrl: 'http://127.0.0.1:8080',
      loginUser: 'test1234@stud.noroff.no',
      loginPassword: 'test1234',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
