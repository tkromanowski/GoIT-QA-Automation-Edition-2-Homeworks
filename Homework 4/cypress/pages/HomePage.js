export class HomePage { //Sprawdzenie czy strona główna jest widoczna po zalogowaniu
  validateHomePageVisible() {
    cy.get("header").should("be.visible");
  }

  logout() { //Naciśnięcie w menu i wybranie przycisku wylogowania
    cy.get('#open-navigation-menu-mobile').click();
    cy.get(":nth-child(12) > .next-bve2vl").contains("Log out").click(); //Naciśnięcie w przycisk wylogowania
  }
}