import Authentication from '../pages/authentication.page'
import AddToCart from '../pages/addtocart.page'
import Checkout from '../pages/checkout.page'
import { should } from 'chai'

describe('Checkout', () => {
	beforeEach(() => {
			cy.visit('/')
		})



		it('Add Billing Information', () => {

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
			cy.get(Checkout.country).select('Japan')
			cy.get(Checkout.province).type(BillingData.valid.Province)
			cy.get(Checkout.zipCode).type(BillingData.valid.ZipCode)
			cy.get(Checkout.paymentBtn).click()
			cy.get(Checkout.paymentHeader).scrollIntoView()
			cy.get(Checkout.paymentHeader).should('be.visible')


	})

	it('Purchase a product', () => {

			// Login with valid credentials
			cy.get('#signInOrRegister').should('be.visible')
			cy.get('#signInOrRegister').click()
      Authentication.login('marsenal2@yopmail.com', 'Password123!')

			//Add a product to the cart
			AddToCart.addToCart()

       //Navigate to checkout
			cy.get(Checkout.checkoutBtn).scrollIntoView()
			cy.wait(1500)
	    cy.get(Checkout.checkoutBtn).should('be.visible')
	    cy.get(Checkout.checkoutBtn).click()

			//Enter Billing Information
			Checkout.checkOut()

			//Enter payment information and checkout
			cy.get(Checkout.paymentBtn).click()
			cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type('4242 4242 4242 4242')
			cy.iframe('.snipcart-payment-card-form iframe').find('#expiry-date').type('1129')
			cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type('123')
			cy.get(Checkout.placeOrder).click()

			//View invoice
			cy.get(Checkout.invoice).should('be.visible')
			cy.get(Checkout.invoice)should('have.text',"Thank you for your order")

	})


	it('Omit Email Address from Billing Information', () => {

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


		//Navigate to checkout
		cy.get(Checkout.checkoutBtn).scrollIntoView()
			 cy.wait(1500)
		cy.get(Checkout.checkoutBtn).should('be.visible')
		cy.get(Checkout.checkoutBtn).click()

		//Enter billing information without email address
		cy.get(Checkout.fullName).type(BillingData.missingemail.fullname)
		cy.get(Checkout.streetAddress).type(BillingData.missingemail.streetaddress)
		cy.get(Checkout.aptNumber).type(BillingData.missingemail.Apt)
		cy.get(Checkout.city).type(BillingData.missingemail.City)
		cy.get(Checkout.country).select('France')
		cy.get(Checkout.province).type(BillingData.missingemail.Province)
		cy.get(Checkout.zipCode).type(BillingData.missingemail.ZipCode)
		cy.get(Checkout.paymentBtn).click()
		cy.get(Checkout.emailError).scrollIntoView()
		cy.get(Checkout.emailError).should('be.visible')

		})





})




