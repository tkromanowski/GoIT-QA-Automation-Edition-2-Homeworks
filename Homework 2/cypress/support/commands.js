Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://www.edu.goit.global/account/login');
  cy.get('#user_email').type(email);
  cy.get('#user_password').type(password);
  cy.get('.eckniwg2').click(); // Log in button
});