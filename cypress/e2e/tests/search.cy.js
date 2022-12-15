import Authentication from '../pages/authentication.page'
import Search from '../pages/search.page'


describe('Search', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Should return exact results for a full name search', () => {

			// Login with valid credentials
			cy.get('#signInOrRegister').should('be.visible')
			cy.get('#signInOrRegister').click()
      Authentication.login('marsenal2@yopmail.com', 'Password123!')

			//Search for the product "Red Couch"

			cy.get(Search.searchBar).type('Red Couch')
			cy.get(Search.redCouch).should('be.visible')
			cy.get(Search.redCouch).should('have.text','Red Couch')

		
   })


	it('Should return correct results for a partial name search', () => {

		// Login with valid credentials
		cy.get('#signInOrRegister').should('be.visible')
		cy.get('#signInOrRegister').click()
		Authentication.login('marsenal2@yopmail.com', 'Password123!')

		//Search for "pants"

		cy.get(Search.searchBar).type('Pants')
		cy.get(Search.pinkPants).should('be.visible')
		cy.get(Search.cargoPants).should('be.visible')
		cy.get(Search.jeansPants).should('be.visible')

  })

	it.only('Should reset the search filter', () => {

		// Login with valid credentials
		cy.get('#signInOrRegister').should('be.visible')
		cy.get('#signInOrRegister').click()
		Authentication.login('marsenal2@yopmail.com', 'Password123!')

		//Search for "Red Couch"
    cy.get(Search.searchBar).type('Red Couch')
		cy.get(Search.redCouch).should('be.visible')
		cy.get(Search.redCouch).should('have.text','Red Couch')

		//Reset the search
		cy.get(Search.resetBtn).click()
		cy.get(Search.allProducts).should('be.visible')
		cy.get(Search.allProducts).should('have.length',22)



  })



})