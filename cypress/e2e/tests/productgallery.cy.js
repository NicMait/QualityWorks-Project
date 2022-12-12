{/* <reference types="cypress" /> */}
import Authentication from '../pages/authentication.page'
import Gallery from '../pages/productgallery.page'
import AddToCart from '../pages/addtocart.page'



describe('Add To Cart', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it.skip('View Product Details', () => {

			// Login with valid credentials
			cy.get('#signInOrRegister').should('be.visible')
			cy.get('#signInOrRegister').click()
      Authentication.login('marsenal2@yopmail.com', 'Password123!')

			//View product details
		  cy.get(Gallery.vneckDetails).click()
			cy.url().should('contain', 'quality-tshirt-vneck')
		  cy.get(Gallery.vneckHeader).should('be.visible')

})

it('Increase Product Quantity', () => {

	// Login with valid credentials
	cy.get('#signInOrRegister').should('be.visible')
	cy.get('#signInOrRegister').click()
	Authentication.login('marsenal2@yopmail.com', 'Password123!')

	//Increase the quantity of a product
  cy.get(Gallery.productIncrease).should('be.visible')
	cy.get(Gallery.productIncrease).click()
  cy.get(Gallery.clickArea).click()

	//Add to cart to confirm that the quantity
  cy.get(Gallery.hoodyAddToCart).scrollIntoView()
			cy.wait(1500)
	cy.get(Gallery.hoodyAddToCart).click()
  cy.get(AddToCart.cartSummary).should('be.visible')
	cy.get(AddToCart.cartSummary).should('have.text',' Cart summary ')
	cy.get(Gallery.cartQuantity).should('have.text'," 2 ")
})





})