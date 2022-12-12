class AddToCart{

	get heelsAddToCart () { return (':nth-child(16) > #add-to-cart')}
  get jeansAddToCart () { return (' div:nth-child(2) > div:nth-child(3) > div:nth-child(13) > button:nth-child(3)')}
	get cart () { return ('.snipcart-cart__content')}
	get cartSummary () {return ('.snipcart-cart-header__title')}
	get cartTotal () { return ('.snipcart-summary-fees__amount.snipcart-summary-fees__amount--highlight.snipcart__font--large')}
	get backToShopping () { return ('.snipcart-modal__close-title')}


 addToCart(){
 cy.get(this.heelsAddToCart).scrollIntoView()
     cy.wait(1500)
 cy.get(this.heelsAddToCart).click()

 }

 addToCartTwo(){
	cy.get(this.jeansAddToCart).scrollIntoView()
			cy.wait(1500)
	cy.get(this.jeansAddToCart).click()



}

}



export default new AddToCart()