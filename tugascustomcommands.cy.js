/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    })

    it('Should try to login', () => {
        cy.fixture('user').then(user => {
            const username = user.user
            const password = user.password
            cy.login(username, password)
            cy.url().should('include', 'account-summary.html')
        })
    })
    
    it('Should display pay bills content', () => {
            cy.contains('bank/redirect.html?url=pay-bills.html').click()
            cy.url().should('include', 'bank/pay-bills.html')
            cy.get('h2').should('be.visible')
            cy.get('.row').should('be.visible')
        })
    })
