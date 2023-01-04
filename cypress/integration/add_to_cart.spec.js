/// <reference types="cypress" />

describe('example to-do app', () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
  it("successfully clicks to add ", () => {
    cy.get(':nth-child(1) > div > .button_to > .btn').click({force: true});
  });
  it("There are 1 item added to the cart", () => {
    cy.get('.nav-cart').should('contain', 'My Cart (1)');
  });

});