import Authentication from '../pages/authentication.page'
import AddToCart from '../pages/addtocart.page'


describe('Add To Cart', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Add a single item to cart', () => {

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

it('Add an item to cart from the product details page', () => {

	// Login with valid credentials
	cy.get('#signInOrRegister').should('be.visible')
	cy.get('#signInOrRegister').click()
	Authentication.login('marsenal2@yopmail.com', 'Password123!')

	//Select a product to view
	cy.get (AddToCart.mugDetails).click()
	cy.url().should('contain', 'quality-mug')

	//Add the product to cart
  cy.get(AddToCart.mugAddToCart).should('be.visible')
	   cy.wait(1500)
	cy.get(AddToCart.mugAddToCart).click()
	cy.get(AddToCart.cartSummary).should('be.visible')
	cy.get(AddToCart.cartSummary).should('have.text',' Cart summary ')


   })

})