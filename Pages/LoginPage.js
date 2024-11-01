// pages/LoginPage.js
const { test, expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {

        this.page = page;

        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.btnlogin= page.locator('#login-button');
        this.title = page.locator('.login_logo');
        this.btnlogout = page.locator("//a[@id='logout_sidebar_link']");
        this.menu = page.locator("//button[@id='react-burger-menu-btn']");
    }

    async URL() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async validateTitle(expectedTitle) {
        await expect(this.title).toHaveText(expectedTitle);
        console.log('Validate Swag Lab Title ')
    }

    async validateLoginButton() {
        const buttonText = await this.btnlogin.textContent();
        expect(buttonText).toBe(buttonText.toUpperCase());
        console.log('Validate Login Button is Upper Case')
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.btnlogin.click();
        console.log('Validate Sign In successfully')
    }

    async logout(){

        await this.menu.click();
        await this.btnlogout.click();

    }
}
module.exports = { LoginPage } ;
