// tests/Login.spec.js
const { test } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const userData = require('../userData.json');

test('Login Tests', async({page}) =>{


        const loginPage = new LoginPage(page);
        await loginPage.URL();

        await loginPage.validateTitle('Swag Labs');
        await loginPage.validateLoginButton();
        await loginPage.login(userData.username, userData.password);
        
        
  
});
