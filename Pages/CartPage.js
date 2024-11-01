const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {

        this.page = page;

        this.carticon = page.locator('.shopping_cart_link');
        this.cartItems = page.locator('.cart_item');
        this.btncontinueShopping= page.locator('#continue-shopping');
    }

    async goToCart() {
        await this.carticon.click();
        console.log('Validate GOTO Chart')
    }

    async validateAddedProductCount(expectedCount) {
        await expect(this.cartItems).toHaveCount(expectedCount);
        console.log(expectedCount)
    }

    async continueShopping() {
        await this.btncontinueShopping.click();
        console.log('Validate Continue shopping')
    }
}
module.exports = { CartPage };