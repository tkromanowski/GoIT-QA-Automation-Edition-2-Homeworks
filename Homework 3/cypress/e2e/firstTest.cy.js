import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const LoginPage = new Login();
const Home = new HomePage();

describe("Page Object Pattern Example", () => {
  it("open login page and verify all elements", () => { //Sprawdzenie czy na stronie znajdują się elementy
    LoginPage.navigate();
    LoginPage.validateLoginTitle();
    LoginPage.validateInputs();
    LoginPage.validateButton();
    LoginPage.validatePasswordLink();
  });

  it("log in and verify home page", () => { //Logowanie i weryfikacja wejścia na stronę
    LoginPage.navigate();
    LoginPage.fillEmail("user888@gmail.com");
    LoginPage.fillPassword("1234567890");
    LoginPage.clickLoginButton();

    Home.validateHomePageVisible(); //Weryfikacja strony głównej

    Home.logout(); //Wylogowanie
  });
});