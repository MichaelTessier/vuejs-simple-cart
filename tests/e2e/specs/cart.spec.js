// https://docs.cypress.io/api/introduction/api.html

describe('Cart test', () => {
  it('Add Product', () => {
    cy.visit('/')

    cy
      .contains('.co-button', 'Add to cart')
      .then((btn) => {
        btn.click().click()
      })

    cy.visit('/cart')

    cy.contains('.co-badge', '2')

    cy
      .contains('.co-button', 'Remove to cart')
      .then((btn) => {
        btn.click().click()
      })

    cy.contains('.co-alert', 'Your cart is empty')
 
  });


});
