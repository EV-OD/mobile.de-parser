const { pageDetail } = require("../constants");

async function navigateToSearchInfoFromHome(page){
    let s = pageDetail.searchInfoPage.selector
    await console.log('Waiting for selector:', s)
    await page.waitForSelector(s)
    console.log('Navigating to search info page')
    page.goto(pageDetail.searchInfoPage.url)
    // await page.waitForNavigation()
}

async function navigateToEachSearchFilter(page, url) {
    await page.goto(url)
    await page.waitForSelector(pageDetail.searchInfoPage.eachPage.selector.name)
    await console.log('done')
}

async function goBack(page){
    await page.goBack()
}




module.exports = {
    navigateToSearchInfoFromHome,
    navigateToEachSearchFilter,
    goBack
}


