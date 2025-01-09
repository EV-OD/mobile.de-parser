require('dotenv').config();
const puppeteer = require('puppeteer');


function createBrowser() {
  return puppeteer.launch({
    headless: false, // Set to false for debugging
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        '--window-size=1920x1080'
    ],
    defaultViewport: null
});
}

function createPage(browser) {
    return browser.newPage();
}

async function setupBrowserAndPage() {
    const browser = await createBrowser();
    const page = await createPage(browser);
    await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.49 Safari/537.36'
    );
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9'
    });
    await page.emulateTimezone('Europe/Berlin');
    return { browser, page };
}



module.exports = {
    createBrowser,
    createPage,
    setupBrowserAndPage
}
