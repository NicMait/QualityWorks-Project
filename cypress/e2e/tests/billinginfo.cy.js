import Authentication from '../pages/authentication.page'
import AddToCart from '../pages/addtocart.page'
import Cart from '../pages/cart.page'
import Checkout from '../pages/checkout.page'
import BillingData from '../data/billing.data'


describe('Data Driven Billing Information', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Add Complete Billing Information', () => {

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
			// cy.get(AddToCart.backToShopping).should('be.visible')
    	// cy.get (AddToCart.backToShopping).click()

			// //Navigate to cart
      // Cart.cartDetails()

			//Navigate to checkout
			cy.get(Checkout.checkoutBtn).scrollIntoView()
			   cy.wait(1500)
			cy.get(Checkout.checkoutBtn).should('be.visible')
			cy.get(Checkout.checkoutBtn).click()

			//Enter billing information
      cy.get(Checkout.fullName).type(BillingData.valid.fullname)
			cy.get(Checkout.emailAddress).type(BillingData.valid.email)
			cy.get(Checkout.streetAddress).type(BillingData.valid.streetaddress)
			cy.get(Checkout.aptNumber).type(BillingData.valid.Apt)
			cy.get(Checkout.city).type(BillingData.valid.City)
			cy.get(Checkout.country).select()
			cy.get(Checkout.selectJapan).select()



	 })

	})