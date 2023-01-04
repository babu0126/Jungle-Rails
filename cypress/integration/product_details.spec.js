/// <reference types="cypress" />

describe('example to-do app', () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
  it("successfully loads to the Scented Blade product", () => {
    cy.visit("/products/2");
  });

});