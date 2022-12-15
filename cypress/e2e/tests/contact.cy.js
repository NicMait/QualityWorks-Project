import Authentication from '../pages/authentication.page'



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

	})
