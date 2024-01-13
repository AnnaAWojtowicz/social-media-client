require('dotenv/config');

//https://docs.cypress.io/api/plugins/before-spec-api#__docusaurus_skipToContent_fallback

describe('tests logout', () => {
  it('logs in & out the user', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.get('#registerForm').should('be.visible');
    cy.get('#registerForm > .modal-footer > .btn-outline-success')
      .should('be.visible')
      .wait(500)
      .click();
    cy.get('#loginEmail').wait(500).type(Cypress.env('loginUser'));
    cy.get('#loginPassword').wait(500).type(Cypress.env('loginPassword'));
    cy.get('#loginForm > .modal-footer > .btn-success').wait(500).click();
    cy.get('.profile-posts').should('be.visible');
    cy.get('.text-muted')
      .should('be.visible')
      .contains(Cypress.env('loginUser'));
    cy.get('.btn-outline-warning').should('be.visible').wait(500).click();
    cy.get('#registerForm > .modal-footer > .btn-outline-success')
      .should('be.visible')
      .wait(500)
      .click();
  });
});
