{/* <reference types="cypress" /> */}
import Authentication from '../pages/authentication.page'
import Gallery from '../pages/productgallery.page'
import AddToCart from '../pages/addtocart.page'



describe('Add To Cart', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('View Product Details', () => {

			// Login with valid credentials
			cy.get('#signInOrRegister').should('be.visible')
			cy.get('#signInOrRegister').click()
      Authentication.login('marsenal2@yopmail.com', 'Password123!')

			//View product details
		  cy.get(Gallery.vneckDetails).click()
			cy.url().should('contain', 'quality-tshirt-vneck')
		  cy.get(Gallery.vneckHeader).should('be.visible')

})

<<<<<<< HEAD
it('Should increase the quantity of a product', () => {
=======
it('Increase Product Quantity', () => {
>>>>>>> 5d1f561c508612563ff0ac9bcf32696937712442

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

<<<<<<< HEAD
it ('Should sign out from the product gallery page', () => {
=======
it.only('Sign out from the home page', () => {
>>>>>>> 5d1f561c508612563ff0ac9bcf32696937712442

	// Login with valid credentials
	cy.get('#signInOrRegister').should('be.visible')
	cy.get('#signInOrRegister').click()
	Authentication.login('marsenal2@yopmail.com', 'Password123!')

	//Sign out from the home page/product gallery
  cy.get(Gallery.logOut).should('be.visible')
	cy.get(Gallery.logOut).click()
	cy.get(Authentication.signInRegisterBtn).should('be.visible')


  })
})