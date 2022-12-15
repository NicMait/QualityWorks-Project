import Authentication from '../pages/authentication.page'


describe('Filter and Sort', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Should sort product list from A to Z', () => {

			// Login with valid credentials
			cy.get('#signInOrRegister').should('be.visible')
			cy.get('#signInOrRegister').click()
      Authentication.login('marsenal2@yopmail.com', 'Password123!')

			//sort products from A to Z
			cy.get('#sort').scrollIntoView()
			   cy.wait(3000)
			cy.get('#sort').select('A to Z')

			var productList = ['Dell Laptop','Gray Couch','HP Laptop','Mackbook Pro','Quality Blue Shoes','Quality Cargo Pants','Quality Fitted Hat',
			                  'Quality Heal Shoes','Quality Hooded Sweatshirt','Quality Jeans Pants','Quality Kids Tshirt','Quality Mousepad','Quality Mug',
												'Quality Pillow','Quality Pink Pants','Quality Stylish Shoes','Quality Sweatshirt','Quality Trucker Hat','Quality Tshirt',
												'Quality Vneck','Red Couch','White Couch']
        productList.sort()

        cy.get('.css-1n64n71').each(($elem, index) => {
            expect($elem.text()).equal(productList[index])
        })
    })



})