require('dotenv').config();
// const puppeteer = require('puppeteer');
const UserAgent = require('user-agents');
const ua = new UserAgent({ deviceCategory: "desktop" });
const newUserAgent = ua.userAgent;

// puppeteer.use(StealthPlugin());

const { pup } = require('../pup');
const { sleep } = require('../utils/sleep');
// const { default: puppeteer } = require('puppeteer');
const { randomRange } = require('../utils/helpers');
const { getProxy } = require('./proxy');
const { pageDetail } = require('../constants');

async function createBrowser(proxy = null) {

  const proxyData = await getProxy(randomRange(0, 9));
  const proxyip = await proxyData.proxy_address;
  const proxyport = proxyData.port;
  const proxyuser = proxyData.username;
  const proxypass = proxyData.password;

  const args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--disable-gpu',
    '--window-size=1920x1080'
  ];

  // Add proxy argument if provided
  if (proxyData) {
    args.push(`--proxy-server=${proxyip}:${proxyport}`);
  }

  const browser = await pup.launch({
    headless: false, // Set to false for debugging
    args: args,
    executablePath: "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe",
    // executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    defaultViewport: null,
    userDataDir: pageDetail.userDataDir
  });

  return { browser, proxyData };
}

function createPage(browser) {
  return browser.newPage();
}

async function setupBrowserAndPage(proxy = null) {
  const {browser, proxyData} = await createBrowser(proxy);
  const page = await createPage(browser);

  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.49 Safari/537.36'
  );
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
  });
  await page.emulateTimezone('Europe/Berlin');
  return { browser, page, proxyData };
}

module.exports = {
  createBrowser,
  createPage,
  setupBrowserAndPage,
};
