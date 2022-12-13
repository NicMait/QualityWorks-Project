import Authentication from '../pages/authentication.page'
import AddToCart from '../pages/addtocart.page'
import Cart from '../pages/cart.page'

describe('Authentication', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Delete a product from cart', () => {

			// Login with valid credentials
			cy.get('#signInOrRegister').should('be.visible')
			cy.get('#signInOrRegister').click()
      Authentication.login('marsenal2@yopmail.com', 'Password123!')

			//Add products to the cart
			AddToCart.addToCart()
			AddToCart.addToCartTwo()

			//Navigate to cart
			cy.get(Cart.cartBtn).should('be.visible')
			cy.get(Cart.cartBtn).click()

	})

	})