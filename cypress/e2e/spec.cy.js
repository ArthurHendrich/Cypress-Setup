describe('My first test', () => {
  it('Visists the Kitchen Sink', () => {
    cy.visit('/')

    cy.contains('type').click() // find a element by a name

    cy.url().should('include', '/commands/actions') // include 'commands/actions' in the url

    cy.get('.action-email') // find a element by a class name
      .type('fake@email.com') // type in the element
      .should('have.value', 'fake@email.com') //  check if the value is equal to 'fake@email.com'


  })
})