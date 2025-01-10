require('dotenv').config();

const {setupBrowserAndPage} = require('./instance/browser');
const {login} = require('./auth/login');
const { getFreeProxy } = require('./instance/proxy');

async function main() {
    // const proxy = await getFreeProxy();

    const {browser,page} = await setupBrowserAndPage();
    await login(page, process.env.USER1_EMAIL, process.env.USER1_PASSWORD);
}



main();




