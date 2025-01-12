require('dotenv').config();
const puppeteer = require('puppeteer');
const { pageDetail } = require('../constants');
const { sleep } = require('../utils/sleep');
const { startLogging } = require('../dev/interceptor');

async function login(page, email, password) {
    const loginParserDetail = pageDetail.login;

    // Navigate to the login page
    await page.goto(loginParserDetail.url);

    // Add a slight delay to mimic a human's hesitation
    await sleep(Math.random() * 1000 + 1000);
    // await sleep(100000000);

    // Click cookie button
    await page.waitForSelector(loginParserDetail.cookieSelector);
    await page.hover(loginParserDetail.cookieSelector); // Hover before clicking
    // await sleep(Math.random() * 500 + 500); // Delay before clicking
    await page.locator(loginParserDetail.cookieSelector).click();

    console.log('Cookie consent clicked');
    console.log('Email:', email, 'Password:', password);



    // // Wait for the email field to be visible
    // await page.waitForSelector(loginParserDetail.passwordSelector);

    // // Simulate focusing on the email field
    // await page.hover(loginParserDetail.passwordSelector);
    // await sleep(Math.random() * 500 + 500);
    // await page.locator(loginParserDetail.passwordSelector).click();
    // await sleep(Math.random() * 1000 + 5000); // Pause to simulate typing delay

    // // Simulate typing email with delays between keystrokes
    // await page.type(loginParserDetail.passwordSelector, password, { delay: Math.random() * 100 + 50 });
    // await sleep(Math.random() * 1000 + 500); // Pause between email and password

    // // Simulate typing password with delays
    // await page.type(loginParserDetail.emailSelector, email, { delay: Math.random() * 100 + 50 });



    // Wait for the email field to be visible
    await page.waitForSelector(loginParserDetail.emailSelector);

    // Simulate focusing on the email field
    await page.hover(loginParserDetail.emailSelector);
    await sleep(Math.random() * 500 + 500);
    await page.locator(loginParserDetail.emailSelector).click();
    await sleep(Math.random() * 1000 + 5000); // Pause to simulate typing delay

    // Simulate typing password with delays between keystrokes
    await page.type(loginParserDetail.passwordSelector, password, { delay: Math.random() * 100 + 50 });
    await sleep(Math.random() * 1000 + 500); // Pause between email and password

    // Simulate typing email with delays
    await page.type(loginParserDetail.emailSelector, email, { delay: Math.random() * 100 + 50 });

    console.log('Email and Password filled');

    // Add a pause before clicking the submit button
    await sleep(Math.random() * 1000 + 1000);

    // Hover over the submit button before clicking
    await page.hover(loginParserDetail.submitSelector);
    await sleep(Math.random() * 500 + 500); // Pause before clicking
    await page.locator(loginParserDetail.submitSelector).click();

    // Wait for navigation
    await page.waitForNavigation();

    console.log('Logged in');
}

module.exports = {
    login
}
