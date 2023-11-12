# Workflow CA

## Workflow

This project was made as a school CA that tested creating workflow and solving problems that can occur under this process.
Provided social media repository was a starting point for this project.

## NPM packages

To be able to run the test (both unit-tests and end-to-end test) the following npm packages were installed:

- Babel;
- Cypress;
- Eslint;
- Husky;
- Jest;
- Prittier.

## Badges

[![Automated Unit Testing](https://github.com/AnnaAWojtowicz/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/AnnaAWojtowicz/social-media-client/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/AnnaAWojtowicz/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/AnnaAWojtowicz/social-media-client/actions/workflows/e2e-test.yml)

[![Code Review](https://github.com/AnnaAWojtowicz/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/AnnaAWojtowicz/social-media-client/actions/workflows/gpt.yml)

[![Deploy static content to Pages](https://github.com/AnnaAWojtowicz/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/AnnaAWojtowicz/social-media-client/actions/workflows/pages.yml)

## Project setup

1. Clone this repository: https://github.com/AnnaAWojtowicz/social-media-client
2. In terminal run: `npm install` to install all the dependincies from package.json
3. To be able to run the project enter: `npm run`
4. To run unit-tests enter: `npm run test`
5. To run end-to-end tests enter: `npm run localhost-cypress`

## Important

When you run e2e tests it starts a server on a localhost (port 8080);
It is not possible to run Cli locally because it requirees a local server and this is a functionality that has dependency on a bundler that is not available in this project.
For more details go to: https://chat.google.com/dm/vCg28wAAAAE/8ScoLWGm_hQ/8ScoLWGm_hQ?cls=10

Cypress-cli tests in GitHub Actions are running against this project's GitHub Pages. This simplification was required due to complexity that is necessary to customize GitHub Actions to boot a temporary webserver for the purpose of running those tests.
Optionally it would be wise to deploy the code to GitHub Pages before running tests against those GitHub Pages. However, it seems that there is no functionality that inables to prioritize the deplyment action in front of the e2e test action.
