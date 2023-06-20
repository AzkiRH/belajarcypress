/// <reference types="cypress" />

describe('Login test', () => {
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_logo').should('contain.text', 'Swag Labs')
    })

    it('Should fill username', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')
    })

    it('Should fill password', () => {
        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')
    })

    it('Should click login button', () => {
        cy.get('#login-button').click()
        cy.url().should('include', 'inventory.html')
    })
})

describe('Products', () => {
    it('Should click one of the products', () => {
        cy.get('#item_4_title_link').click()
        cy.get('.inventory_details_img').should('be.visible')
    })
})

describe('Cart System Products', () => {
    it('Should be able to input products to cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()

    it('System should be able to input multiple products to cart', () => {
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('.inventory_item_desc').should('be.visible')
    })
    })

    it('Products should be able on the cart page', () => {
        cy.get('.shopping_cart_link').click()
        cy.get('.inventory_item_name').should('be.visible')
    })

    it('Products should can remove from cart page', () => {
        cy.get('#remove-sauce-labs-backpack').click
    })

    it('Should be able to continue shopping', () => {
        cy.get('#continue-shopping').click()
        cy.url().should('include', 'inventory.html')
    })

})