describe("Test1", () => { 
  it("Zaloguj się", () => {
    cy.visit("https://www.edu.goit.global/account/login");//Przekierowanie na stronę
    cy.get("#user_email").type("user888@gmail.com");//Wpisanie maila
    cy.get('#user_password').type("1234567890");//Wpisanie hasła
    cy.get('.eckniwg2').click();//Naciśnięcie przycisku zaloguj
    cy.url({ timeout: 10000 }).should('include', '/homepage');//Oczekiwanie na zmianę strony
    cy.get('#open-navigation-menu-mobile', { timeout: 10000 }).should('be.visible').click();//Oczekiwanie na pojawienie się przycisku menu i naciśnięcie go 
    cy.get(':nth-child(12) > .next-bve2vl').scrollIntoView().should("be.visible");
    cy.get(':nth-child(12) > .next-bve2vl').click();
  });
});