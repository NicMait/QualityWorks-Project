import Authentication from '../pages/authentication.page'
import AddToCart from '../pages/addtocart.page'
import Cart from '../pages/cart.page'

describe('Cart', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('View products in cart', () => {

			// Login with valid credentials
			cy.get('#signInOrRegister').should('be.visible')
			cy.get('#signInOrRegister').click()
      Authentication.login('marsenal2@yopmail.com', 'Password123!')

			//Add products to the cart
			AddToCart.addToCart()
	    cy.get(AddToCart.backToShopping).should('be.visible')
    	cy.get (AddToCart.backToShopping).click()
	    AddToCart.addToCartTwo()
	    cy.get(AddToCart.cartSummary).should('be.visible')
      cy.get(AddToCart.cartSummary).should('have.text',' Cart summary ')
			cy.get(AddToCart.backToShopping).should('be.visible')
    	cy.get (AddToCart.backToShopping).click()

			//Navigate to cart
      Cart.cartDetails()
	})


	it.only('Delete a product from cart', () => {

		// Login with valid credentials
		cy.get('#signInOrRegister').should('be.visible')
		cy.get('#signInOrRegister').click()
		Authentication.login('marsenal2@yopmail.com', 'Password123!')

		//Add a product to the cart
		AddToCart.addToCart()
		cy.get(AddToCart.backToShopping).should('be.visible')
		cy.get (AddToCart.backToShopping).click()

		//Navigate to cart
		Cart.cartDetails()

	// Remove a product from the cart
    cy.get(Cart.deleteProduct).click()
		cy.get(Gallery.cartQuantity).should('have.text'," 2 ")




	})

	})