const { pageDetail } = require("../constants");

async function navigateToSearchInfoFromHome(page){
    let s = pageDetail.searchInfoPage.selector
    await console.log('Waiting for selector:', s)
    await page.waitForSelector(s)
    console.log('Navigating to search info page')
    page.goto(pageDetail.searchInfoPage.url)
    // await page.waitForNavigation()
}




module.exports = {
    navigateToSearchInfoFromHome
}


