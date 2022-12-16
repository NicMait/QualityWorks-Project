import Authentication from '../pages/authentication.page'
import Contact from '../pages/contact.page'


describe('Contact', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Send a message', () => {

			// Login with valid credentials
			cy.get(Authentication.signInRegisterBtn).should('be.visible')
			cy.get(Authentication.signInRegisterBtn).click()
      Authentication.login('marsenal2@yopmail.com', 'Password123!')

			//Navigate to contact
			cy.get(Contact.contactBtn).click()

			//Enter message details
			Contact.enterMessage()

			//Send message
			cy.get(Contact.sendMessage).click()
			cy.get(Contact.confirmation).should('be.visible')
			cy.get(Contact.confirmation).should('have.text','Message Sent!Your message has been sent!')

   })

	 it('Input invalid email', () => {

		// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
		Authentication.login('marsenal2@yopmail.com', 'Password123!')

		//Navigate to contact
		cy.get(Contact.contactBtn).click()

		//Enter message details
    cy.get(Contact.firstName).type('Levi')
		cy.get(Contact.lastName).type('Morgan')
		cy.get(Contact.emailAddress).type('invalid@com')
		cy.get(Contact.subject).type('This is a test')
		cy.get(Contact.message).type('It is a test.')

		//Send message
		cy.get(Contact.sendMessage).click()
		cy.get(Contact.emailError).should('be.visible')
		cy.get(Contact.emailError).should('have.text',"Email is invalid")



	 })

	 it.only('Submit empty message', () => {

		// Login with valid credentials
		cy.get(Authentication.signInRegisterBtn).should('be.visible')
		cy.get(Authentication.signInRegisterBtn).click()
		Authentication.login('marsenal2@yopmail.com', 'Password123!')

		//Navigate to contact
		cy.get(Contact.contactBtn).click()
	  cy.get(Contact.sendMessage).click()
		cy.get(Contact.firstNameError).should('be.visible')
		cy.get(Contact.firstNameError).should('have.text',"Field is required!")
		cy.get(Contact.lastNameError).should('be.visible')
		cy.get(Contact.lastNameError).should('have.text',"Field is required!")
		cy.get(Contact.emailAddError).should('be.visible')
		cy.get(Contact.emailAddError).should('have.text',"Field is required!")
		cy.get(Contact.subjectError).should('be.visible')
		cy.get(Contact.subjectError).should('have.text',"Field is required!")
		cy.get(Contact.messageError).should('be.visible')
		cy.get(Contact.messageError).should('have.text',"Field is required!")

	 })


	})
