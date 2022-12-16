import Authentication from '../pages/authentication.page'

describe('Authentication', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Should log in a valid user', () => {
			// Login with valid credentials
			cy.get('#signInOrRegister').should('be.visible')
			cy.get('#signInOrRegister').click()
			cy.get('[type=email]').type('marsenal2@yopmail.com');
			cy.get('[type=password]').type('Password123!')
			cy.get(Authentication.submitBtn).should('be.visible')
			cy.get(Authentication.submitBtn).click()
			cy.get (Authentication.banner).should('be.visible')
			cy.get (Authentication.banner).should('have.text', "Products")

	})

	it('Log in with invalid email', () => {
		// Login with valid credentials
		cy.get('#signInOrRegister').should('be.visible')
		cy.get('#signInOrRegister').click()
		cy.get('[type=email]').type('wetest22@yopmail.com');//email not registered
		cy.get('[type=password]').type('notTrue123!')
		cy.get(Authentication.submitBtn).should('be.visible')
		cy.get(Authentication.submitBtn).click()
		cy.get (Authentication.errorMsg).should('be.visible')
		cy.get (Authentication.errorMsg).should('have.text','Wrong email or password.')
	})


})