class Cart{

	get cartBtn () { return ('#top-cart')}
	get deleteProduct() { return ('[title="Remove item"]')}


	cartDetails(){
		cy.get(this.cartBtn).scrollIntoView()
				cy.wait(1500)
		cy.get(this.cartBtn).click()

		}
}



export default new Cart()