
require('dotenv').config();
const puppeteer = require('puppeteer');
const { pageDetail } = require('../constants');
const { sleep } = require('../utils/sleep');


async function login(page, email, password) {
    const loginParserDetail = pageDetail.login;
    
    // Navigate to the login page
    await page.goto(loginParserDetail.url);
    
    // Click cookie button
    await page.locator(loginParserDetail.cookieSelector).click();
    
    console.log('Cookie consent clicked');
    console.log('Email:', email, 'Password:', password);

    // Wait for the email field to be visible
    await page.waitForSelector(loginParserDetail.emailSelector);
    
    // Type into the email field
    // await page.locator(loginParserDetail.emailSelector).click(); // Ensure focus
    // await sleep(1000);
    // await page.locator(loginParserDetail.emailSelector).fill(email); // Fill the field
    // await sleep(1000);

    await page.evaluate((email, password) => {
        document.querySelector("#login-username").value = email;
        document.querySelector("#login-password").value = password;
        return true;
    }, email, password);

    console.log('Email filled');

    // Wait for the password field and fill it
    // await page.waitForSelector(loginParserDetail.passwordSelector);
    // await page.locator(loginParserDetail.passwordSelector).fill(password);
    await sleep(1000);


    // Click the submit button and wait for navigation
    await page.locator(loginParserDetail.submitSelector).click();
    await page.waitForNavigation();
    
    console.log('Logged in');
}



module.exports = {
    login
}
