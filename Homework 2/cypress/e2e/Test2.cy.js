describe("Test 2", () => {
  it("Zaloguj się i wyloguj - commands.js", () => {
    cy.login('testowyqa@qa.team', 'QA!automation-1');
    cy.url({ timeout: 10000 }).should('include', '/homepage');
    cy.get('#open-navigation-menu-mobile', { timeout: 10000 }).should('be.visible').click();
    cy.contains('Log out', { timeout: 10000 }).scrollIntoView().should('be.visible').click();
    cy.get('#open-navigation-menu-mobile', { timeout: 10000 }).should('be.visible').click();//Oczekiwanie na pojawienie się przycisku menu i naciśnięcie go 
    cy.get(':nth-child(12) > .next-bve2vl').scrollIntoView().should("be.visible");
    cy.get(':nth-child(12) > .next-bve2vl').click();
  });
});