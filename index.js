require('dotenv').config();

const {setupBrowserAndPage} = require('./instance/browser');
const {login} = require('./auth/login');
const { getFreeProxy } = require('./instance/proxy');
const UserAgent = require('user-agents');
const { navigateToSearchInfoFromHome } = require('./pages/navigate');
const { getAllSearchespage } = require('./parsers/searchPagesInfo');
const ua = new UserAgent({ deviceCategory: "desktop" });
const newUserAgent = ua.userAgent;

async function main() {

    const {browser,page, proxyData} = await setupBrowserAndPage();
    await page.authenticate({
        username: proxyData.username,
        password: proxyData.password
    });
    // console.log(proxyData);
    await page.setUserAgent(newUserAgent);
    await login(page, process.env.USER1_EMAIL, process.env.USER1_PASSWORD);
    console.log('Logged in state')
    await navigateToSearchInfoFromHome(page);
    let seachLinks = await getAllSearchespage(page, 3);
    for (const link of seachLinks) {
        
    }
}



main();




