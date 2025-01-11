require('dotenv').config();

const {setupBrowserAndPage} = require('./instance/browser');
const {login} = require('./auth/login');
const { getFreeProxy } = require('./instance/proxy');
const UserAgent = require('user-agents');
const ua = new UserAgent({ deviceCategory: "desktop" });
const newUserAgent = ua.userAgent;

async function main() {
    // const proxy = await getFreeProxy();
    // console.log(proxy);

    const {browser,page, proxyData} = await setupBrowserAndPage();
    await page.authenticate({
        username: proxyData.username,
        password: proxyData.password
    });
    // console.log(proxyData);
    await page.setUserAgent(newUserAgent);
    await login(page, process.env.USER1_EMAIL, process.env.USER1_PASSWORD);
}



main();




