class Cart{

	get cartBtn () { return ('#top-cart')}
	get deleteProduct() { return ('[title="Remove item"]')}
	get quantityIncrease() { return ('[title="Increment quantity"]')}
	get productQuantity() { return ('span[class="snipcart__font--secondary snipcart__font--regular"]')}



	cartDetails(){
		cy.get(this.cartBtn).scrollIntoView()
				cy.wait(1500)
		cy.get(this.cartBtn).click()

		}
}



export default new Cart()