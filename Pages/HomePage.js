// pages/HomePage.js
const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;

        this.filterDropdown = page.locator('.product_sort_container');
        this.firstProductAddToCart = page.locator('.inventory_item button').first();
        this.lastProductAddToCart = page.locator('.inventory_item button').last();
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async validateDefaultFilter(expectedFilter) {
        await expect(this.filterDropdown).toHaveValue(expectedFilter);
        console.log('Validate default Filter Dropdown A to Z')
        
    }

    async addFirstProductToCart() {
        await this.firstProductAddToCart.click();
        console.log('Validate Add first Product to the cart')
    }

    async addLastProductToCart() {
        await this.lastProductAddToCart.click();
        console.log('Validate Add Last Product to the cart')
    }

    async removeFirstProductFromCart() {
        await this.firstProductAddToCart.click();
        console.log('Validate Remove first Product to the cart')
    }

    async validateCartBadge(expectedCount) {
        await expect(this.cartBadge).toHaveText(expectedCount.toString());
        console.log(expectedCount)
    }

    async changePriceFilter(optionValue) {
        await this.filterDropdown.selectOption(optionValue);
        console.log('Validate Change price filter from low to High')
    }

    async validatePriceSorting() {
       
    }
}
module.exports = { HomePage };
