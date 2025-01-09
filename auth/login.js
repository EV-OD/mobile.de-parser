
require('dotenv').config();
const puppeteer = require('puppeteer');
const { pageDetail } = require('../constants');
const { sleep } = require('../utils/sleep');


async function login(page, email, password) {
    const loginParserDetail = pageDetail.login;
    await page.goto(loginParserDetail.url);
    
    await page.locator(loginParserDetail.cookieSelector).click()

    console.log(email, password)
    await sleep(1000);
    
    // await page.locator(loginParserDetail.emailSelector).fill(email);
    await page.waitForSelector(loginParserDetail.emailSelector);
    await page.type(loginParserDetail.emailSelector, email);
    await sleep(1000);

    await page.locator(loginParserDetail.passwordSelector).fill(password);

    await sleep(1000);

    // await page.locator(loginParserDetail.submitSelector).click();
    // await page.waitForNavigation();
    console.log("Logged in");

}


module.exports = {
    login
}
