class Checkout{

	get checkoutBtn () { return ('.snipcart-base-button__wrapper')}
	get fullName () { return ('input[name="name"]')}
	get emailAddress () { return ('input[name="email"]')}
	get streetAddress () { return ('.snipcart-form__address-autocomplete > :nth-child(2)')}
	get aptNumber () { return ('input[name="address2"]')}
	get city () { return ('input[name="city"]')}
	get country () { return ('select[name="country"]')}
	get selectJapan () { return ('option[value="JP"]')}
	get selectFrance () { return ('option[value="FR"]')}
	get selectNamibia () { return ('option[value="NA"]')}
	get selectBrazil () { return ('option[value="BR"]')}
	get province () { return ('#province_0a035637-21f2-4cef-8719-9a0999b1180c')}
	get zipCode () { return ('#postalCode_0a035637-21f2-4cef-8719-9a0999b1180c')}
	get paymentBtn () { return ('button[type="submit"]')}









 addToCart(){
 cy.get(this.heelsAddToCart).scrollIntoView()
     cy.wait(1500)
 cy.get(this.heelsAddToCart).click()

 }


}

export default new Checkout()