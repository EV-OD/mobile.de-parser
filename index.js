require('dotenv').config();
const puppeteer = require('puppeteer');

const {setupBrowserAndPage} = require('./instance/browser');
const {login} = require('./auth/login');

async function main() {
    const {page} = await setupBrowserAndPage();
    await login(page, process.env.USER1_EMAIL, process.env.USER1_PASSWORD);
}

main();




