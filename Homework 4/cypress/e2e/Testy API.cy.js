const BASE_URL = 'https://httpbin.org';

function randomString() {
  return Math.random().toString(36).substring(7);
}

  describe('Testy API', () => {

  // GET parametry zapytania
  it('GET parametry zapytania', () => {
    cy.request({
      method: 'GET',
      url: `${BASE_URL}/get?name=Jan&city=Warszawa`
    }).then((response) => {
      expect(response.status).to.eq(200); // Sprawdzamy czy odpowiedź OK
      expect(response.body.args.name).to.eq('Jan'); // Czy parametr został przesłany
    });
  });

  // POST z JSON
  it('POST z JSON', () => {
    const dane = { user: 'Anna', age: 25 };

    cy.request('POST', `${BASE_URL}/post`, dane)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.json.user).to.eq('Anna');
      });
  });

  // PUT aktualizacja danych
  it('PUT aktualizacja danych', () => {
    const update = { comment: 'Zmiana danych' };

    cy.request('PUT', `${BASE_URL}/put`, update)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.json.comment).to.eq('Zmiana danych');
      });
  });

  // DELETE usuwanie danych
  it('DELETE usuwanie danych', () => {
    cy.request('DELETE', `${BASE_URL}/delete`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.url).to.include('/delete');
      });
  });

  // PATCH częściowa zmiana danych
  it('PATCH częściowa zmiana danych', () => {
    cy.request('PATCH', `${BASE_URL}/patch`, { field: 'new' })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.json.field).to.eq('new');
      });
  });

  // Nagłówek standardowy
  it('Nagłówek standardowy', () => {
    cy.request({
      method: 'GET',
      url: `${BASE_URL}/headers`,
      headers: {
        'User-Agent': 'MySimpleTest'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.headers['User-Agent']).to.eq('MySimpleTest');
    });
  });

  // Nagłówek niestandardowy
  it('Nagłówek niestandardowy', () => {
    cy.request({
      method: 'GET',
      url: `${BASE_URL}/headers`,
      headers: {
        'X-Test': 'CustomHeader'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.headers['X-Test']).to.eq('CustomHeader');
    });
  });

  // Struktura odpowiedzi
  it('Struktura odpowiedzi', () => {
    cy.request(`${BASE_URL}/get`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('url');
        expect(response.body).to.have.property('headers');
      });
  });

  // Pomiar czasu odpowiedzi
  it('Pomiar czasu odpowiedzi', () => {
    const start = Date.now();

    cy.request(`${BASE_URL}/delay/1`).then((response) => {
      const end = Date.now();
      const time = (end - start) / 1000; // w sekundach

      expect(response.status).to.eq(200);
      expect(time).to.be.gte(1);
    });
  });

  // Test różnych kodów statusu
  it('Status 404', () => {
    cy.request({
      method: 'GET',
      url: `${BASE_URL}/status/404`,
      failOnStatusCode: false // nie przerywa testu mimo błędu
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});