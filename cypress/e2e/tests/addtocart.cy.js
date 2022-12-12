import Authentication from '../pages/authentication.page'
import AddToCart from '../pages/addtocart.page'


describe('Add To Cart', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it.skip('Add a single item to cart', () => {

			// Login with valid credentials
			cy.get('#signInOrRegister').should('be.visible')
			cy.get('#signInOrRegister').click()
      Authentication.login('marsenal2@yopmail.com', 'Password123!')

			//Add a product to cart
			AddToCart.addToCart()
			cy.get(AddToCart.cartSummary).should('be.visible')
			cy.get(AddToCart.cartSummary).should('have.text',' Cart summary ')

})

it('Add multiple items to cart', () => {

	// Login with valid credentials
	cy.get('#signInOrRegister').should('be.visible')
	cy.get('#signInOrRegister').click()
	Authentication.login('marsenal2@yopmail.com', 'Password123!')

	//Add a product to cart
	AddToCart.addToCart()
	cy.get(AddToCart.backToShopping).should('be.visible')
	cy.get (AddToCart.backToShopping).click()

	//Add another item to cart
	AddToCart.addToCartTwo()
	cy.get(AddToCart.cartSummary).should('be.visible')
	cy.get(AddToCart.cartSummary).should('have.text',' Cart summary ')

})




})