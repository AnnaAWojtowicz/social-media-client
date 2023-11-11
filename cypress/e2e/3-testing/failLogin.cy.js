require('dotenv/config');

//https://docs.cypress.io/api/plugins/before-spec-api#__docusaurus_skipToContent_fallback

describe('tests fail login', () => {
  beforeEach('uploads website only once while testing login', () => {
    // cy.intercept('https://nf-api.onrender.com/api/v1').as('exampleModal');
    cy.visit(Cypress.env('baseUrl'));
    //  cy.wait("@exampleModal");
    // cy.wait(5000);
    cy.get('#registerForm').should('be.visible');
    cy.get('#registerForm > .modal-footer > .btn-outline-success')
      .should('be.visible')
      .wait(500)
      .click();
  });

  //https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/logging-in__basic-auth/cypress/e2e/spec.cy.js
  it('sets wrong password', () => {
    cy.get('#loginEmail').wait(500).type(Cypress.env('loginUser'));
    cy.get('#loginPassword').wait(500).type('123456');
    cy.intercept({
      method: 'POST',
      url: 'https://nf-api.onrender.com/api/v1/social/auth/login',
    }).as('loginRequest');
    cy.get('#loginForm > .modal-footer > .btn-success').wait(500).click();
    cy.wait('@loginRequest').its('response.statusCode').should('equal', 401);
  });

  it('invalid email', () => {
    cy.get('#loginEmail').wait(500).type('123456.noroff.no');
    cy.get('#loginPassword').wait(500).type(Cypress.env('loginPassword'));
    cy.get('#loginForm').submit();
    cy.get('#loginEmail:invalid').should('exist');
  });

  it('not noroff.no user', () => {
    cy.get('#loginEmail').wait(500).type('123456@gmail.com');
    cy.get('#loginPassword').wait(500).type(Cypress.env('loginPassword'));
    cy.get('#loginForm').submit();
    cy.get('#loginEmail:invalid').should('exist');
  });
});
