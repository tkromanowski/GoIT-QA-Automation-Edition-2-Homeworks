export class Login { //Otworzenie strony z panelem logowania
  navigate() {
    cy.visit("https://www.edu.goit.global/account/login");
  }

  validateLoginTitle() { //Sprawdzenie czy widoczny jest nagłówek strony logowania
    cy.get("span.next-1jphuq5.e1wro88c2")
      .should("be.visible")
      .and("have.text", "Log in");
  }

  validateInputs() { //Sprawdzenie czy pola do logowania są widoczne (email i hasło)
    cy.get("#user_email").should("be.visible");
    cy.get("#user_password").should("be.visible");
  }

  validateButton() { //Sprawdzenie czy widoczny jest przycisk logowania
    cy.get(".eckniwg2").should("be.visible");
  }

  validatePasswordLink() { //Sprawdzenie czy widoczny jest przycisk do odzyskania hasła
    cy.get("next-1qrvie4 e48fpw0").should("be.visible");
    cy.get("next-1qrvie4 e48fpw0").should("have.text", "I can't remember the password");
  }

  fillEmail(email) { //Uzupełnienie pola email
    cy.get("#user_email").type(email);
  }

  fillPassword(password) { //Uzupełnienie pola hasło
    cy.get("#user_password").type(password);
  }

  clickLoginButton() { //Naciśnięcie przycisku logowania
    cy.get(".eckniwg2").click();
  }
}