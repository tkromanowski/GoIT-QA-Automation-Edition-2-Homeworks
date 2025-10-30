Feature: Logowanie do aplikacji bankowej

  Jako klient banku
  Chcę móc zalogować się do mojego konta bankowego
  Aby uzyskać dostęp do salda i historii transakcji

  Background:
    Given użytkownik znajduje się na stronie logowania do aplikacji bankowej

  @successful-login
  Scenario: Pomyślne logowanie z poprawnymi danymi
    When użytkownik wpisuje poprawny login "jan.kowalski"
    And wpisuje poprawne hasło "MojeHaslo123"
    And klika przycisk "Zaloguj się"
    Then użytkownik zostaje przekierowany na stronę główną konta
    And widzi powitanie "Witaj, Jan!"
    And saldo konta jest widoczne

  @invalid-password
  Scenario: Nieudane logowanie z niepoprawnym hasłem
    When użytkownik wpisuje poprawny login "jan.kowalski"
    And wpisuje niepoprawne hasło "zleHaslo"
    And klika przycisk "Zaloguj się"
    Then użytkownik pozostaje na stronie logowania
    And widzi komunikat błędu "Nieprawidłowy login lub hasło"

  @missing-fields
  Scenario: Próba logowania bez wprowadzenia danych
    When użytkownik klika przycisk "Zaloguj się" bez wpisania loginu i hasła
    Then wyświetla się komunikat "Wprowadź login i hasło"

  @security
  Scenario: Blokada konta po trzech nieudanych próbach logowania
    Given użytkownik trzykrotnie wpisał niepoprawne dane logowania
    When próbuje zalogować się ponownie
    Then konto użytkownika zostaje tymczasowo zablokowane
    And wyświetla się komunikat "Twoje konto zostało zablokowane. Skontaktuj się z obsługą klienta."