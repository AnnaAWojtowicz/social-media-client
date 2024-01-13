import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    env: {
      baseUrl: '/',
      loginUser: 'test1234@stud.noroff.no',
      loginPassword: 'test1234',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
