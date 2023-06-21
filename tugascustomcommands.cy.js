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
            cy.url().should('include', 'account-summary.html')
        })
    })

    /// it('Should enter to the online banking page', () => {
        /// cy.get('#onlineBankingMenu').click()
        /// cy.url().should('include', 'online-banking.html')
    /// })
    
    it('Should enter to display pay bills content', () => {
            cy.get('#pay_bills_tab').click()
            cy.paybills()
        })
    })
