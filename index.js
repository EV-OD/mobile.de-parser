require('dotenv').config();

const {setupBrowserAndPage} = require('./instance/browser');
const {login} = require('./auth/login');
const { getFreeProxy } = require('./instance/proxy');
const UserAgent = require('user-agents');
const { navigateToSearchInfoFromHome, navigateToEachSearchFilter } = require('./pages/navigate');
const { getAllSearchespage, pageInfo } = require('./parsers/searchPagesInfo');
const { isUserDataPresent } = require('./userData/utils');
const { saveJson } = require('./utils/helpers');
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
    // if(!isUserDataPresent){
        // await login(page, process.env.USER1_EMAIL, process.env.USER1_PASSWORD);
        // console.log('Logged in state')
        // await navigateToSearchInfoFromHome(page);
    // }else{
        page.goto('https://suchen.mobile.de/fahrzeuge/mymobile/searchOverview.html')
    // }

    let seachLinks = await getAllSearchespage(page, 3);
    let datas = []
    for (const link of seachLinks) {
        console.log('Navigating to:', link);
        await navigateToEachSearchFilter(page, link);
        console.log('Navigated to:', link);
        let data = await pageInfo(page);
        datas.push(data);
    }
    saveJson(datas, 'data.json');

    await browser.close();
}



main();




