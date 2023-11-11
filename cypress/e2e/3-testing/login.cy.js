it('logs in the user', () => {
  // cy.intercept('https://nf-api.onrender.com/api/v1"').as('exampleModal');
  cy.visit(' http://127.0.0.1:8080');
  //  cy.wait("@exampleModal");
  cy.wait(5000);
  //cy.get("#registerForm").should("be.visible");
  cy.get('#registerForm > .modal-footer > .btn-outline-success').click();
  // cy.get("#loginEmail").type("");
  // cy.get("#loginPassword").type("");
});
