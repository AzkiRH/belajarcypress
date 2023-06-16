describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
          .type('azkirh19@gmail.com')
          .should('have.value', 'azkirh19@gmail.com')
    })
})