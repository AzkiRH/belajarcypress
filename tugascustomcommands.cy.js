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
            cy.visit('http://zero.webappsecurity.com/login.html')
            cy.login(username, password)
        })
    
    it('Should display online banking content', () => {
            cy.contains('onlineBankingMenu').click()
            cy.url().should('include', 'online-banking.html')
            cy.get('h1').should('be.visible')
            cy.get('.row').should('be.visible')
        })

    it('Should display pay bills content', () => {
            cy.contains('pay_bills_link').click()
            cy.url().should('include', 'bank/pay-bills.html')
            cy.get('h2').should('be.visible')
            cy.get('.row').should('be.visible')
        })
    })
})