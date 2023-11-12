//https://docs.cypress.io/api/plugins/before-spec-api#__docusaurus_skipToContent_fallback

describe('tests login', () => {
  before('uploads website only once while testing login', () => {
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

  it('logs in the user', () => {
    //  cy.get("#loginEmail").wait(500).type("Annnna@noroff.no");
    //  cy.get("#loginPassword").wait(500).type("Annnnnnnnnna");
    cy.get('#loginEmail').wait(500).type(Cypress.env('loginUser'));
    cy.get('#loginPassword').wait(500).type(Cypress.env('loginPassword'));
    cy.get('#loginForm > .modal-footer > .btn-success').wait(500).click();
    cy.get('.profile-posts').should('be.visible');
    cy.get('.text-muted')
      .should('be.visible')
      .contains(Cypress.env('loginUser'));
  });
});
