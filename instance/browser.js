require('dotenv').config();
// const puppeteer = require('puppeteer');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// puppeteer.use(StealthPlugin());

const { pup } = require('../pup');

function createBrowser(proxy = null) {
  const args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--disable-gpu',
    '--window-size=1920x1080'
  ];

  // Add proxy argument if provided
  if (proxy) {
    args.push(`--proxy-server=${proxy}`);
  }

  return pup.launch({
    headless: false, // Set to false for debugging
    args: args,
    // executablePath: "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe",
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    defaultViewport: null,
  });
}

function createPage(browser) {
  return browser.newPage();
}

async function setupBrowserAndPage(proxy = null) {
  const browser = await createBrowser(proxy);
  const page = await createPage(browser);

  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.49 Safari/537.36'
  );
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
  });
  await page.emulateTimezone('Europe/Berlin');
  return { browser, page };
}

module.exports = {
  createBrowser,
  createPage,
  setupBrowserAndPage,
};
