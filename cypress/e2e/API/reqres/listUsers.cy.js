// cypress/e2e/reqres_api.cy.js
describe('REQRES API Test', () => {
  it('GET list users', () => {
    cy.request('https://reqres.in/api/users?page=2').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.not.be.null
    });
  });
});