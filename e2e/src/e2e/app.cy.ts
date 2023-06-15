describe('firebase-example', () => {
  beforeEach(() => cy.visit('/'));

  it('header render', () => {
    cy.get('header').should('exist')
  });
  it('footer render', () => {
    cy.get('footer').should('exist')
  });
});
