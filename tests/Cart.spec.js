// tests/Cart.spec.js
const { test } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage')
const { HomePage } = require('../Pages/HomePage');
const { CartPage } = require('../Pages/CartPage');
const userData = require('../userData.json');

test.describe('Cart Tests', () => {
    let loginPage, homePage, cartPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        cartPage = new CartPage(page);
        
        await loginPage.URL();
        await loginPage.login(userData.username, userData.password);
    });

    test('Verify add products in cart and validate the count', async () => {
        await homePage.addFirstProductToCart();
        await homePage.validateCartBadge(1);
        await homePage.addLastProductToCart();
        await homePage.validateCartBadge(2);
        await homePage.removeFirstProductFromCart();
        await homePage.validateCartBadge(1);
    });

    test('Verify cart content and continue shopping', async () => {
        await homePage.addFirstProductToCart();
        await cartPage.goToCart();
        await cartPage.validateAddedProductCount(1);
        await cartPage.continueShopping();
    });


    test('Verify change price filter from low to hight and default filter is A to Z', async () => {
    await homePage.validateDefaultFilter('az');
    await homePage.changePriceFilter('lohi');
    });


    test.afterEach(async ({page}) => {

        loginPage = new LoginPage(page);
            
        await loginPage.logout();
    });

});
