// cypress/e2e/reqres_api.cy.js
describe('REQRES API Test', () => {
  it('GET singleUserNotFound', () => {
    cy.request('https://reqres.in/api/users/23').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.not.be.null
    });
  });
});